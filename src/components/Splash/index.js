import { Link } from 'react-router-dom';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

import './Splash.css';

function Splash() {
    return (
        <>
            <div id='splash__main'>
                <div id='splash__title'>Hi! I'm Christy.</div>
                <div id='splash__desc'>
                    <p>
                        I tell stories through code.
                    </p>
                    <p>
                        Let's build something to make the world a better place.
                    </p>
                </div>
                <div id='splash__cta'>
                    <Link to='/home'>Enter</Link>
                </div>
            </div>
            <div id='splash__social'>
                <a href='https://github.com/christywchen/' target="_blank" rel="noreferrer noopener">
                    <img className='splash__social--icon' src={github} />
                </a>
                <a href='https://www.linkedin.com/in/christy-chen/' target="_blank" rel="noreferrer noopener">
                    <img className='splash__social--icon' src={linkedin} />
                </a>
            </div>
            <div id='splash__cylinders'>
                <div className='splash__cylinder splash__cylinder--1'></div>
                <div className='splash__cylinder splash__cylinder--2'></div>
                <div className='splash__cylinder splash__cylinder--3'></div>
            </div>
            <div id='splash__lines'>
                <div className='splash__line'></div>
                <div className='splash__line'></div>
                <div className='splash__line'></div>
            </div>
            <div id='splash__circle'></div>
            <div id='splash__squiggly'>
                <div className='splash__squiggly--ellipse-1'></div>
                <div className='splash__squiggly--ellipse-1 splash__squiggly--ellipse-2'></div>
            </div>
            <div id='splash__triangle--1'></div>
            <div id='splash__triangle--2'></div>
            <div id='splash__triangle--3'></div>
            <div id='splash__vertbar'></div>
        </>
    )
}

export default Splash;
