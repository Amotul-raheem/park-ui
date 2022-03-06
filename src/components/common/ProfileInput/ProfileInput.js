import "./ProfileInput.css";


function ProfileInput(props) {
    const {label, name, value, handleChange, type, placeholder} = props

    return (
        <div className="profile-input">
            <tr>
                <td>
                    <div className="profile-input-label">
                        <label className="profile-name">{label}</label>

                    </div>
                </td>
                <td>
                    <div className="profile-input-field-container">
                        <input
                            className="profile-input-field"
                            name={name}
                            type={type}
                            value={value}
                            onChange={handleChange}
                            placeholder={placeholder}
                        />
                    </div>
                </td>
            </tr>
        </div>
    )
}

export default ProfileInput;
