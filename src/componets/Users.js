import React from "react";
import { useLoaderData } from "react-router-dom";



export function loader(data) {
    const users = JSON.parse(localStorage.getItem('users'))
    return users
}

function Users() {
    let users = useLoaderData()
    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </>
    );
}

export default Users;