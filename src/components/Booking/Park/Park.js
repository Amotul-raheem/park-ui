import ParkSpace from "./ParkingSpace/ParkSpace";
import './Park.css'
import React from "react";


export default function Park(props) {

    const {first_arr, second_arr, third_arr, onSelectSpot} = props

    return (
        <div className='park-container'>
            <div className="park-slot">
                {first_arr.map((item) => (
                    <ParkSpace
                        item={item}
                        onSelectSpot={onSelectSpot}
                    />))}
            </div>
            <div className="park-slot">
                {second_arr.map((item) => (
                    <ParkSpace
                        item={item}
                        onSelectSpot={onSelectSpot}
                    />))}
            </div>
            <div className="park-slot">
                {third_arr.map((item) => (
                    <ParkSpace
                        item={item}
                        onSelectSpot={onSelectSpot}
                    />))}
            </div>
        </div>
    )
}