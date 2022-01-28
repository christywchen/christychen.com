import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, useChain, animated } from 'react-spring'

import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

import './Splash.css';

function Splash() {
    // const circleRef = useSpringRef()
    const circle = useSpring({
        config: {
            duration: 1050
        },
        from: {
            width: '0vh',
            height: '0vh'
        },
        to: {
            width: '15vh',
            height: '15vh',
            transform: 'translateY(-50%)',
        },
    });

    const vertLine = useSpring({
        config: {
            vertLine: 20,
            duration: 1250
        },
        from: {
            transform: 'rotate(-90deg) translateX(2vw) translateY(-100vw)',
        },
        to: [
            { transform: 'rotate(-90deg) translateX(2vw) translateY(-0vw)' },
            { transform: 'rotate(-180deg) translateX(0vw) translateY(-0vw)' }
        ],
        delay: 1250
    })

    const triangle3 = useSpring({
        from: {
            borderLeft: '20vw solid var(--accent-5)'
        },
        to: {
            borderLeft: '20vw solid var(--accent-5)'
        }
    })

    return (
        <>
            {/* <div id='splash__main'>
                <div id='splash__text'>
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
                <div id='splash__lines'>
                    <div className='splash__line'></div>
                    <div className='splash__line'></div>
                    <div className='splash__line'></div>
                </div>
                <div id='splash__social'>
                    <a href='https://github.com/christywchen/' target="_blank" rel="noreferrer noopener">
                        <img className='splash__social--icon' src={github} />
                    </a>
                    <a href='https://www.linkedin.com/in/christy-chen/' target="_blank" rel="noreferrer noopener">
                        <img className='splash__social--icon' src={linkedin} />
                    </a>
                </div>
            </div>
            <div id='splash__cylinders'>
                <div className='splash__cylinder splash__cylinder--1'></div>
                <div className='splash__cylinder splash__cylinder--2'></div>
                <div className='splash__cylinder splash__cylinder--3'></div>
            </div>
            <div id='splash__squiggly'>
                <div className='splash__squiggly--ellipse-1'></div>
                <div className='splash__squiggly--ellipse-1 splash__squiggly--ellipse-2'></div>
            </div>
        */}
            {/* <div id='splash__triangle--1'></div> */}
            {/* <div id='splash__triangle--2'></div> */}
            <div id='splash__triangle--3'></div>
            <div id='splash__verticals'>
                <animated.div style={vertLine} id='splash__vertbar'></animated.div>
                <animated.div style={circle} id='splash__circle'></animated.div>
            </div>
        </>
    )
}

export default Splash;
