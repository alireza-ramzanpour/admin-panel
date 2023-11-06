import React, { useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export function loader(data) {
    const nextCatId = JSON.parse(localStorage.getItem('nextCatId'))
    const categories = JSON.parse(localStorage.getItem('categories'))
    return { nextCatId: nextCatId, categories: categories }
}
function Category() {

    let data = useLoaderData()
    let txtCat = useRef()
    let navigate = useNavigate()

    return (
        <>
        <input type="text" className="inputClass" placeholder="Enter Category" ref={txtCat} /> <br />

            <input type="button" className="saveBtn" value='Save' onClick={() => {
                const newList = data.categories.concat({
                    id: data.nextCatId,
                    name: txtCat.current.value
                })
                localStorage.setItem('categories', JSON.stringify(newList))
                localStorage.setItem('nextCatId', JSON.stringify(data.nextCatId + 1))
                navigate('/categories')
            }} />



        </>
    );
}

export default Category;