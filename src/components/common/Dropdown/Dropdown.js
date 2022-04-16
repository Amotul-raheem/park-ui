import React, {useState} from "react";
import './Dropdown.css'

const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];


const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        let selectedItem = items.find(item => item.id == id)
        setSelectedItem(selectedItem)
        toggleDropdown()
    }

    return (
        <div className='dropdown-container'>
            <div className='dropdown-header' onClick={toggleDropdown}>
                {selectedItem ? selectedItem.label : "Select Booking Status"}
                <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}/>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div key={item.id} className="dropdown-item" onClick={e => handleItemClick(e.target.id)}
                         id={item.id}>
                        <span className={`dropdown-item-dot ${item.id === selectedItem && 'selected'}`}>• </span>
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown;