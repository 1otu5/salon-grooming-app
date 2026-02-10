import { useState } from "react";

const firstrow = ["/images/gallery-1.jpg", "/images/gallery-2.jpg", "/images/gallery-3.jpg", "/images/gallery-4.jpg"]
const secondrow = ["/images/gallery-5.jpg", "/images/gallery-6.jpg", "/images/gallery-7.jpg", "/images/gallery-8.jpg"]



function Hover() {
    const [hovered, sethover] = useState(null)
    return (
        <>
            {firstrow.map((element, index) =>
                <div key={index} className="box">
                    <img className="images" src={element} onMouseEnter={() => sethover(index)} onMouseLeave={() => sethover(null)} />
                    {hovered === index && <p className="textappear">View more</p>}
                </div>)}


            {secondrow.map((element, index) =>
                <div key={index + firstrow.length} className="box" >
                    <img className="images" src={element} onMouseEnter={() => sethover(index + firstrow.length)} onMouseLeave={() => sethover(null)} />
                    {hovered === index + firstrow.length && <p className="textappear">View more</p>}
                </div >)}
        </>
    )
}
export default Hover;