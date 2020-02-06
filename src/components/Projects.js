import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Projects extends Component {

    state = {
        loading: true,
        data: null,
        pictures: []
    };

    async componentDidMount() {
        const url = "./data.json";

        const response = await fetch(url);

        const info = await response.json();
        const images = [];
        for (let item of info) {
            let sectionStyle = {
                backgroundImage: `url(${item.img})`,
                height: "300px",
                width: "100%",
                backgroundPosition: "center"
            };
            images.push(<Link key={item.id} to={`projects/${item.id}`}>
                <div
                     id={item.id}
                     className="image-single"
                     style={sectionStyle}
                >
                    <img src="./img/eye.png" className="eye" alt="eye"/>
                </div>
            </Link>)
        }
        this.setState({
            data: info,
            loading: false,
            pictures: images
        });
    }

    render() {
        return (
            <div>
                <div className="projects-page-container">
                    <h1 className="section-header">UI/UX & Graphic Designer</h1>
                    <p className="section-info">I am a Graphic & Web Designer based in New York, specializing
                        in User Interface Design and Development.
                    </p>
                </div>
                <div className="images-college">
                    {this.state.loading ? <div>Loading...</div>
                        : !this.state.data ? <div>didn't get data</div>
                            : this.state.pictures
                    }
                </div>
            </div>

        );
    }
}

export default Projects;