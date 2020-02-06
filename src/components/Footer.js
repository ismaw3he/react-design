import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-info-container">
                    <h3>Piroll Design, Inc.</h3>
                    <p>© 2017 Piroll. All rights reserved.
                        Designed by robirurk.
                    </p>
                </div>
                <div className="footer-info-container">
                    <p>hello@pirolltheme.com</p>
                    <p> +44 987 065 908</p>
                </div>
                <div className="footer-info-container">
                    <Link to={"/home"}>
                        <p>Home</p>
                    </Link>
                    <Link to={"/about"}>
                        <p>About</p>
                    </Link>
                    <Link to={"/projects"}>
                        <p>Projects</p>
                    </Link>
                    <Link to={"/contact"}>
                        <p>Contact</p>
                    </Link>
                </div>

            </footer>
        );
    }
}

export default Footer;