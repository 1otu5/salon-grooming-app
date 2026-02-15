import "./Showcase.scss"

function Showcase() {
    return (
        <section id="showcase" className="showcase">
            <h2>Portfolio Showcase</h2>

            <div>
                <div className="rows">
                    <div>
                        <img className="images" src="/images/gallery-1.jpg" alt="" />
                    </div>

                    <div>
                        <img className="images" src="/images/gallery-2.jpg" alt="" />
                    </div>

                    <div>
                        <img className="images" src="/images/gallery-3.jpg" alt="" />
                    </div>

                    <div>
                        <img className="images" src="/images/gallery-4.jpg" alt="" />
                    </div>

                </div>

                <div className="rows">

                    <div>
                        <img className="images" src="/images/gallery-5.jpg" alt="" />
                    </div>

                    <div>
                        <img className="images" src="/images/gallery-6.jpg" alt="" />
                    </div>

                    <div>
                        <img className="images" src="/images/gallery-7.jpg" alt="" />
                    </div>

                    <div>
                        <img className="images" src="/images/gallery-8.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Showcase