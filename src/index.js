import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './componets/Dashboard';
import Customers, { loader as customersLoader } from './componets/Customers';
import Customer, { loader as customerLoader } from './componets/Customer';
import Products, { loader as productsLoader } from './componets/Products';
import Orders, { loader as ordersLoader } from './componets/Orders';
import Order, { loader as orderLoader } from './componets/Order';
import Reporsts from './componets/Reports';
import Provinces, { loader as provincesLoader } from './componets/Provinces';
import Categories, { loader as categoriesLoader } from './componets/Categories';
import Users, { loader as usersLoader } from './componets/Users';
import Category, { loader as categoryLoader } from './componets/Category';
import Product, { loader as productLoader } from './componets/Product';
import DeleteProduct, { loader as deleteProductLoader } from './componets/DeleteProducts';
import DeleteCustomer, { loader as deleteCustomerLoader } from './componets/DeleteCustomer';
import Login from './componets/Login';
import Logout, { loader as logoutLoader } from './componets/Logout';



let provinces = [
  {
    id: 1001, name: 'guilan', cities: [
      { id: 2001, name: 'rasht' },
      { id: 2002, name: 'lahijan' },
      { id: 2003, name: 'langroud' },
    ]
  },
  {
    id: 1002, name: 'tehran', cities: [
      { id: 2001, name: 'tehran' },
      { id: 2002, name: 'varamin' },
      { id: 2003, name: 'damavand' },
    ]
  },
]
localStorage.removeItem('provinces')
if (localStorage.getItem('provinces') == null) {
  localStorage.setItem('provinces', JSON.stringify(provinces))
}

let users = [
  { id: 3001, name: 'ali', username: 'ali1234', password: '1234' },
  { id: 3002, name: 'mehran', username: 'mehran1234', password: '2536' },
  { id: 3003, name: 'amir', username: 'amir1234', password: '4507' },
]
localStorage.removeItem('users')
if (localStorage.getItem('users') == null) {
  localStorage.setItem('users', JSON.stringify(users))
}

let categories = [
  { id: 4001, name: 'pc' },
  { id: 4002, name: 'laptop' },
  { id: 4003, name: 'mobile' },
  { id: 4004, name: 'tv' },
  { id: 4005, name: 'camera' },
]
localStorage.removeItem('categories')
if (localStorage.getItem('categories') == null) {
  localStorage.setItem('categories', JSON.stringify(categories))
}

let brands = [
  { id: 5001, name: 'adidas' },
  { id: 5002, name: 'lenovo' },
  { id: 5003, name: 'asus' },
  { id: 5004, name: 'apple' },
]
localStorage.removeItem('brands')
if (localStorage.getItem('brands') == null) {
  localStorage.setItem('brands', JSON.stringify(brands))
}

let products = [
  { id: 6001, name: 'rogg14', brand: 'asus', categories: ['laptop'], stock: false, price: 120000000 },
  { id: 6002, name: 'Galaxy A54', brand: 'samsung', categories: ['mobile'], stock: true, price: 250000000 },
  { id: 6003, name: 'QLED', brand: 'samsung', categories: ['tv'], stock: false, price: 360000000 },
  { id: 6004, name: 'AllinOnes', brand: 'samsung', categories: ['pc'], stock: true, price: 125000000 },
  { id: 6005, name: 'APS', brand: 'sony', categories: ['camera'], stock: true, price: 88000000 },
  { id: 6006, name: 'j7', brand: 'asus', categories: ['mobile'], stock: false, price: 63000000 },
  { id: 6007, name: 'rogg14', brand: 'asus', categories: ['laptop'], stock: false, price: 750000000 },
  { id: 6008, name: 'EOS', brand: 'canon', categories: ['camera'], stock: true, price: 365000000 },
  { id: 6009, name: 'Oled', brand: 'lg', categories: ['tv'], stock: true, price: 77000000 },
  { id: 6010, name: 'A32', brand: 'samsung', categories: ['mobile'], stock: false, price: 45000000 },
]
localStorage.removeItem('products')
if (localStorage.getItem('products') == null) {
  localStorage.setItem('products', JSON.stringify(products))
}



let customers = [
  { id: 7001, name: 'mehdi', family: 'alavi', address: ['laleh st', 'azar alley'], province: 'guilan', city: 'rasht' },
  { id: 7002, name: 'amir', family: 'derakhshan', address: ['azadi sq', 'farhang blv'], province: 'tehran', city: 'varamin' },
  { id: 7003, name: 'amin', family: 'safavi', address: ['yas st', 'niloufar alley'], province: 'guilan', city: 'langroud' },
  { id: 7004, name: 'saeid', family: 'sasani', address: ['abrisham sq', 'golestan alley'], province: 'guilan', city: 'lahijan' },
  { id: 7005, name: 'soheil', family: 'naderpour', address: ['north blv', 'keshavarz st'], province: 'tehran', city: 'damavand' }
]
localStorage.removeItem('customers')
if (localStorage.getItem('customers') == null) {
  localStorage.setItem('customers', JSON.stringify(customers))
}

let orders = [
  {
    id: 8007,
    customer: 7002, products: [
      { product: 6001, count: 2 },
      { product: 6003, count: 3 },
    ]
  },
  {
    id: 8008,
    customer: 7005, products: [
      { product: 6006, count: 3 },
      { product: 6001, count: 1 },
    ]
  },
  {
    id: 8009,
    customer: 7003, products: [
      { product: 6004, count: 2 },
      { product: 6005, count: 2 },
    ]
  },
]
localStorage.removeItem('orders')
if (localStorage.getItem('orders') == null) {
  localStorage.setItem('orders', JSON.stringify(orders))
}


const nextCustomerId = 7006
if (localStorage.getItem('nextCustomerId') == null) {
  localStorage.setItem('nextCustomerId', JSON.stringify(nextCustomerId))
}

const nextCatId = 4006
if (localStorage.getItem('nextCatId') == null) {
  localStorage.setItem('nextCatId', JSON.stringify(nextCatId))
}

const nextProductId = 6011
if (localStorage.getItem('nextProductId') == null) {
  localStorage.setItem('nextProductId', JSON.stringify(nextProductId))
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'customers',
        element: <Customers />,
        loader: customersLoader
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader
      },
      {
        path: 'reports',
        element: <Reporsts />
      },
      {
        path: 'provinces',
        element: <Provinces />,
        loader: provincesLoader
      },
      {
        path: 'categories',
        element: <Categories />,
        loader: categoriesLoader
      },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader
      },
      {
        path: 'categories/:id',
        element: <Category />,
        loader: categoryLoader
      },
      {
        path: 'products/:id',
        element: <Product />,
        loader: productLoader
      },
      {
        path: 'products/delete/:id',
        element: <DeleteProduct />,
        loader: deleteProductLoader
      },
      {
        path: 'customers/:id',
        element: <Customer />,
        loader: customerLoader
      },
      {
        path: 'customers/delete/:id',
        element: <DeleteCustomer />,
        loader: deleteCustomerLoader
      },
      {
        path: 'orders/:id',
        element: <Order />,
        loader: orderLoader
      },
    ]
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'logout',
    element: <Logout />,
    loader: logoutLoader
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
