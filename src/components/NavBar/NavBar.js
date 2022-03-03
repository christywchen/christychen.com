import './NavBar.css';

function NavBar() {
    const handleAbout = () => {
        const element = document.getElementById("profile__container");
        element.scrollIntoView({ alignToTop: 'true', block: 'center', behavior: 'smooth' });
    }

    const handleTech = () => {
        const element = document.getElementById("technologies__container");
        element.scrollIntoView({ alignToTop: 'true', block: 'center', behavior: 'smooth' });
    }

    const handleProjects = () => {
        const element = document.getElementById("projects__container");
        element.scrollIntoView({ alignToTop: 'true', block: 'start', behavior: 'smooth' });
    }

    const handleContact = () => {
        const element = document.getElementById("contact__container");
        element.scrollIntoView({ alignToTop: 'true', block: 'start', behavior: 'smooth' });
    }

    return (
        <>
            <div id='navbar__container'>
                <ul>
                    <li onClick={handleAbout}>
                        01. About
                    </li>
                    <li onClick={handleTech}>
                        02. Technologies
                    </li>
                    <li onClick={handleProjects}>
                        03. Projects
                    </li>
                    <li onClick={handleContact}>
                        04. Contact
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;
