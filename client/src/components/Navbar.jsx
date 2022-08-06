import React from 'react';
import {NavLink} from 'react-router-dom';
import web from 'C:\\Users\\avina\\Desktop\\Website\\mayavi\\client\\src\\images\\20.jpg';

const Navbar =() =>{
    return (
            <>
              <div className='container-fluid'>
                 <div className='row'>
                    <div className="col-12 mx-auto">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container">
                            <NavLink className="navbar-brand" to="/">
                            <img src={web} className='navbar-img' alt="home img"/>
                            NITA_ClubHub
                            </NavLink>
                        </div>
                        </nav>
           
                <nav className="navbar-2 navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand-2" to="/">
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' className="nav-link" exact to="/club">Clubs</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' className="nav-link" exact to="/login"><i className="fas fa-sign-in-alt "></i>Login</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeClassName='menu_active' className="nav-link " exact to="/signup"> <i className="fas fa-user"></i>Signup</NavLink>
                            </li>
                        </ul>
                             <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-light" type="submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
                </>
    );
}

export default Navbar;