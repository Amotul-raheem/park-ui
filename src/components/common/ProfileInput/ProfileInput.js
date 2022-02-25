import "./ProfileInput.css";


function ProfileInput(props) {
    const {label, description, name, type, placeholder} = props

    return (
        <div className="profile-input">
            <tr>
                <td>
                    <div className="profile-input-label"><label className="profile-name">{label}</label>
                        <h5 className="profile-description">{description}</h5></div>
                </td>
                <td>
                    <div className="profile-input-field-container">
                        <input
                            className="profile-input-field"
                            name={name}
                            type={type}
                            placeholder={placeholder}
                        />
                    </div>
                </td>
            </tr>

        </div>
    )
}

export default ProfileInput;
