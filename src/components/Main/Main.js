import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Technologies from '../Technologies/Technologies';

import './Main.css';

function Main() {
    return (
        <>
            <div id='main__container'>
                <div id='main__content'>
                    <Profile />
                    <Technologies />
                    <Projects />
                    <Contact />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Main;
