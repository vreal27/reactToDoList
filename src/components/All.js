import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postList, changeFilter } from '../actions/todoactions';
import '../styles/All.css'

import ToDoList from './ToDoList'

class All extends Component {
   state = {
       text: ''
   }
    

    changeText = (e) => {
        this.setState({[e.target.name]: e.target.value})

    }

    handleSubmit = (e) => {
        e.preventDefault()
        postList(this.state.text)
        this.setState({
            text: ''
        })
    }

    changeAll= (e) => {
        e.preventDefault()
        changeFilter("all")
    }   
    
    changeComplete = (e) => {
        e.preventDefault()
        changeFilter("complete")
    }

    changeIncomplete = (e) => {
        e.preventDefault()
        changeFilter("incomplete")
    }

    render() {
        

        return (
            <div className ="listbox">
                <form autoComplete="off"onSubmit={this.handleSubmit}>

                    <input className= "entry" type="text" name="text" value ={this.state.text} onChange= {this.changeText}/>


            
                </form>
            <ToDoList/>
            <div className="filters">test
                <button onClick ={this.changeAll}>All</button>
                <button onClick={this.changeComplete}>C</button>
                <button onClick={this.changeIncomplete}>I</button>
            </div>
            </div>
        )
    }
}

function filterProps(appState){
if(appState.filter === "all"){
    return appState.all
} else if (appState.filter === "complete"){
    return appState.all.filter(e =>
        !e.status
    )
} else if (appState.filter === "incomplete"){
    return appState.all.filter(e =>
        e.status
    )
}

}

function mapStateToProps(appState) {
    console.log('appstate', appState)
    return {
        all: filterProps(appState)
    }
}



export default connect(mapStateToProps)(All)