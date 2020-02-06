import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="section-profile">
                    <div className="profile-container">
                        <h1>Amelia Woods</h1>
                        <p>I am a Graphic & Web Designer based in New York, specializing
                            in User Interface Design and Development.
                        </p>
                    </div>
                </section>
                <section className="statistics">

                    <div className="numbers-card">
                        <img src="img/bag.png" alt="bag" />
                            <div className="numbers-card-info">
                                <h3>548</h3>
                                <p>PROJECTS COMPLETED</p>
                            </div>
                    </div>


                    <div className="numbers-card">
                        <img src="img/clock.png" alt="clock" />
                            <div className="numbers-card-info">
                                <h3 className="numbers-card-count">1465</h3>
                                <p>WORKING HOURS</p>
                            </div>
                    </div>


                    <div className="numbers-card">
                        <img src="img/star.png" alt="star" />
                            <div className="numbers-card-info">
                                <h3 className="numbers-card-count">612</h3>
                                <p>POSITIVE FEEDBACKS</p>
                            </div>
                    </div>


                    <div className="numbers-card">
                        <img src="img/heart.png" alt="heart" />
                            <div className="numbers-card-info">
                                <h3 className="numbers-card-count">735</h3>
                                <p>HAPPY CLIENTS</p>
                            </div>
                    </div>


                </section>

                <section className="section-about-me">
                    <div className="about-me-container">
                        <h2 className="about-header">About me</h2>

                        <p className="about-text">
                            Given let waters air sea had you'll, may seed abundantly fish.
                            Were, you'll earth forth winged above brought. Own darkness
                            they're him can't fourth sea place have.
                        </p>

                        <p className="about-text">
                            So the above May stars cattle fruitful face shall. Tree it, winged.
                            Every signs male firmament us. Morning him.
                        </p>

                        <img className="about-me-sign" src="img/signature.png" alt="signature" />
                    </div>
                </section>

                <section className="section-need-project">
                    <div className="need-project-container">
                        <h2 className="section-header">Need a Project?</h2>
                        <p className="section-info">Let us know what you're looking for in an agency. We'll take a look
                            and see
                            if this could be the start of something beautiful.
                        </p>
                        <div className="btn-green">LET'S TALK</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;