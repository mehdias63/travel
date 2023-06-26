import React from "react"
import Navbar from "./components/navbar"
import Card from "./components/Card"
import data from "./data.js"


export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                img={item.Img}
                location={item.location}
                description={item.description}
                title={item.title}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
            />
        )
    })
    return (
        <div >
            <Navbar />
            {cards}
            
        </div>
    )
}