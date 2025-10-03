import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log("constructor")
    }

    componentDidMount() {
        this.setState({count : 1});
        console.log("componentDidMount")
    }

    componentDidUpdate() { 
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }



   

  render() {
    return(
      <div className="flex flex-col justify-center items-center">
        <h1>{this.state.count}</h1>
        <button className="bg-black text-white p-5 w-50 rounded-full" onClick={() => this.setState({count: this.state.count + 1})}>+</button>
      </div>
  )}
}
export default Counter;