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
                                Having spent most of my life shuffling between the Bay Area and Los Angeles, I’ve always had a West Coast mentality. Rather than getting lost in the daily grind, I prefer seeking joy in the meaningful experiences of everyday life. For a while, I transformed my affinity for mindful living into a more complex skill: Crafting integrated online marketing campaigns that help brands tell meaningful, authentic stories.
                            </p>
                            <p>
                                These days, I still tell stories and still seek to create, but my means has shifted.
                            </p>
                            <p>
                                As a software engineer, my toolkit now includes a wide breadth of technologies and skills. In creating full-stack applications, I'm also leveraging my past experience in digital marketing, ecommerce, and analyzing user behavior to build things that bring joy to not only my world, but hopefully those of others as well.
                            </p>
                        </div>
                        <div className='profile__links'>
                            {/* <a href='' target="_blank" rel="noreferrer noopener" className="anchor__normal">Resume</a> */}
                            <a href='https://github.com/christywchen' target="_blank" rel="noreferrer noopener" className="anchor__normal">Github</a>
                            <a href='https://www.linkedin.com/in/christywchen' target="_blank" rel="noreferrer noopener" className="anchor__normal">LinkedIn</a>
                            <a href='https://angel.co/u/christy-chen' target="_blank" rel="noreferrer noopener" className="anchor__normal">AngelList</a>
                            <a href='mailto:christy.w.chen@gmail.com' target="_blank" rel="noreferrer noopener" className="anchor__normal">Contact</a>
                        </div>
                    </div>
                    <div className='profile__image profile__image--normal'></div>
                </div>
            </section>
        </>
    )
}

export default Profile;
