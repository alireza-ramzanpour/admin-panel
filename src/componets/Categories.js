import React from "react";
import { Link, useLoaderData } from "react-router-dom";



export function loader(data) {
    const categories = JSON.parse(localStorage.getItem('categories'))
    return categories
}


function Categories() {
    let users = useLoaderData()
    return (
        <>
        <div className="box-content">
                <Link to='/categories/0' className="addCase" data-replace="Add Category"><span>Add Category</span></Link>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </>
    );
}

export default Categories;