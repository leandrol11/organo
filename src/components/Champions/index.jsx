import "./Champions.css"

const Champion = ({ name, classType, image, primaryColor }) => {
    return (
        <div className="champion-card">
            <div className="upper-card" style={{ backgroundColor: primaryColor }} >
                <img className="image-card" src={image} alt={`Foto do(a) ${name}`} />
            </div>
            <div className="down-card">
                <h4 className="champion-name-card">{name}</h4>
                <h5 className="champion-class-card" >{classType}</h5>
            </div>
        </div>
    )
}

export default Champion