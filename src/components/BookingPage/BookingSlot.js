import React from "react";


function BookingSlot(props) {
    const {onSelectSpot, item} = props

    return (
        <div
            key={item.id}
            className={"parking-space"}
            style={{background: item?.isSelected ? '#01194A' : item?.isOccupied ? '#f00' : '#c4c4c4'}}
            onClick={() => onSelectSpot(item)}>
            {item?.space_number}
        </div>
    )
}

export default BookingSlot;