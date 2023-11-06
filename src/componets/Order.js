import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function loader(data) {
    const customers = JSON.parse(localStorage.getItem('customers'))
    const products = JSON.parse(localStorage.getItem('products'))
    return { customers, products }
}
function Order() {

    let data = useLoaderData()
    let txtCustomerSearch = useRef()
    let txtProductSearch = useRef()
    const [choosenCustomers, setChoosenCustomers] = useState(data.customers)
    const [choosenProducts, setChoosenProducts] = useState(data.products)
    const [customerId, setCustomerId] = useState()
    const [customerName, setCustomerName] = useState()
    const [selectedProducts, setSelectedProducts] = useState([])
    const txtCount = useRef([])


    return (
        <>
            <div className="box-content">

                <input type="text" className="searchPage" placeholder="Search for..." ref={txtCustomerSearch} onChange={(event) => {
                    const searchValue = event.target.value.toLowerCase().trim()
                    if (searchValue !== '') {
                        const filteredCustomers = data.customers.filter((customer) =>
                            customer.name.toLowerCase().includes(searchValue) ||
                            customer.family.toLowerCase().includes(searchValue)
                        )
                        setChoosenCustomers(filteredCustomers)
                    } else {
                        setChoosenCustomers(choosenCustomers)
                    }
                }} />
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>family</th>
                            <th>add order</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            choosenCustomers.map((customer) => (
                                <tr>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.family}</td>
                                    <td>
                                        <input type="button" className="saveBtn" value='add' onClick={() => {
                                            setCustomerId(customer.id)
                                            setCustomerName(customer.name)
                                        }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <p>{customerName}</p>

            </div>
            <br />

            <div className="box-content">
                <input type="text" className="searchPage" placeholder="Search for..." ref={txtProductSearch} onChange={(event) => {
                    const searchValue = event.target.value.toLowerCase().trim()
                    if (searchValue !== '') {
                        const filteredProducts = data.products.filter((product) =>
                            product.name.toLowerCase().includes(searchValue) ||
                            product.brand.toLowerCase().includes(searchValue) ||
                            product.categories.some(category => category.toLowerCase().includes(searchValue))
                        )
                        setChoosenProducts(filteredProducts)
                    } else {
                        setChoosenProducts(choosenProducts)
                    }

                }} />
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Categories</th>
                            <th>Stock</th>
                            <th>Prices</th>
                            <th>add</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            choosenProducts.map((product) => (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.categories.join(', ')}</td>
                                    <td>
                                        <input type="checkbox" disabled defaultChecked={product.stock} />
                                    </td>
                                    <td>{product.price.toLocaleString()}</td>
                                    <td>
                                        <input type="button" className="saveBtn" value='add'  onClick={() => {
                                            if (!selectedProducts.some((p) => p.id == product.id)) {
                                                let selectedList = selectedProducts.concat({ id: product.id, name: product.name })
                                                setSelectedProducts(selectedList)
                                                // txtCount = useRef([])
                                                // txtCount.current.clear()

                                            } else {
                                                return 0
                                            }

                                        }} />
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>


                <table className="styled-table">
                    {
                        selectedProducts.map((product) => (

                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>
                                    <input type="number" className="quantity" defaultValue='1' min="1" max="100" step="1" ref={(elm) => txtCount.current.push(elm)} />
                                </td>
                            </tr>
                        ))

                    }
                </table>
                <input type="button" className="saveBtn" value='Save' onClick={() => {
                   selectedProducts.forEach((pr, index) => {
                    console.log(pr.id, pr.name, txtCount.current[index].value);
                   })
                }} />

            </div>

        </>
    );
}

export default Order;