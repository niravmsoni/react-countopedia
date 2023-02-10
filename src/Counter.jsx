import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.state = {
            count: 0
        };
    }
    
    handleAttack(){
        this.setState((previousState) => {
            return {
                count: previousState.count + 100,
            };
        });
        this.setState((previousState) => {
            return {
                count: previousState.count + 10,
            };
        });
        
    }

    handleDefence(){
        this.setState({count: this.state.count - 1});
    }

    render(){
        return(
        <div className="row text-white">
            <h1>Counter: {this.state.count} </h1>
            <button onClick={this.handleAttack} style={{width: "200px"}}>+1</button>
            <button onClick={this.handleDefence} style={{width: "200px"}}>-1</button>
        </div>);
    }
}