import styles from "../../components/Font/font.module.scss";
import "./Contact.scss"

function Contact() {
    return (
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
    )
}

export default Contact