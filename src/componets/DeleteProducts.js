import React from "react";
import { redirect } from "react-router-dom";

export function loader(data) {
    const id = data.params.id
    const products = JSON.parse(localStorage.getItem('products'))
    let filterProduct = products.filter((product) => product.id != id)
    localStorage.setItem('products', JSON.stringify(filterProduct))
    return redirect('/products')
}
function DeleteProduct() {


    return (
        <>
            <h1>This is Delete Product Page</h1>

        </>
    );
}

export default DeleteProduct;