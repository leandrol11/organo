import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-container" >
            <div className="footer-social-medias" >
                <a href="https://leandrol11.github.io/" >
                    <img className="footer-img" src="/img/fb.png" alt="Logo Facebook" />
                </a>
                <a href="https://leandrol11.github.io/" >
                    <img className="footer-img" src="/img/tw.png" alt="Logo Facebook" />
                </a>
                <a href="https://leandrol11.github.io/" >
                    <img className="footer-img" src="/img/ig.png" alt="Logo Facebook" />
                </a>
            </div>
            <div className="footer-logo">
                <a href="https://leandrol11.github.io/">
                    <img className="footer-logo-img" src="/img/logo.png" alt="Logo Organo" />
                </a>
            </div>
            <div className="footer-made-by">
                <p className="made-by">By Leandro Maciel</p>
            </div>
        </footer>
    )
}

export default Footer