import Header from "../components/Header/header";
import Home from "../sections/home/Home"
import About_us from "../sections/about_us/About_us"
import Services from "../sections/services/Services"
import Showcase from "../sections/showcase/Showcase";
import Contact from "../sections/contact/Contact"
import Footer from "../components/Footer/footer";

function Main() {

    return (

        <>

            <Header></Header>

            <main>

                <Home></Home>
                <About_us></About_us>
                <Services></Services>
                <Showcase></Showcase>
                <Contact></Contact>
            </main >

            <Footer></Footer>

        </>
    );
}

export default Main;