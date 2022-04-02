import React from 'react'
import "./ParkingDetail.css"

function ParkingDetail(props) {
    const {label, checkInTime, checkOutTime, price} = props
    return (
        <div className="parking-detail">
            <label className="parking-detail-label">{label}</label>
            <div className="parking-detail-container">
                <tr>
                    <td>
                        <div className="parking-detail-time">
                            <h5>Check In Time</h5>
                            <h4>{checkInTime}</h4>
                        </div>
                    </td>
                    <td>
                        <div className="parking-detail-time">
                            <h5>Check Out Time</h5>
                            <h4>{checkOutTime}</h4>
                        </div>
                    </td>
                    <td><h4 className="parking-detail-time">{price}</h4></td>
                </tr>

            </div>

        </div>
    )
}

export default ParkingDetail