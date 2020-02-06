import React, {Component} from 'react';

class ProjectView extends Component {

    constructor(match) {
        super();
        console.log(match.location.pathname.slice(10));
        this.state={
            loading: true,
            data: null,
            id:parseInt(match.location.pathname.slice(10))
        }
    }
    async componentDidMount() {
        const url = "http://localhost:3000/data.json";

        const response = await fetch(url, { redirect: "error" });
        console.log(response);
        const info = await response.text();
        console.log(info);
        this.setState({data:info,loading:false});
    }

    render() {
        return (
            <div>
                {this.state.loading ? <div>Loading...</div>
                    : !this.state.data ? <div>didn't get data</div>
                        : <div>

                        </div>
                }
            </div>
        );
    }
}

export default ProjectView;