import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/ToDoList.css'

import ToDoItem from './ToDoItem'


class ToDoList extends Component {
    render() {
        return (
            <div>
                <ul className="listitems">
                {this.props.items.map(s => (
                    <ToDoItem key={s.id}  {...s}/>
                ))}
                </ul>
                
            </div>
        )
    }
}


function MapStateToProps(appState){
    return {
        items: appState.all
    }
    
}

export default connect(MapStateToProps)(ToDoList)