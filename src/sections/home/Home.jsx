import "./Home.scss"

import { useTranslation } from "react-i18next"

function Home() {
    const { t } = useTranslation()
    return (
        <div id="Home" className="bookses">
            <img className="mainpic" src="/images/makeup-artist-working.jpg" alt="" />

            <div className="text">
                <h1> Elevate Your <span>Look</span></h1>

                <p>High-Fashion Makeup Artistry for the Bold and Glamorous</p>

                <div className="main_button">
                    <a href="#">Book Your Session</a>
                </div>
            </div>
        </div>
    )
}

export default Home