import "./FormInput.css";

function FormInput(props) {
    const {name, handleChange, id, value, type} = props

    return (
        <div className="form-input">
            <label className="header-name"> {name} </label>
            <div className="input-field-container">
                <input className="input-field" name={name} type={type} onChange={handleChange}/>
            </div>
        </div>
    )
}

export default FormInput;
