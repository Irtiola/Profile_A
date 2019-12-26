import React from "react"
import { Link } from "react-router-dom"
import './comp.css';
// import {Nav, Navbar} from 'react-bootstrap';
const Header = () => 
    (
       
        
        <nav>
                <Link to={"/"} className="brand-logo">Amir Baserinia</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={"/about"}>About </Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/contacts"}>Contact me</Link></li>
                </ul>
        </nav>
    )


export default Header