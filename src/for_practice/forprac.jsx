import { useState } from "react"
import "./practice.css"

function ForPrac() {




    const [hover, sethover] = useState(false)

    return (
        <>
            <div className={hover ? "" : "divs"}
                onMouseEnter={() => sethover(true)}
                onMouseLeave={() => sethover(false)}></div>
            <div className="div"></div>
            <div className="div"></div>
            {hover && <p className="overlay-text">Hello</p>}

        </>

    )
}

export default ForPrac