import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'


export default class Todolist extends Component {
    constructor (){
        super();
        this.state ={
            todo:[],
            todone:[],
            dolength:0,
            finishlength:0,
        }
    }
    componentDidMount(){
        var todo = [...this.state.todo];
        var todone = [...this.state.todone]
        this.setState({
            
            dolength:todo.length,

            finishlength:todone.length,
        })
    }
    //添加正在进行的数据
    addItem = (data) =>{ 
        this.setState({
            todo:[...this.state.todo,data],
        },()=>{
            localStorage.setItem('todo',JSON.stringify(this.state.todo));
            this.componentDidMount();
        })
        
    }
    //删除正在进行的数据
    delItem = (idx,e)=>{
        let todo = [...this.state.todo];
        todo.splice(idx,1);
        this.setState({
            todo:todo,
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todo));
            this.componentDidMount();
        })
    }
    deldone =(idx,e)=>{
        let todone = [...this.state.todone];
        todone.splice(idx,1);
        this.setState({
            todone:todone,
        },()=>{
            localStorage.setItem('todo',JSON.stringify(todone));
            this.componentDidMount();
        })
    }
    //todo变成todone,传过来了一个点击的序号
    goFinish =(idx) =>{
        var doing = [...this.state.todo];
        var dotitle = doing[idx];
        var done = [...this.state.todone];
        doing.splice(idx,1);
        done.push(dotitle);
        this.setState({
            todone:done,
            todo:doing
        },()=>{
            localStorage.setItem("todo",JSON.stringify(doing));
            localStorage.setItem("done",JSON.stringify(done))
            this.componentDidMount();
        })
    }
    goToDo =(idx)=>{
        var doing = [...this.state.todo];
        var done = [...this.state.todone];
        var donetitle = done[idx];
        done.splice(idx,1);
        doing.push(donetitle);
        this.setState({
            todone:done,
            todo:doing
        },()=>{
            localStorage.setItem("todo",JSON.stringify(doing));
            localStorage.setItem("done",JSON.stringify(done))
            this.componentDidMount();
        })
    }
    render() {
        return (
            <div>
                <Todoinput add={this.addItem} doing={this.state.doing} />
                <Todoing todo={this.state.todo} todone={this.state.todone} 
                    dolength={this.state.dolength} finishlength={this.state.finishlength}
                    del={this.delItem}  doing={this.state.doing} deldone={this.deldone}
                    goFinish={this.goFinish} goToDo={this.goToDo}
                    />
            </div>
        )
    }
}
