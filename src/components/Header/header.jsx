import "./header.scss"
import styles from "../Font/font.module.scss";
import Translate from "../../translations/translation";

function Header() {
    return (
        <header>
            <section>
                <a href="#">
                    Glam <span className={styles.palevioleted}>Neon</span>
                </a>

                <nav className="menu">
                    <a href="#Home">Home</a>
                    <a href="#about_us">About</a>
                    <a href="#Services">Services</a>
                    <a href="#Portfolio">Portfolio</a>
                    <a href="#Contact">Contact</a>
                </nav>
            </section>
        </header>
    )
}

export default Header