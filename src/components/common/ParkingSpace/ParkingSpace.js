import React from "react";
import "./ParkingSpace.css"

function ParkingSpace (props){
    const {space_number, id, check_in_time,check_out_time,user_id,status} = props

    return(
        <div className="parking-space" >
            <div className="parking-space-container"> {space_number}</div>
            <div className="parking-space-container"> {space_number}</div>


        </div>
    )
}
export default ParkingSpace;