import './Technologies.css';

function Technologies() {
    return (
        <>
            <section id='technologies__container'>
                <div className='technologies__header'>Technologies</div>
                Some of the technologies I've been working with lately...
                <div className='technologies__container--content'>
                    <div>
                        <ul className='technologies__list'>
                            <li>JavaScript</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>Sequelize</li>
                            <li>React / Redux</li>
                            <li>HTML5 & CSS3</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='technologies__list'>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>SQLAlchemy</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Technologies;
