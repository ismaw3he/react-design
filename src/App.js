import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import "./About.css";
import "./Contact.css";
import "./Home.css";
import "./Projects.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectView from "./components/ProjectView";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {

    return (
        <Router>
            <div className="App">
                <Nav/>

                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/projects" exact component={Projects}/>
                    <Route path="/projects" component={ProjectView}/>
                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
