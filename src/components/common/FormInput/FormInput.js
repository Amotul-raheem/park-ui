import "./FormInput.css";

function FormInput(props) {

    return (
        <div className="form-input">
            <label className="header-name"> {props.name} </label>
            <div className="input-field-container">
                <input className="input-field" onChange={e => props.setValue(e.target.value)} type={props.name}/>
            </div>
        </div>
    )
}

export default FormInput;
