import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Language-switcher.scss"

function Langswitch() {
    const { i18n } = useTranslation()
    const [close, setOpen] = useState(false);

    return (
        <>
            <img className="icon" onClick={() => setOpen(open => !open)} src="/icons/world-icon.png"></img>

            < div className={`switch-languge ${close && "visible"}`} >
                <div>
                    <img src="/icons/united-states-flag.png" alt="" />
                    <button onClick={() => i18n.changeLanguage("en")}>English</button>
                </div>
                <div>
                    <img src="/icons/spain-flag.png" alt="" />
                    <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>
                </div>
                <div>
                    <img src="/icons/germany-flag.png" alt="" />
                    <button onClick={() => i18n.changeLanguage("de")}>German</button>
                </div>
            </div >
        </>
    )
}

export default Langswitch