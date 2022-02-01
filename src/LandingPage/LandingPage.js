import React, {Component} from "react";

class LandingPage extends Component {

    render() {
        return (<div style={{margin: '50px'}}>
            <h1>Welcome to Geeks for Geeks </h1>
            <h3>Counter App using Class Component : </h3>
            <h2> {this.state.count}</h2>
            <button onClick={this.increase}> Add</button>

        </div>)
    }
}

export default LandingPage;
