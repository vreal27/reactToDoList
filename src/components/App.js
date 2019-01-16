import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import store from '../store.js'

import All from './All'





class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
        <div>
          <Route exact path ="/" component={All}/> 
          
        </div>
      </Router>
      </Provider>
      
    )
  }
}

export default App;
