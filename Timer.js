import React from "react";
import { render } from "react-dom";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    increaseCount() {
        this.setState({ count: this.state.count++})
    }

    render() {
        return (
            <div style={styles}>
                <div>
                    <button onClick={() => this.increaseCount()}>Increase</button>
                </div>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}


// const App = props => (
//     <div style={styles}>
//         <h2>{props.count}</h2>
//     </div>
// );

// let count = 0;

render(<App count={this.state.count++} />, document.getElementById("root"));