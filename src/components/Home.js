import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Slider from "react-slick";
import $ from "jquery";
import {Link} from "react-router-dom";



class Home extends Component {
    state = {
        loading: true,
        data: null,
        pictures: []
    };
    async componentDidMount() {
        let i = 0;
        let x = 0;
        let z = 0;

        function move(number, elem, percent) {
            let num = number;
            if (num === 0) {
                num = 1;
                let elements = document.getElementsByClassName("myBar");
                let width = 1;
                let id = setInterval(frame, 10);

                function frame() {
                    if (width >= percent) {
                        clearInterval(id);
                        num = 0;
                    } else {
                        width++;
                        elements[elem].style.width = width + "%";
                    }
                }
            }
            return num;
        }
        window.addEventListener("scroll",()=>{
            $(document).ready(function(){
                let currentScrollPosition=$(this).scrollTop();
                if(currentScrollPosition>600){
                    i = move(i, 0, 75);
                    x = move(x, 1, 90);
                    z = move(z, 2, 65);
                    console.log(i+x+z);
                }
                // console.log(currentScrollPosition);
            })
        })

    //    Load images
        const url = "./data.json";

        const response = await fetch(url);

        const info = await response.json();
        const images = [];
        let counter=0;
        for (let item of info) {
            if(counter===8){
                break;
            }
            counter++;
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
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false
        };
        return (
            <div>
                <div className="extra-space"></div>
                <header>
                    <div className="header-content">
                        <h1 className="section-header header-of-main">We Design and Develop</h1>
                        <p className="section-info">We are a new design studio based in USA. We have over
                            20 years of combined experience, and know a thing or two
                            about designing websites and mobile apps.
                        </p>
                        <div className="btn-green">
                            Contact Us
                        </div>
                    </div>
                </header>
                <section className="about-us">
                    <h1 className="section-header">About Us</h1>
                    <p className="section-info">Divide have don't man wherein air fourth. Own itself make have night
                        won't make.
                        A you under Seed appear which good give. Own give air without fowl moveth dry first
                        heaven fruit, dominion she'd won't very all.
                    </p>
                    <img className="signature" src="img/signature.png" alt="signature"/>
                </section>

                <section className="section-skills">
                    <div className="skills-container">
                        <h2 className="section-header">Professional Skills</h2>

                        <p>UI/UX Design 75%</p>

                        <div className="myProgress">
                            <div className="myBar"></div>
                        </div>

                        <p>web development 90%</p>

                        <div className="myProgress">
                            <div className="myBar"></div>
                        </div>

                        <p>marketing 65%</p>

                        <div className="myProgress">
                            <div className="myBar"></div>
                        </div>

                    </div>

                </section>


                <section className="statistics">

                    <div className="numbers-card">
                        <img src="img/bag.png" alt="bag"/>
                        <div className="numbers-card-info">
                            <h3>548</h3>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                    </div>


                    <div className="numbers-card">
                        <img src="img/clock.png" alt="clock"/>
                        <div className="numbers-card-info">
                            <h3 className="numbers-card-count">1465</h3>
                            <p>WORKING HOURS</p>
                        </div>
                    </div>


                    <div className="numbers-card">
                        <img src="img/star.png" alt="star"/>
                        <div className="numbers-card-info">
                            <h3 className="numbers-card-count">612</h3>
                            <p>POSITIVE FEEDBACKS</p>
                        </div>
                    </div>


                    <div className="numbers-card">
                        <img src="img/heart.png" alt="heart"/>
                        <div className="numbers-card-info">
                            <h3 className="numbers-card-count">735</h3>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>


                </section>


                <section>
                    <div className="images-college images-list-main-page">
                        {this.state.loading ? <div>Loading...</div>
                            : !this.state.data ? <div>didn't get data</div>
                                : this.state.pictures
                        }
                    </div>
                    <Link className="main-page-load-more" to={"/projects"}>
                        <li>LOAD MORE WORK</li>
                    </Link>
                </section>




                <section className="section-fancy">
                    <div className="fancy-content">
                        <h2 className="section-header">Our Work Process</h2>
                        <p className="section-info">
                            Was years it seasons was there form he in in them together over that,
                            third sixth gathered female creeping bearing behold years.
                        </p>
                        <div className="fancy-container" id="fancy-img">
                            <ReactFancyBox
                                thumbnail="img/fish.jpg"
                                image="img/fish.jpg"/>

                            {/*<a data-fancybox="gallery" href="img/dog.jpg"><img alt={"img"} id="fancy-img" src="img/dog.jpg"/></a>*/}
                        </div>
                    </div>
                </section>
                <section className="categories">
                    <div className="cards-container">
                        <div className="categories-row">
                            <div className="categories-card">
                                <img className="card-img" src="img/diamond.png" alt="diamond"/>
                                <h1 className="card-header">ui / ux design</h1>
                                <p className="card-about">Be set fourth land god darkness
                                    make it wherein own
                                </p>
                            </div>
                            <div className="categories-card">
                                <img className="card-img" src="img/umbrella.png" alt="diamond"/>
                                <h1 className="card-header">web development</h1>
                                <p className="card-about">A she'd them bring void moving
                                    third she'd kind fill
                                </p>
                            </div>
                            <div className="categories-card">
                                <img className="card-img" src="img/phone-black.png" alt="diamond"/>
                                <h1 className="card-header">app / mobile</h1>
                                <p className="card-about">Dominion man second spirit he,
                                    earth they're creeping
                                </p>
                            </div>
                            <div className="categories-card">
                                <img className="card-img" src="img/joy.png" alt="diamond"/>
                                <h1 className="card-header">game design</h1>
                                <p className="card-about">Morning his saying moveth it
                                    multiply appear life be
                                </p>
                            </div>
                        </div>


                        <div className="categories-row">
                            <div className="categories-card">
                                <img className="card-img" src="img/plane.png" alt="diamond"/>
                                <h1 className="card-header">SEO / marketing</h1>
                                <p className="card-about">Give won't after land fill creeping
                                    meat you, may
                                </p>
                            </div>
                            <div className="categories-card">
                                <img className="card-img" src="img/star-black.png" alt="diamond"/>
                                <h1 className="card-header">photography</h1>
                                <p className="card-about">Creepeth one seas cattle grass
                                    give moving saw give
                                </p>
                            </div>
                            <div className="categories-card">
                                <img className="card-img" src="img/magic.png" alt="diamond"/>
                                <h1 className="card-header">graphic design</h1>
                                <p className="card-about">Open, great whales air rule for,
                                    fourth life whales
                                </p>
                            </div>
                            <div className="categories-card">
                                <img className="card-img" src="img/paint.png" alt="diamond"/>
                                <h1 className="card-header">illustrations</h1>
                                <p className="card-about">Whales likeness hath, man kind
                                    for them air two won't
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-slider">
                    <Slider  className="single-item" {...settings}>
                        <div className="slider-item">
                                    <div className="slider-item-content">
                                        <p>“ Outstanding job and exceeded all expectations. It was a pleasure
                                        to work with them on a sizable first project and am looking
                                        forward to start the next one asap.”</p>
                                        <p>
                                            Michael Hopkins
                                        </p>
                                    </div>
                        </div>
                        <div className="slider-item">
                            <div className="slider-item-content">
                                <p>“ Outstanding job and exceeded all expectations. It was a pleasure
                                    to work with them on a sizable first project and am looking
                                    forward to start the next one asap.”</p>
                                <p>
                                    Michael Hopkins
                                </p>
                            </div>
                        </div>
                        <div className="slider-item">
                            <div className="slider-item-content">
                                <p>“ Outstanding job and exceeded all expectations. It was a pleasure
                                    to work with them on a sizable first project and am looking
                                    forward to start the next one asap.”</p>
                                <p>
                                    Michael Hopkins
                                </p>
                            </div>
                        </div>

                    </Slider>


                </section>

                <section className="section-images">
                    <div className="images-container">
                        <img src="img/handmade.png" alt="handmade"/>
                        <img src="img/mountain.png" alt="mountain"/>
                        <img src="img/collection.png" alt="collections"/>
                        <img src="img/mountainbike.png" alt="mountainBike"/>
                        <img src="img/handmade.png" alt="handmade"/>
                    </div>
                </section>

                <section className="need-project">
                    <div className="project-container">
                        <h1 className="section-header">Need a Project?</h1>
                        <p className="section-info">Let us know what you're looking for in an agency. We'll take a look
                            and see
                            if this could be the start of something beautiful.
                        </p>
                        <form>
                            <div className="form-row-1">
                                <input type="text" placeholder="Your Name" id="input-name"/>
                                <input type="text" placeholder="Your Email" id="input-email"/>
                            </div>

                            <input type="text" placeholder="Your Title" id="input-title"/>
                            <textarea name="message" rows="10" cols="85" className="input-comment" placeholder="Your Comment"></textarea>
                            <input type="submit" className="btn-green" id="input-submit" value="SEND MESSAGE"/>
                        </form>
                    </div>
                </section>

            </div>
        );
    }
}

export default Home;