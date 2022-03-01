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
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>The Book Nook</div>
                            <div className='projects__description'>A book club manager that helps communities stay organized. It offers a space for members to socialize and stay up to date so that they can read more, discuss more, and stress less. Club members can also stay in touch through live discussion channels.</div>
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
                            <img className='projects__image' src={thebooknook} />
                        </div>
                    </div>
                    <div className='projects__dividers--left'>
                        <hr className='projects__divider projects__divider--1' />
                        <hr className='projects__divider projects__divider--2' />
                    </div>
                    <div className='projects__item'>
                        <div className='projects__item--img'>
                            <img className='projects__image' src={carpediem} />
                        </div>
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>Carpe Diem</div>
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
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>One-to-Ten</div>
                            <div className='projects__description'>A no-frills social experiment that asks users to be a little more honest, and a little more introspective. This personality surveying application essentially strips down dating apps to their most raw, basic purpose: matching users with whom they have the most similarities with.</div>
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
                            <img className='projects__image' src={onetoten} />
                        </div>
                    </div>
                    <div className='projects__dividers--left'>
                        <hr className='projects__divider projects__divider--1' />
                        <hr className='projects__divider projects__divider--2' />
                    </div>
                    <div className='projects__item'>
                        <div className='projects__item--img'>
                            <img className='projects__image' src={tomoolist} />
                        </div>
                        <div className='projects__item--desc'>
                            <div className='projects__subtitle'>To-Moo List</div>
                            <div className='projects__description'>An errand tracking app that allows users to create tasks, organize them into tasklists, then add additional information like prioritization, due dates, and details. This single-page application was built on vanilla JavaScript.</div>
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
