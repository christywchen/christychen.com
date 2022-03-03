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
                        <div className='projects__item--img--top'>
                            <a href='https://book-nook-app.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='The Book Nook' src={thebooknook} />
                            </a>
                        </div>
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>
                                <a href='https://book-nook-app.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__title">
                                    The Book Nook
                                </a>
                            </div>
                            <div className='projects__description'>A book club manager that helps communities get organized and stay in touch via live chat. It's a space for members to socialize and stay up to date so that they can read more, discuss more, and stress less.</div>
                            <div className='projects__technologies'>
                                <ul>
                                    <li>Flask</li>
                                    <li>SQLAlchemy</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>PostgreSQL</li>
                                    <li>SocketIO</li>
                                    <li>Deployed via Docker</li>
                                </ul>
                            </div>
                            <div className='projects__links'>
                                <a href='https://github.com/christywchen/the-book-nook/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Github
                                </a>
                                <a href='https://book-nook-app.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                        <div className='projects__item--img'>
                            <a href='https://book-nook-app.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='The Book Nook' src={thebooknook} />
                            </a>
                        </div>
                    </div>
                    <div className='projects__dividers--left'>
                        <hr className='projects__divider projects__divider--1' />
                        <hr className='projects__divider projects__divider--2' />
                    </div>
                    <div className='projects__item'>
                        <div className='projects__item--img--top'>
                            <a href='https://carpe-diem-app.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='Carpe Diem' src={carpediem} />
                            </a>
                        </div>
                        <div className='projects__item--img'>
                            <a href='https://carpe-diem-app.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='Carpe Diem' src={carpediem} />
                            </a>
                        </div>
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>
                                <a href='https://carpe-diem-app.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__title">
                                    Carpe Diem
                                </a>
                            </div>
                            <div className='projects__description'>An Eventbrite-inspired EDM events sharing and finding app that seeks to connect artists with their communities. Events can be published or saved as drafts, and attendees can bookmark the ones they are interested in.</div>
                            <div className='projects__technologies'>
                                <ul>
                                    <li>Express</li>
                                    <li>Node.js</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Sequelize</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div className='projects__links'>
                                <a href='https://github.com/christywchen/carpe-diem/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Github
                                </a>
                                <a href='https://carpe-diem-app.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='projects__dividers--right'>
                        <hr className='projects__divider projects__divider--1' />
                        <hr className='projects__divider projects__divider--2' />
                    </div>
                    <div className='projects__item'>
                        <div className='projects__item--img--top'>
                            <a href='https://onetwoten.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='One-to-Ten' src={onetoten} />
                            </a>
                        </div>
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>
                                <a href='https://onetwoten.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__title">
                                    One-to-Ten
                                </a>
                            </div>
                            <div className='projects__description'>A no-frills social experiment that asks users to be a little more honest, and a little more introspective. This personality surveying application strips down dating apps to their most raw, basic form: matching users with whom they share the most similarities with.</div>
                            <div className='projects__technologies'>
                                <ul>
                                    <li>Flask</li>
                                    <li>SQLAlchemy</li>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>PostgreSQL</li>
                                    <li>Deployed via Docker</li>
                                </ul>
                            </div>
                            <div className='projects__links'>
                                <a href='https://github.com/JTannerShaw/One-to-Ten/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Github
                                </a>
                                <a href='https://onetwoten.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                        <div className='projects__item--img'>
                            <a href='https://github.com/JTannerShaw/One-to-Ten/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='One-to-Ten' src={onetoten} />
                            </a>
                        </div>
                    </div>
                    <div className='projects__dividers--left'>
                        <hr className='projects__divider projects__divider--1' />
                        <hr className='projects__divider projects__divider--2' />
                    </div>
                    <div className='projects__item'>
                        <div className='projects__item--img--top'>
                            <a href='https://to-moo-list.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='To-Moo List' src={tomoolist} />
                            </a>
                        </div>
                        <div className='projects__item--img'>
                            <a href='https://to-moo-list.herokuapp.com/' target="_blank" rel="noreferrer noopener">
                                <img className='projects__image' alt='To-Moo List' src={tomoolist} />
                            </a>
                        </div>
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>
                                <a href='https://to-moo-list.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__title">
                                    To-Moo List
                                </a>
                            </div>
                            <div className='projects__description'>An errand tracking app that allows users to create tasks, organize them into tasklists, then add additional information like priority level, due dates, and details. This single-page application was built on vanilla JavaScript.</div>
                            <div className='projects__technologies'>
                                <ul>
                                    <li>Express</li>
                                    <li>Node.js</li>
                                    <li>Pug</li>
                                    <li>Sequelize</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div className='projects__links'>
                                <a href='https://github.com/PeterShinnn/To-Moo-List/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Github
                                </a>
                                <a href='https://to-moo-list.herokuapp.com/' target="_blank" rel="noreferrer noopener" className="anchor__normal">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;
