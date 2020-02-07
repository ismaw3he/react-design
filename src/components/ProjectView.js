import React, {Component} from 'react';

class ProjectView extends Component {

    constructor(match) {
        super();
        this.state = {
            loading: true,
            data: null,
            id: parseInt(match.location.pathname.slice(10)),
            imgStyle:{backgroundImage: `url("http://localhost:3000/img/img-0.jpg")`}
        };
        // this.movePrev = this.movePrev.bind(this);
        // this.moveNext = this.moveNext.bind(this);

    }

    async componentDidMount() {
        const url = "http://localhost:3000/data.json";
        console.log("Component Mounted");
        const response = await fetch(url);
        const info = await response.json();
        this.setState({data: info, loading: false,imgStyle:{backgroundImage: `url(${info[this.state.id].img})`}});

    }
    moveNext=()=>{
        console.log("Move Next");
        let idNew;
        if(this.state.id<11){
            idNew=this.state.id+1;
        }
        else{
            idNew=0;
        }

        let style=`url(${this.state.data[idNew].img})`;
        this.setState({loading: false,data:this.state.data, id:idNew,imgStyle:{backgroundImage: style}});

    };
    movePrev=()=>{
        console.log("Move Prev");
        let idNew;
        if(this.state.id>0){
            idNew=this.state.id-1;
        }
        else{
            idNew=11;
        }
        let style=`url(${this.state.data[idNew].img})`;
        this.setState({id:idNew,imgStyle:{backgroundImage: style}})
    };

    render() {
        return (
            <div>
                {this.state.loading ? <div>Loading...</div>
                    : !this.state.data ? <div>didn't get data</div>
                        : <div>
                            <div className="project-view-content">
                                <div className="project-view-about">
                                    <h1 className="section-header header-of-project">{this.state.data[this.state.id].header}</h1>

                                    <p className="section-info info-of-project">{this.state.data[this.state.id].info}</p>
                                    <div className="contact-us-info">
                                        <p><strong>Client:</strong> {this.state.data[this.state.id].client}</p>
                                        <p><strong>Date:</strong> {this.state.data[this.state.id].date}</p>
                                        <p><strong>Share:</strong> {this.state.data[this.state.id].share}</p>
                                    </div>
                                </div>


                                <div className="project-view-image" style={this.state.imgStyle}>

                                </div>
                            </div>

                            <div className="project-view-buttons">
                                <div  onClick={this.movePrev} className="prev-btn">
                                    <p> &#60; </p>
                                    <h4>PREVIOUS PROJECT</h4>
                                </div>

                                <img src="http://localhost:3000/img/rectangle.png" alt="rectangle"/>

                                <div onClick={this.moveNext} className="next-btn">
                                    <h4>NEXT PROJECT</h4>
                                    <p> &#62; </p>
                                </div>


                            </div>
                        </div>
                }
            </div>
        );
    }
}


export default ProjectView;