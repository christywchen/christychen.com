import './Projects.css';
import carpediem from '../../assets/carpediem.png';
import tomoolist from '../../assets/tomoolist.png';

function Projects() {
    return (
        <>
            <div id='projects__container'>
                <div className='projects__header'>Projects</div>
                <div className='projects__list'>
                    <div className='projects__item'>
                        <img className='projects__image' src={carpediem} />

                        <div>Carpe Diem - An application for finding and sharing EDM events.</div>
                        <p>Languages & Technlogies:</p>
                    </div>
                    <div className='projects__item'>
                        <img className='projects__image' src={tomoolist} />

                        Project 1
                    </div>
                    <div className='projects__item'>
                        <img className='projects__image' src={tomoolist} />

                        Project 1
                    </div>
                    <div className='projects__item'>
                        <img className='projects__image' src={tomoolist} />

                        Project 1
                    </div>
                </div>
            </div >
        </>
    )
}

export default Projects;
