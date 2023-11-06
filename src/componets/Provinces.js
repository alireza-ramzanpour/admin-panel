import React from "react";
import { useLoaderData } from "react-router-dom";



export function loader(data) {
    const provinces = JSON.parse(localStorage.getItem('provinces'))
    return provinces
}


function Provinces() {
    let provinces = useLoaderData()
    return (
        <>
        <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Cities</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        provinces.map((province) => (
                            <tr>
                                <td>{province.id}</td>
                                <td>{province.name}</td>
                                <td>{province.cities.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>



        </>
    );
}

export default Provinces;