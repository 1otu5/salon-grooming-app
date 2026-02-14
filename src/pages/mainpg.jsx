import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import styles from "../components/Font/font.module.scss";
import "./mainpg.scss"

function Main() {
    return (
        <>
            <Header></Header>

            <main>
                <div id="Home" className="bookses">
                    <img className="mainpic" src="/images/makeup-artist-working.jpg" alt="" />

                    <div className="text">
                        <h1 data-lang-key>
                            Elevate Your <span>Look</span>
                        </h1>
                        <p>High-Fashion Makeup Artistry for the Bold and Glamorous</p>

                        <div className="button">
                            <a href="#">book your session</a>
                        </div>
                    </div>
                </div>

                <div id="about_us" className="maintxt">
                    <img src="/images/makeup-artist-working.jpg" alt="" />

                    <section className="about_us">
                        <h2>About GlamNeon Studio</h2>
                        <p>Welcome to GlamNeon, where makeup transcends convention.</p>
                        <p>
                            We specialize in creating stunning, high-fashion looks that
                            empower and inspire.
                        </p>
                        <p>
                            Our lead artist blends cutting-edge techniques with a keen eye for
                            editorial style.
                        </p>

                        <p> Whether it's for a photoshoot, a runway, a special event, or your wedding</p>

                        <p>day, every face. we bring a touch of neon-infused glamour and unparalleled artistry to</p>
                        <p>every face. We believe makeup is a form of self-expression, and we're here </p>
                        <p>to help you make your boldest statement.</p>

                        <div className="button">
                            <a href="#">view our work</a>
                        </div>
                    </section>
                </div>

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

                <div id="Portfolio" className="content">
                    <section className="showcase">
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

                    <section id="Contact" className="contact">
                        <h2 className={styles.h2}>Get In Touch</h2>
                        <p>Ready for your transformation or have questions? Reach out!</p>

                        <form className="for">
                            <label>Name</label>
                            <input type="text" />

                            <label>Email</label>
                            <input type="text" />

                            <label>Service Interested In (Optional)</label>
                            <input type="text" />

                            <label>Message</label>
                            <textarea />

                            <p>(Form submission is disabled in this demo)</p>
                        </form>

                        <p>Email: contact@glamneon.example.com</p>
                        <p>Phone: +1 (555) 123-4567 (By Appointment Only)</p>
                        <p>Studio Location: 123 Glamour Ave, Fashion City, FC 90210</p>
                    </section>
                </div >
            </main >

            <Footer></Footer>
        </>
    );
}

export default Main;