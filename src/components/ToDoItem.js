import React, { Component } from 'react'
import { deleteItem, toggleStatus } from '../actions/todoactions'
import '../styles/ToDoList.css'


class ToDoItem extends Component {
    deleteItem = (e) => {
        deleteItem(this.props.id)
    }

    changeStatus = (e) => {
        toggleStatus(this.props.id)
    }
    render() {
        return (
            <li className= {this.props.status ? '' : 'complete'} onClick={this.changeStatus}>
                {this.props.text}
                <button className="delete" onClick ={this.deleteItem}>X</button>
            </li>
        )
    }
}



export default ToDoItem