import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



export default props => {
    let pharmacist = {}

// Check if the data is in `props.pharmacist`
if (props.hasOwnProperty("pharmacist")) {
    pharmacist = props.pharmacist

// If not, data will be in `props.location.state.pharmacist`
} else {
    pharmacist = props.location.state.pharmacist
}
   return (
        <div className="card" style={{width: `18rem`}}>
            <div className="card-body">
                <img className="employeeImg">{props.pharmacist.image}</img>
                <h5 className="card-title">
                    {props.pharmacist.name}
                </h5>
                <p className="card-text">{props.pharmacist.position}</p>
                {
                    <Link className="card-link"
                    to={{
                        pathname: `/pharmacists/${pharmacist.id}`,
                        state: { pharmacist: pharmacist }
                    }}>
                    Details
                </Link>
                }
            </div>
        </div>
    )
}