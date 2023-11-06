import React from "react";
import { redirect } from "react-router-dom";

export function loader(data) {
    console.log(data.params.id);
    const id = data.params.id
    const customers = JSON.parse(localStorage.getItem('customers'))
    let filterCustomers = customers.filter((customer) => customer.id != id)
    localStorage.setItem('customers', JSON.stringify(filterCustomers))
    return redirect('/customers')
}
function DeleteCustomer() {


    return (
        <>
          <h1>This is Delete Customer Page</h1>

        </>
    );
}

export default DeleteCustomer;