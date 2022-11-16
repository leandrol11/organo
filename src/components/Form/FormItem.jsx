import "./css/FormItem.css"

const FormItem = (props) => {

    const onTyping = (event) => {
        props.onChanging(event.target.value)
    }

    return (
        <div className="form-area">
            <label className="form-label">{props.item}</label>
            <input onChange={onTyping} value={props.value} required={props.mandatory} type="text" className="form-input" placeholder={`Digite seu ${props.item}`} />
        </div>
    )
}

export default FormItem