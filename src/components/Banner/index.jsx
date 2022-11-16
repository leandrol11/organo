import "./Banner.css"

const Banner = () => {
    return (
        <header className="container">
            <div className="logo-container">
                <img className="logo-img" src="/img/logo.png" alt="Logo Organo" />
            </div>

            <div className="banner-container">
                <img className="banner" src="/img/lol-logo.png" alt="Banner principal da página Organo" />
            </div>
        </header>
    )
}

export default Banner