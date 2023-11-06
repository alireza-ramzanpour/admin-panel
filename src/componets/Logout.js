import React from "react";
import { redirect } from "react-router-dom";


export function loader(data) {
    localStorage.removeItem('username')
    return redirect('/login')

}

function Logout() {

    return (
        <>
            <h1>Logout Page</h1>


        </>

    );
}

export default Logout;