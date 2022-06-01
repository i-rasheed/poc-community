import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const userIsLoggedIn = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      {userIsLoggedIn ? (
        <>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <Link to='/' className='navbar-brand'>
                Navbar
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse justify-content-end'
                id='navbarNav'
              >
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link
                      to='/'
                      className='nav-link active'
                      aria-current='page'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/propose' className='nav-link'>
                      Propose Idea
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/ideas' className='nav-link'>
                      Ideas list
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <button className='btn btn-secondary' onClick={logout}>
                      logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <Link to='/' className='navbar-brand'>
                Navbar
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse justify-content-end'
                id='navbarNav'
              >
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link
                      to='/'
                      className='nav-link active'
                      aria-current='page'
                    >
                      Home
                    </Link>
                  </li>
                  {/* <li className='nav-item'>
                    <Link to='/propose' className='nav-link'>
                      Propose Idea
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/ideas' className='nav-link'>
                      Ideas list
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
