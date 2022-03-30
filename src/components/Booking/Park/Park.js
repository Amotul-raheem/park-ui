import ParkSpace from "../../common/ParkingSpace/ParkSpace";
import './Park.css'
import React from "react";


export default function Park(props) {

    const {first_arr, second_arr, third_arr, onSelectSpot} = props

    return (
        <div className='booking-container'>
            <div className="book-slot">
                {first_arr?.map((item) => (
                    <ParkSpace
                        item={item}
                        onSelectSpot={onSelectSpot}
                    />))}
            </div>
            <div className="book-slot">
                {second_arr?.map((item) => (
                    <ParkSpace
                        item={item}
                        onSelectSpot={onSelectSpot}
                    />))}
            </div>
            <div className="book-slot">
                {third_arr?.map((item) => (
                    <ParkSpace
                        item={item}
                        onSelectSpot={onSelectSpot}
                    />))}
            </div>
        </div>
    )
}