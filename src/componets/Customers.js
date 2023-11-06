import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function loader(data) {
    const customers = JSON.parse(localStorage.getItem('customers'))
    return customers
}
function Customers() {
    let customers = useLoaderData()
    let navigate = useNavigate()
    return (
        <>
        <div className="box-content">
                <Link to='/customers/0' className="addCase" data-replace="Add Customer"><span>Add Customer</span></Link>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>family</th>
                            <th>Address</th>
                            <th>Province</th>
                            <th>City</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer) => (
                                <tr>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.family}</td>
                                    <td>{customer.address.join(', ')}</td>
                                    <td>{customer.province}</td>
                                    <td>{customer.city}</td>
                                    <td>
                                        <input type="button" className="del-btn" value='delete' onClick={() => {

                                            Swal.fire({
                                                title: 'Do you want to delete the file?',
                                                showDenyButton: true,
                                                confirmButtonText: 'Yes',
                                                denyButtonText: `No`,
                                            }).then((result) => {
                                                if (result.isConfirmed) {

                                                    navigate('/customers/delete/' + customer.id)

                                                }

                                            })
                                        }} 
                                        />
                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </>
    );
}

export default Customers;