import Contact from '../Contact/Contact';
import Profile from '../Profile/Profile';
import Projects from '../Projects/Projects';
import Technologies from '../Technologies/Technologies';
import './Main.css';

function Main() {
    return (
        <>
            <div id='main__container'>
                <Profile />
                <Technologies />
                <Projects />
                <Contact />
            </div>
        </>
    )
}

export default Main;
