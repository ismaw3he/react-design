import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <img src="http://localhost:3000/img/logo.png" alt="logo"/>
                </div>
                <ul className="links">
                    <Link to={"/home"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>About</li>
                    </Link>
                    <Link to={"/projects"}>
                        <li>Projects</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;