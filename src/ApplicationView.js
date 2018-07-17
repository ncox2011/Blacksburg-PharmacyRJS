import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import PharmacistList from './PharmacistList'
import Pharmacist from './Pharmacist';

export default class ApplicationView extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/pharmacists" render={props => {
                return <PharmacistList/>    
            }} />
                <Route path='/pharmacists/:pharmacistId' render={(props) => {
                    return <Pharmacist pharmacist={props.location.state.pharmacist}>
                    {props.location.state.pharmacist.name}
                    </Pharmacist>
                }} />
            </React.Fragment>
        )
    }
}