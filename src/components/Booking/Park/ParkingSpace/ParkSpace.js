import React from "react";
import "./ParkSpace.css"

const occupiedBackgroundStyle = "occupied-slot"
const selectedBackgroundStyle = "selected-slot"
const availableBackgroundStyle = "available-slot"


function ParkSpace(props) {
    const {onSelectSpot, item} = props
    const style = item?.isSelected ? selectedBackgroundStyle : item?.isOccupied ? occupiedBackgroundStyle : availableBackgroundStyle;
    const className = "park-space " + style
    return (
        <div
            key={item.id}
            className={className}
            onClick={() => onSelectSpot(item)}>
            {item?.space_name}
        </div>
    )
}

export default ParkSpace;