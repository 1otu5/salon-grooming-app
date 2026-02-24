import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./init";

function Translate() {
    const { i18n } = useTranslation()
    const [lang, change] = useState(true);
    return (
        <>

            <div className={lang ? "" : "open"} onClick={() => change(prev => !prev)}>
                <button onClick={() => i18n.changeLanguage("en")}>En</button>
                <button onClick={() => i18n.changeLanguage("es")}>Sp</button>
                <button onClick={() => i18n.changeLanguage("de")}>Ger</button>
            </div>
        </>

    )
}

export default Translate