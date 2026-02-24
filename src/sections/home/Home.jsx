import { useTranslation } from "react-i18next"
import "./Home.scss"

function Home() {
    const { t } = useTranslation()
    return (
        <div id="Home" className="bookses">
            <img className="mainpic" src="/images/makeup-artist-working.jpg" alt="" />

            <div className="text">
                <h1>{t("home.heading")} <span>{t("home.highlight")}</span></h1>

                <p>{t("home.subheading")}</p>

                <div className="main_button">
                    <a href="#">{t("home.book_button")}</a>
                </div>
            </div>
        </div>
    )
}

export default Home