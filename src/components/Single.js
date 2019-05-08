import React from 'react'

function Single(props) {
    return (
        <React.Fragment key={props.id}>
            <main>
                <div className="container single">
                    <div className="row">
                        <div className="col-lg-12 single">
                            <div className="row wrapper-product">
                                <div className="col-lg-8">
                                    <img src={`/img/${props.image}`} className="img-responsive" alt={props.model + '-' + props.color} />
                                </div>
                                <div className="col-lg-4">
                                    <h3>{props.year + ' ' + props.model}</h3>
                                    <ul>
                                        <li>Doors: {props.doors}</li>
                                        <li>Seats: {props.seats}</li>
                                        <li>Bags: {props.cargo}</li>
                                        <li>Horse Power: {props.power}</li>
                                        <li>MPH: {props.miles}</li>
                                        
                                    </ul>
                                    {props.description}
                                    <h4><strong>${props.price}</strong> per day</h4>
                                    <a href={`/check-out/${props.id}`} title="Continue" className="btn">Rent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Single