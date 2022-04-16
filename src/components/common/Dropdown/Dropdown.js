import React from "react";
import './Dropdown.css'

const Dropdown = (props) => {
    const {bookingStatuses, handleStatusClick, toggleDropDown, selectedBookingStatus, isDropDownOpen} = props

    return (
        <div className='dropdown-container'>
            <div className='dropdown-header' onClick={toggleDropDown}>
                {selectedBookingStatus ? selectedBookingStatus.label : "Select Booking Status"}
                <i className={`fa fa-chevron-right icon ${isDropDownOpen && "open"}`}/>
            </div>
            <div className={`dropdown-body ${isDropDownOpen && 'open'}`}>
                {bookingStatuses.map(item => (
                    <div key={item.id} className="dropdown-item" onClick={e => handleStatusClick(e.target.id)}
                         id={item.id}>
                        <span
                            className={`dropdown-item-dot ${item.id === selectedBookingStatus && 'selected'}`}>• </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;