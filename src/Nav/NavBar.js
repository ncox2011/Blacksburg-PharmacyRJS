import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
            <nav>
                <Link to='/pharmacists'>Meet Us</Link>
            </nav>
        )
    }
}