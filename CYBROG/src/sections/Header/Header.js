import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem , {NavItemDropDown} from '../../components/NavItem/NavItem'

const header = () => {
  return (
    <div id="mainNavigation">
	      <nav role="navigation">
	        <div className="invert py-3 text-center border-bottom">
	          <img src={logo} alt="" className="invert" />
	        </div>
	      </nav>
	      <div className="navbar-expand-md">
	        <div className="navbar-dark text-center my-2">
	          <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	            <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
	          </button>
	        </div>
	        <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
	          <ul className="navbar-nav mx-auto ">
	            <NavItem>
	              <a className="nav-link active" aria-current="page" href="#">Home</a>
				</NavItem>
	            <NavItem>
	              <a className="nav-link" href="#">Browse</a>
				</NavItem>
	            <NavItem>
	              <a className="nav-link" href="#">Details</a>
				</NavItem>
	            
	            <NavItemDropDown>
	              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
	                Games
	              </a>
	              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	                <li><a className="dropdown-item" href="#">Fortnite</a></li>
	                <li><a className="dropdown-item" href="#">Call of dutty</a></li>
	                <li><a className="dropdown-item" href="#">Contact us</a></li>
	              </ul>
				</NavItemDropDown>
	          </ul>
	        </div>
	      </div>
	    </div>
 
  )
}

export default header