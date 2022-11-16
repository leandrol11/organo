import "./css/FormList.css"

const FormList = (props) => {

    const onChoice = (event) => {
        props.onChoicing(event.target.value)
    }

    return (
        <div className="form-area">
            <label className="form-label" >{props.item}</label>
            <select onChange={onChoice} value={props.value} required={props.mandatory} className="form-select" >
                <option value=""></option>
                {props.roles.map(
                    role => <option key={role}> {role} </option>
                )}
            </select>
        </div>
    )
}

export default FormList