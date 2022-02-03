import './Profile.css';

function Profile() {
    return (
        <>
            <div id='profile__container'>
                <div className='profile__header'>Christy Chen</div>
                <div className='profile__container--content'>
                    <div className='profile__info'>
                        <div className='profile__text'>
                            <p>
                                Having spent most of my life shuffling between the Bay Area and Los Angeles, I’ve always had a West Coast mentality. Rather than getting lost in the daily grind, I prefer seeking joy in the meaningful experiences of everyday life. For some time, I had transformed my affinity for mindful living into a more complex skill: Crafting integrated online marketing campaigns that help brands tell meaningful, authentic stories.
                            </p>
                            <p>
                                These days, I still tell stories and still seek to create, but my means has shifted.
                            </p>
                            <p>
                                As a software engineer, my toolkit now includes a wide breadth of technologies. I'm leveraging my past experience in digital marketing, ecommerce, and analyzing user behavior to develop full-stack applications that bring joy to not only my world, but hopefully those of others as well.
                            </p>
                        </div>
                        <div className='profile__links'>
                            <a href=''>Resume</a>
                            <a href=''>Github</a>
                            <a href=''>LinkedIn</a>
                            <a href=''>AngelList</a>
                            <a href=''>Contact</a>
                        </div>
                    </div>
                    <div className='profile__image'>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Profile;
