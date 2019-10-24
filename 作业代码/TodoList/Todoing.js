import React, { Component } from 'react'

export default class Todoing extends Component {
    delItem(idx){
        this.props.del(idx);
    }
    deldoneItem(idx){
        this.props.deldone(idx);
    }
    check(idx,e){
        var check = "" +e.target.checked;
        if(check == "true"){
            this.props.goFinish(idx);

        }
    }
    check2(idx,e){
        this.props.goToDo(idx);
    }
    render() {
        var {todo} = this.props;
        var {todone} = this.props;
        var {dolength} = this.props;
        var {finishlength} = this.props;

        return ( 
            <div style={{width:"500px",height:"300px",margin:"0 auto"}}>
                <h2>正在进行：</h2>
                <div>待办：{dolength}</div>
                <ul>
                    {
                        todo.map((item,idx) =>  
                            <ol key={idx}>
                                <input type="checkbox" onChange={this.check.bind(this,idx)} checked={false}/> {item}
                                <button onClick={this.delItem.bind(this,idx)}>删除</button>
                            </ol>
                        )    
                    }
                </ul>
                <h2>已经完成：</h2>
                <div>已完成：{finishlength}</div>
                <ul>
                    {
                        todone.map((item,idx) =>  
                            <ol key={idx}>
                                <input type="checkbox" onClick={this.check2.bind(this,idx)} checked={true} readOnly/> {item}
                                <button onClick={this.deldoneItem.bind(this,idx)}>删除</button>
                            </ol>
                        )    
                    }
                </ul>
            </div>   
        ) 
    }
}
