import React, { useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


export function loader(data) {
    const products = JSON.parse(localStorage.getItem('products'))
    const brands = JSON.parse(localStorage.getItem('brands'))
    const categories = JSON.parse(localStorage.getItem('categories'))
    const nextProductId = JSON.parse(localStorage.getItem('nextProductId'))

    return { products: products, brands: brands, categories: categories, nextProductId: nextProductId }
}
function Product() {
    let txtName = useRef()
    let chkStock = useRef()
    let numPrice = useRef()
    let selectBrand = useRef()
    let chkCategory = useRef([])
    let data = useLoaderData()
    let navigate = useNavigate()

    return (
        <>
         <div>

                <form>

                    <label htmlFor='name'>Name: </label>
                    <input type="text" className="inputClass" placeholder="Enter the name..." ref={txtName} /> <br />

                    <label htmlFor='stock'>Stock: </label>
                    <input type="checkBox" className="inputClass" ref={chkStock} /> <br />

                    <label htmlFor='price'>Price: </label>
                    <input type="number" className="inputClass" placeholder="Enter the price..." ref={numPrice} /> <br />

                    <label htmlFor='brand'>Brand: </label>
                    <select ref={selectBrand} className="inputClass">
                        {
                            data.brands.map((brand) => (
                                <option value={brand.name}>{brand.name}</option>
                            ))
                        }
                    </select>

                    <br /><br />

                    <label htmlFor='category'>Category: </label> <br />

                    {
                        data.categories.map((category) => (
                            <>
                                <input type="checkBox" value={category.name} ref={(element) => {
                                    chkCategory.current.push(element)
                                }} />
                                {category.name}
                                <br />
                            </>
                        ))
                    }

                    <br />

                    <input type="button" className="saveBtn" value='Save' onClick={() => {
                        let newProducts = data.products.concat({
                            id: data.nextProductId,
                            name: txtName.current.value,
                            stock: chkStock.current.checked,
                            price: numPrice.current.value,
                            brand: selectBrand.current.value,
                            categories:
                                chkCategory.current.filter((category) => category.checked).map((item) => item.value)
                        })
                        localStorage.setItem('products', JSON.stringify(newProducts))
                        localStorage.setItem('nextProductId', JSON.stringify(data.nextProductId + 1))
                        navigate('/products')
                    }} />


                </form>
            </div>
        </>
    );
}

export default Product;