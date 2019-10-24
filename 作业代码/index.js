import React from 'react';
import ReactDOM from 'react-dom';
// import APP from './APP';
import './index.css';
import Todolist from './TodoList/Todolist';

ReactDOM.render(
    // <APP/>,
    <Todolist/>,
    document.getElementById('root')
)

//容器组件和UI组件（展示组件）
//智能组件和木偶组件
/**
 * 容器组件(container/pages)：逻辑，功能，类组件
 * UI组件（components）：写成函数组件，展示，返回React元素
 */