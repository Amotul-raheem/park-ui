import "./FormInput.css";

function FormInput(props) {
    const {name, handleChange, id, ...inputProps } = props

    return (
        <div className="form-input">
            <label className="header-name"> {name} </label>
            <div className="input-field-container">
                <input className="input-field" {...inputProps} onChange={handleChange} />
            </div>
        </div>
    )
}

export default FormInput;
