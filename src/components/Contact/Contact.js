import './Contact.css';

function Contact() {
    return (
        <>
            <section id='contact__container'>
                <div className='contact__header'>Let's Connect</div>
                I am currently looking for opportunities for work and would be thrilled to work together. Reach out to me at any of the following:
                <div className='profile__links'>
                    {/* <a href='' target="_blank" rel="noreferrer noopener" className="anchor__normal">Resume</a> */}
                    <a href='https://github.com/christywchen' target="_blank" rel="noreferrer noopener" className="anchor__normal">Github</a>
                    <a href='https://www.linkedin.com/in/christywchen' target="_blank" rel="noreferrer noopener" className="anchor__normal">LinkedIn</a>
                    <a href='https://angel.co/u/christy-chen' target="_blank" rel="noreferrer noopener" className="anchor__normal">AngelList</a>
                    <a href='mailto:christy.w.chen@gmail.com' target="_blank" rel="noreferrer noopener" className="anchor__normal">Email</a>
                </div>
                <div className='contact__divider'></div>
            </section>
        </>
    )
}

export default Contact;
