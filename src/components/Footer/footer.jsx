import { useTranslation } from "react-i18next";
import "./footer.scss"

function Footer() {
    const { t } = useTranslation()
    return (
        <footer>
            <p>{t("footer.footer_our_studio.our_stuido")}</p>
            <p>{t("footer.footer_our_studio.fashion")}</p>
        </footer>
    )
}

export default Footer