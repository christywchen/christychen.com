import './Technologies.css';

function Technologies() {
    return (
        <>
            <section id='technologies__container'>
                <div className='technologies__header'>Technologies</div>
                <span className='technologies__desc'>
                    Some of the technologies I've been working with lately...
                </span>
                <div className='technologies__container--content'>
                    <div>
                        <ul className='technologies__list'>
                            <li>JavaScript</li>
                            <li>Express.js</li>
                            <li>Node.js</li>
                            <li>Sequelize</li>
                            <li>Python</li>
                            <li>Flask</li>
                            <li>SQLAlchemy</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='technologies__list'>
                            <li>React / Redux</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>react-spring</li>
                            <li>SocketIO</li>
                            <li>AWS EC2</li>
                            <li>AWS S3</li>
                        </ul>
                    </div>
                </div>
                <div className='technologies__divider'></div>
            </section>
        </>
    )
}

export default Technologies;
