import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e){
        if(e.keyCode === 13){
            this.props.add(e.target.value);
        }
    }
    render() {
        return (
            <div style={{width:"500px",height:"50px",margin:"0 auto"}}>
               ToDoList<input text="type" onKeyDown={this.handleInput} /> 
            </div>
        )
    }
}
