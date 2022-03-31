import "./CheckInCheckoutHistory.css"

export default function CheckInCheckoutHistory(props) {
    const {checkInTime, checkOutTime} = props

    return (
        <div className="checkin-checkout-history">
            <div>
                <h5>Check In Time</h5>
                <h4>{checkInTime}</h4>
            </div>
            <div/>
            <div>
                <h5>Check Out Time</h5>
                <h4>{checkOutTime}</h4>
            </div>

        </div>
    )

}