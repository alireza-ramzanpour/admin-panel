import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import '../style.css'
import Swal from "sweetalert2";

export function loader(data) {
    const products = JSON.parse(localStorage.getItem('products'))
    return products
}

function Products() {
    let products = useLoaderData()
    let navigate = useNavigate()
    const [choosenProducts, setChoosenProduct] = useState(products)
    return (
        <>
         <div className="box-content">
                <Link to='/products/0' className="addCase" data-replace="Add Product"><span>Add Product</span></Link> <br />

                {/* <span>Search for... </span> */}
                <input type="text" className="searchPage" placeholder="Search for..." onChange={(event) => {
                    const searchValue = event.target.value.toLowerCase().trim();
                    if (searchValue !== '') {
                        const filteredProducts = products.filter((product) =>
                            product.name.toLowerCase().includes(searchValue) ||
                            product.brand.toLowerCase().includes(searchValue) ||
                            product.categories.some(category => category.toLowerCase().includes(searchValue))
                        );
                        setChoosenProduct(filteredProducts);
                    } else {
                        setChoosenProduct(products)
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
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
                                        
                                        <input type="button" className="del-btn" value='delete' onClick={() => {

                                            Swal.fire({
                                                title: 'Do you want to delete the file?',
                                                showDenyButton: true,
                                                confirmButtonText: 'Yes',
                                                denyButtonText: `No`,
                                            }).then((result) => {
                                                if (result.isConfirmed) {

                                                    navigate('/products/delete/' + product.id)

                                                }

                                            })
                                        }} />
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

export default Products;
