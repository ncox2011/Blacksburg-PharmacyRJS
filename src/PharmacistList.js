import React, { Component } from 'react'
import APIHandler from './APIHandler'
import Pharmacist from './Pharmacist';

export default class PharmacistList extends Component {

    state = {
        pharmacists: []
    }

    componentDidMount() {
        APIHandler.getPharmacists()
        .then(pharmacists => {
            this.setState({pharmacists: pharmacists})
        })
    }
    
    render() {
        return (
            <React.Fragment>
                    {
                        this.state.pharmacists.map(pharmacist => 
                            < Pharmacist key={pharmacist.id} pharmacist={pharmacist}>
                            {pharmacist.name}
                            </ Pharmacist>
                            )
                    }
            </React.Fragment>
        )
    }
}