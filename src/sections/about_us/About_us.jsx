import "./About_us.scss"

function About_us() {

    return (
        <div id="about_us" className="maintxt">
            <img src="/images/makeup-artist-working.jpg" alt="" />

            <section className="about_us">
                <h2>About GlamNeon Studio</h2>

                <p>Welcome to GlamNeon, where makeup transcends convention.</p>
                <p>We specialize in creating stunning, high-fashion looks that empower and inspire.</p>
                <p>Our lead artist blends cutting-edge techniques with a keen eye for editorial style.</p>

                <p>Whether it's for a photoshoot, a runway, a special event, or your wedding day.</p>
                <p>We bring a touch of neon-infused glamour and unparalleled artistry to every face.</p>
                <p>We believe makeup is a form of self-expression, and we're here to help you make your boldest statement.</p>

                <div className="button">
                    <a href="#">View Our Work</a>
                </div>
            </section>
        </div>
    );
}

export default About_us;