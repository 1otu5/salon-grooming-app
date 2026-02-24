import { useTranslation } from "react-i18next";
import styles from "../../components/Font/font.module.scss";
import "./Contact.scss"


function Contact() {
    const { t } = useTranslation()
    return (
        <section id="Contact" className="contact">
            <h2 className={styles.h2}>{t("contact.title")}</h2>
            <p>{t("contact.subtitle")}</p>

            <form className="for">
                <label>{t("contact.name")}</label>
                <input type="text" />

                <label>{t("contact.email")}</label>
                <input type="text" />

                <label>{t("contact.service")}</label>
                <input type="text" />

                <label>{t("contact.message")}</label>
                <textarea />

                <p>{t("contact.notice")}</p>
            </form>

            <p>{t("contact.email_info")}</p>
            <p>{t("contact.phone_info")}</p>
            <p>{t("contact.location_info")}</p>
        </section>
    )
}

export default Contact