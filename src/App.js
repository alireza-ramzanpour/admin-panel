import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, redirect } from "react-router-dom";
import './style.css'


export function loader(data) {
  if (localStorage.getItem('username') === null) {
    return redirect('/login')
  }
}
function App() {
  const users = JSON.parse(localStorage.getItem('users'))
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function visitor() {
    let visitText
    users.forEach((user) => {
      if (localStorage.getItem('username') === user.username) {
        visitText = 'Welcome ' + user.name
      }
    })
    return visitText
  }



  useEffect(() => {
    if (!localStorage.getItem('username')) {
      navigate('/login');
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [navigate, setIsLoggedIn])


  useEffect(() => {
    let liElems = document.querySelectorAll('li');
    liElems.forEach((liElem) => {
      liElem.addEventListener('click', function () {
        if (!liElem.classList.contains('clipPath')) {
          liElems.forEach((otherLiElem) => {
            otherLiElem.classList.remove('clipPath');
          });
          liElem.classList.add('clipPath');
        }
      });
    });
  }, [])



  // if (!isLoggedIn) {
  //   return null
  // }

  return (
    <>



      <div className="nav-wrapper">
        <div className="left-nav">
          <h1 className="admin-title">Admin Panel</h1>
        </div>
        <div className="right-nav">
          <div className="searchBox">
            <i className="fa fa-search" />
            <input type="text" className="search-input" placeholder="Search here..." />
          </div>
          <div className="notification">
            <div className="noti-box">
              <i className="fa fa-bell-o"></i>
            </div>
            <div className="noti-box">
              <i className="fa fa-envelope-o "></i>
            </div>
            <h3 className="username">{visitor()}</h3>
            <input type="button" className="logout-btn" value="Logout" onClick={() => {
              navigate('/logout')
            }} />
          </div>
        </div>
      </div>


      <div className="main-wrapper">
        <div className="left-context">
          <div className="user-image">
            <img src="image/find_user.png" alt="USER" />
          </div>
          <div className="menu">
            <ul className="items">
              <Link to='/dashboard' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-dashboard fa-2x"></i>
                  </div>
                  <span>Dashboard</span>
                </li>
              </Link>
              <Link to='/customers' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-users fa-2x"></i>
                  </div>
                  <span>Customers</span>
                </li>
              </Link>
              <Link to='/products' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-qrcode fa-2x"></i>
                  </div>
                  <span>Products</span>
                </li>
              </Link>
              <Link to='/orders' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-shopping-bag fa-2x"></i>
                  </div>
                  <span>Orders</span>
                </li>
              </Link>
              <Link to='/reports' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-newspaper-o fa-2x"></i>
                  </div>
                  <span>Reporsts</span>
                </li>
              </Link>
              <Link to='/provinces' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-map-marker fa-2x"></i>
                  </div>
                  <span>Provinces</span>
                </li>
              </Link>
              <p className="info-text">Info</p>
              <br />

              <Link to='/categories' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-sitemap fa-2x"></i>
                  </div>
                  <span>Categories</span>
                </li>
              </Link>
              <Link to='/users' className='menu-link'>
                <li className="item">
                  <div className="icon-menu">
                    <i className="fa fa-user fa-2x"></i>
                  </div>
                  <span>Users</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="right-context">
          <div className="page-wrapper">
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
