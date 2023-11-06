import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export function loader(data) {
    const customers = JSON.parse(localStorage.getItem('customers'))
    const products = JSON.parse(localStorage.getItem('products'))
    const orders = JSON.parse(localStorage.getItem('orders'))
    return { customers: customers, products: products, orders: orders }
}
function Orders() {
    let data = useLoaderData()
    return (
        <>
            <div className="box-content">
                <Link to='/orders/0' className="addCase" data-replace="Add Order"><span>Add Order</span></Link> <br />
                <table className="styled-table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Customers</td>
                            <td>Products</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.orders.map((order) => {
                                let findCustomer = data.customers.find((customer) => customer.id == order.customer)
                                let findMaterials = order.products.map((material) => {
                                    return data.products.find((product) => product.id == material.product)
                                })
                                let productNames = findMaterials.map((product) => product.name)
                                return (
                                    <tr>
                                        <td>{order.id}</td>
                                        <td>{findCustomer.name + ' ' + findCustomer.family}</td>
                                        <td>{productNames.join(', ')}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>




        </>
    );
}

export default Orders;