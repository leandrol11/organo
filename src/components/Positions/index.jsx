
import Champion from "../Champions"
import "./Positions.css"

const Positions = (props) => {

    const byPositionCss = { backgroundColor: props.secundaryColor }
    const byPositionTitleCss = { borderColor: props.primaryColor }

    return (
        (props.champions.length > 0) ?
            <section className="by-position" style={byPositionCss} >
                <h3 className="by-position-title" style={byPositionTitleCss}>{props.name}</h3>
                <div className="by-position-cards">
                    {props.champions.map(champion =>
                        <Champion
                            key={champion.name}
                            name={champion.name}
                            classType={champion.classType}
                            image={champion.image}
                            role={champion.position}
                            primaryColor={props.primaryColor}
                        />)}
                </div>
            </section>
            : ""
    )
}

export default Positions