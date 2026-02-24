import { useTranslation } from "react-i18next"
import "./About_us.scss"


function About_us() {
    const { t } = useTranslation();

    return (
        <div id="about_us" className="maintxt">
            <img src="/images/makeup-artist-working.jpg" alt="Makeup artist working" />

            <section className="about_us">
                <h2>{t("about.title")}</h2>

                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
                <p>{t("about.p4")}</p>
                <p>{t("about.p5")}</p>
                <p>{t("about.p6")}</p>

                <div className="button">
                    <a href="#">{t("about.view_work")}</a>
                </div>
            </section>
        </div>
    );
}


export default About_us;