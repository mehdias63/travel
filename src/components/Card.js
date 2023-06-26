import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} className="cardImage" alt="test" />
            <div className="cardStats">
            <h2>📍 {props.location}    <a className="map">{props.googleMapsUrl}</a> </h2>
                <h1>{props.title}</h1>
                <p><span className="btn">{props.startDate} _ {props.endDate}</span></p>
                <p>{props.description}</p>
            
            </div>
            
        </div>
    )
}