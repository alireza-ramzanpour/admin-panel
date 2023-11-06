import React, { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export function loader(data) {
    const customers = JSON.parse(localStorage.getItem('customers'))
    const provinces = JSON.parse(localStorage.getItem('provinces'))
    const nextCustomerId = JSON.parse(localStorage.getItem('nextCustomerId'))

    return { customers: customers, provinces: provinces, nextCustomerId: nextCustomerId }
}
function Customer() {
    let txtName = useRef()
    let txtFamily = useRef()
    let slcProvince = useRef()
    let slcCity = useRef()
    let txtAddress = useRef()
    let [newAddress, setNewAddress] = useState([])
    let [newCites, setNewCities] = useState([])
    let data = useLoaderData()
    let navigate = useNavigate()

    return (
        <>
        <form>
                <label htmlFor='name'>Name:</label>
                <input type="text" className="inputClass" ref={txtName} />   <br />

                <label htmlFor='family'>Family:</label>
                <input type="text" className="inputClass" ref={txtFamily} />   <br />

                <label htmlFor='province'>Province: </label>
                <select ref={slcProvince} className="inputClass" onChange={(event) => {
                    let findProvince = data.provinces.find((province) => province.name === event.target.value)
                    setNewCities(findProvince.cities)
                }}>
                    {
                        data.provinces.map((province) => (

                            <option value={province.name}>{province.name}</option>

                        ))
                    }
                </select>
                <br />

                <label htmlFor='city'>City: </label>
                <select className="inputClass" ref={slcCity}>
                    {
                        newCites.map((city) => (
                            <option value={city.name}>{city.name}</option>
                        ))
                    }
                </select>
                <br />

                <label htmlFor='address'>Address:</label>
                <input type="text" className="inputClass" ref={txtAddress} />

                <input type="button" value='Add' className="saveBtn" onClick={() => {
                    setNewAddress(newAddress.concat({ newAddress: txtAddress.current.value }))
                    txtAddress.current.value = ""
                }} /> <br />

                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            newAddress.map((addr, index) => (
                                <tr>
                                    <td>{addr.newAddress}</td>
                                    <td>
                                        <input type="button" className="saveBtn" value='del' onClick={() => {
                                            const updatedAddress = [...newAddress];
                                            updatedAddress.splice(index, 1);
                                            setNewAddress(updatedAddress);
                                        }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> <br />

                <input type="button" value='Save' className="saveBtn" onClick={() => {
                    let newCustomer = data.customers.concat({
                        id: data.nextCustomerId,
                        name: txtName.current.value,
                        family: txtFamily.current.value,
                        address: newAddress.map((addr) => addr.newAddress),
                        province: slcProvince.current.value,
                        city: slcCity.current.value
                    })
                    localStorage.setItem('customers', JSON.stringify(newCustomer))
                    localStorage.setItem('nextCustomerId', JSON.stringify(data.nextCustomerId + 1))
                    navigate('/customers')
                }} />
            </form>

        </>
    );
}
export default Customer;