import "./header.scss"
import styles from "../Font/font.module.scss";
import Translate from "../../translations/translation";
import Langswitch from "../LanguageSwitcher/language-switcher";
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();



    return (
        <header>
            <section>
                <a href="#">
                    Glam <span className={styles.palevioleted}>Neon</span>
                </a>

                <nav className="menu">
                    <a href="#Home">{t("header.menu.home")}</a>
                    <a href="#about_us">{t("header.menu.about")}</a>
                    <a href="#Services">{t("header.menu.services")}</a>
                    <a href="#showcase">{t("header.menu.portfolio")}</a>
                    <a href="#Contact">{t("header.menu.contact")}</a>
                    <Langswitch></Langswitch>
                </nav>


            </section>
        </header >
    );
}

export default Header;