import './Projects.css';
import carpediem from '../../assets/carpediem.png';
import tomoolist from '../../assets/tomoolist.png';
import thebooknook from '../../assets/thebooknook.jpg';
import onetoten from '../../assets/onetoten.jpg';

function Projects() {
    return (
        <>
            <section id='projects__container'>
                <div className='projects__header'>Projects</div>
                <div className='projects__list'>
                    <div className='projects__item'>
                        <div className='projects__subtitle'>The Book Nook</div>
                        <div className='projects__description'>A book club organizer that helps clubs stay organized. It offers a space for members to socialize and stay up to date so that they can read more, discuss more, and stress less. Club members can stay in touch with various live discussion channels.</div>
                        <div className='projects__technologies'>
                            Flask // SQLAlchemy // React // Redux // PostgreSQL // SocketIO
                        </div>
                        <img className='projects__image' src={thebooknook} />
                    </div>
                    <div className='projects__item'>
                        <img className='projects__image' src={carpediem} />
                        <div className='projects__subtitle'>Carpe Diem</div>
                        <div className='projects__description'>An Eventbrite-inspired EDM events sharing and finding app that seeks to connect artists with their communities. Events can be published or saved as drafts, and attendees can bookmark the ones they are interested in.</div>
                        <div className='projects__technologies'>
                            Express // Node.js // React // Redux // Sequelize // PostgreSQL
                        </div>
                    </div>
                    <div className='projects__item'>
                        <div className='projects__subtitle'>One-to-Ten</div>
                        <div className='projects__description'>A no-frills social experiment that asks users to be a little more honest, and a little more introspective. This personality surveying application essentially strips down dating apps to their most raw, basic purpose: matching users with whom they have the most similarities with.</div>
                        <div className='projects__technologies'>
                            Flask // SQLAlchemy // React // Redux // PostgreSQL
                        </div>
                        <img className='projects__image' src={onetoten} />
                    </div>
                    <div className='projects__item'>
                        <img className='projects__image' src={tomoolist} />
                        <div className='projects__subtitle'>To-Moo List</div>
                        <div className='projects__description'>An errand tracking app that allows users to create tasks, organize them into tasklists, then add additional information like prioritization, due dates, and details. This single-page application was built on vanilla JavaScript.</div>
                        <div className='projects__technologies'>
                            Express // Node.js // Pug // Sequelize // PostgreSQL
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;
