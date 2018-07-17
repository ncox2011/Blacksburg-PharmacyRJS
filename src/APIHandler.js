import React from 'react'

const APIHandler = Object.create({}, {
    getPharmacists: {
        value: () => {
            return fetch("http://localhost:5002/pharmacists")
            .then(e => e.json())
        }
    },
    getTechnicians: {
        value: () => {
            return fetch("http://localhost:5002/technicians")
            .then(e => e.json())
        }
    }
})

export default APIHandler;