import styles from "../../components/Font/font.module.scss";
import "./Services.scss"

function Services() {
    return (
        <section className="services" id="Services">
            <div className="information_services">
                <h2>Our Signature Services</h2>
                <div className="holder_inf">
                    <div className="info">
                        <h3 className={styles.palevioleted}>Editorial & Fashion</h3>
                        <p>Makeup for photoshoots, runway </p>
                        <p>shows, and campaigns. Creative,</p>
                        <p>boundary-pushing looks designed</p>
                        <p>to make an impact.</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>Bridal Glamour</h3>
                        <p>Luxurious, long-lasting bridal </p>
                        <p>makeup tailored to your</p>
                        <p>style, ensuring you look flawless on</p>
                        <p>your special day.</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>Special Event Makeup</h3>
                        <p>Get ready for galas, red carpets, or </p>
                        <p>any major event with a</p>
                        <p>sophisticated and glamorous</p>
                        <p>makeup application.</p>
                    </div>
                </div>

                <div className="holder_inf">
                    <div className="info">
                        <h3 className={styles.palevioleted}>Avant-Garde Artistry</h3>
                        <p>For those seeking truly unique and </p>
                        <p>artistic makeup transformations.</p>
                        <p>Perfect for creative projects or</p>
                        <p>themed events.</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>Makeup Lessons</h3>
                        <p>Learn professional techniques and </p>
                        <p>tips personalized for you,</p>
                        <p>everyday enhancement to full glam</p>
                        <p>looks.</p>
                    </div>

                    <div className="info">
                        <h3 className={styles.palevioleted}>Commercial & Film</h3>
                        <p>Professional makeup services </p>
                        <p>tailored for commercial shoots, film</p>
                        <p>productions, and television</p>
                        <p>appearances.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
