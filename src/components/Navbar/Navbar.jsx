import React, { useState, useContext } from 'react';
import { AuthContext, AuthContextProvider } from "../../Context/AuthContext";
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from "firebase/auth"
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email);
  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size={35} style={{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            {currentUser?.email
              ?
              <div style={{ gap: '0px', alignItems: 'center', height: '100%' }} className="flex ">
                <li style={{ margin: '0 15px', background: 'purple', color: 'white', padding: '5px', borderRadius: '10px' }} classNam="" >{currentUser.email}</li>
                <li style={{ margin: '0 15px' }} classNam="" ><button onClick={() => { signOut(auth); window.location.reload() }}>Sign out</button></li>
              </div>
              :
              <div>
                <li className='nav-item'>
                  <Link to="login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link to="register" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Register</Link>
                </li></div>}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar