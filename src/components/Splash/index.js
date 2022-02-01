import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, useChain, animated, useSpringRef } from 'react-spring'

import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

import './Splash.css';

function Splash() {
    const vertLineRef = useSpringRef();
    const triangle1Ref = useSpringRef();
    const triangle2Ref = useSpringRef();
    const triangle3Ref = useSpringRef();

    const circle = useSpring({
        config: {
            duration: 900
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
            duration: 1000
        },
        from: {
            transform: 'rotate(-90deg) translateY(-130vw)',
        },
        to: [
            { transform: 'rotate(-90deg) translateY(-0vw)' },
            { transform: 'rotate(-180deg) translateY(-0vw)' }
        ],
        delay: 900,
        ref: vertLineRef
    });

    const triangle1 = useSpring({
        config: {
            duration: 650
        },
        from: {
            transform: 'translateX(120%)',
        },
        to: {
            transform: 'translateX(10%)',
        },
        ref: triangle1Ref
    });

    const triangle2 = useSpring({
        config: {
            duration: 650
        },
        from: {
            transform: 'translateX(120%)',
        },
        to: {
            transform: 'translateX(10%)',
        },
        ref: triangle2Ref
    });

    const triangle3 = useSpring({
        config: {
            duration: 500
        },
        from: {
            left: '66%',
            borderLeft: '0vw solid var(--accent-5)'
        },
        to: {
            left: '67%',
            borderLeft: '20vw solid var(--accent-5)'
        },
        ref: triangle3Ref
    });


    useChain([vertLineRef, triangle3Ref, triangle1Ref, triangle2Ref]);

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
            <animated.div style={triangle3} id='splash__triangle--3'></animated.div>
            <div id='splash__verticals'>
                <animated.div style={vertLine} id='splash__vertbar'></animated.div>
                <animated.div style={circle} id='splash__circle'></animated.div>
            </div>
            <animated.div style={triangle1} id='splash__triangle--1'></animated.div>
            <animated.div style={triangle2} id='splash__triangle--2'></animated.div>
        </>
    )
}

export default Splash;
