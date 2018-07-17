import React, { Component } from 'react'
import NavBar from './Nav/NavBar'
import ApplicationView from './ApplicationView'
import Login from './Login'

import "bootstrap/dist/css/bootstrap.min.css"

export default class Pharmacy extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationView />
                <Login />
            </React.Fragment>
        )
    }
}