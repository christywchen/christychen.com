import './Profile.css';

function Profile() {
    return (
        <>
            <section id='profile__container'>
                <div className='profile__image profile__image--top'></div>
                <div className='profile__header'>Christy Chen</div>
                <div className='profile__container--content'>
                    <div className='profile__info'>
                        <div className='profile__text'>
                            <p>
                                As a child of the West Coast, I've always had a mentality that matched the lifestyle. Rather than getting lost in the daily grind, I prefer seeking joy in the meaningful experiences of everyday life. For a while, I transformed my affinity for mindful living into a more complex skill: Crafting integrated online marketing campaigns that help brands tell meaningful, authentic stories.
                            </p>
                            <p>
                                These days, I still tell stories and create, but my means has shifted.
                            </p>
                            <p>
                                As a software engineer, my toolkit now includes a wide breadth of technologies and skills. I'm also leveraging my past experience in digital marketing, ecommerce, and studying user behavior as I build full-stack applications that bring joy to not only myself, but hopefully others as well.
                            </p>
                        </div>
                        <div className='profile__links'>
                            <a href='https://github.com/christywchen' target="_blank" rel="noreferrer noopener" className="anchor__normal">Github</a>
                            <a href='https://www.linkedin.com/in/christywchen' target="_blank" rel="noreferrer noopener" className="anchor__normal">LinkedIn</a>
                            <a href='https://angel.co/u/christy-chen' target="_blank" rel="noreferrer noopener" className="anchor__normal">AngelList</a>
                            <a href='https://www.christychen.com/Chen_Christy_Resume_2022.pdf' target="_blank" rel="noreferrer noopener" className="anchor__normal">Resume</a>
                            <a href='mailto:christy.w.chen@gmail.com' target="_blank" rel="noreferrer noopener" className="anchor__normal">Contact</a>
                        </div>
                    </div>
                    <div className='profile__image profile__image--normal'></div>
                </div>
                <div className='profile__divider'></div>
            </section>
        </>
    )
}

export default Profile;
