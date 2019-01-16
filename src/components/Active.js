import React, { Component } from 'react'
import { connect } from 'react-redux'

class Active extends Component {
    render() {
        return (
            <div>
                <ul></ul>
                todo list

            </div>
        )
    }
}

function MapStateToProps(appState) {
    return { input: appState.all
    }
}
export default connect(MapStateToProps)(Active)