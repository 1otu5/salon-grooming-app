import { useTranslation } from "react-i18next"
import styles from "../../components/Font/font.module.scss";
import "./Services.scss"

function Services() {
    const { t } = useTranslation()

    return (
        <section className="services" id="Services">
            <div className="information_services">
                <h2>{t("services.title")}</h2>

                <div className="holder_inf">
                    <div className="info">
                        <h3 className={styles.palevioleted}>{t("services.editorial.title")}</h3>
                        <p>{t("services.editorial.p1")}</p>
                        <p>{t("services.editorial.p2")}</p>
                        <p>{t("services.editorial.p3")}</p>
                        <p>{t("services.editorial.p4")}</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>{t("services.bridal.title")}</h3>
                        <p>{t("services.bridal.p1")}</p>
                        <p>{t("services.bridal.p2")}</p>
                        <p>{t("services.bridal.p3")}</p>
                        <p>{t("services.bridal.p4")}</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>{t("services.event.title")}</h3>
                        <p>{t("services.event.p1")}</p>
                        <p>{t("services.event.p2")}</p>
                        <p>{t("services.event.p3")}</p>
                        <p>{t("services.event.p4")}</p>
                    </div>
                </div>

                <div className="holder_inf">
                    <div className="info">
                        <h3 className={styles.palevioleted}>{t("services.avant.title")}</h3>
                        <p>{t("services.avant.p1")}</p>
                        <p>{t("services.avant.p2")}</p>
                        <p>{t("services.avant.p3")}</p>
                        <p>{t("services.avant.p4")}</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>{t("services.lessons.title")}</h3>
                        <p>{t("services.lessons.p1")}</p>
                        <p>{t("services.lessons.p2")}</p>
                        <p>{t("services.lessons.p3")}</p>
                        <p>{t("services.lessons.p4")}</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>{t("services.commercial.title")}</h3>
                        <p>{t("services.commercial.p1")}</p>
                        <p>{t("services.commercial.p2")}</p>
                        <p>{t("services.commercial.p3")}</p>
                        <p>{t("services.commercial.p4")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services
