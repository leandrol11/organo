import "./css/FormContainer.css"
import FormItem from "./FormItem"
import FormList from "./FormList"
import Button from "./Button"
import { useState } from "react"

const FormContainer = (props) => {

    const [name, setName] = useState("")
    const [classType, setClassType] = useState("")
    const [image, setImage] = useState("")
    const [position, setPosition] = useState("")

    const onSave = (event) => {
        event.preventDefault()
        props.onSaveComp({
            name,
            classType,
            image,
            position
        })
        setName("")
        setClassType("")
        setImage("")
        setPosition("")
    }

    return (
        <section className="form-container" >
            <form className="form" onSubmit={onSave} >
                <h2 className="form-titulo" >Preencha os dados para criar os cards</h2>
                <FormItem
                    value={name}
                    onChanging={value => setName(value)}
                    item="Campeão"
                    mandatory={true}
                />
                <FormItem
                    value={classType}
                    onChanging={value => setClassType(value)}
                    item="Classe"
                    mandatory={true}
                />
                <FormItem
                    value={image}
                    onChanging={value => setImage(value)}
                    item="Imagem"
                />
                <FormList
                    value={position}
                    onChoicing={value => setPosition(value)}
                    item="Posição"
                    mandatory={true}
                    roles={props.roleOption}
                />
                <Button> Criar card </Button>
            </form>
        </section>
    )
}

export default FormContainer