import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, useChain, animated, useSpringRef } from 'react-spring'

import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import NavBar from '../NavBar/NavBar';

import './Splash.css';

function Splash() {
    const vertLineRef = useSpringRef();
    const triangle1Ref = useSpringRef();
    const triangle2Ref = useSpringRef();
    const triangle3Ref = useSpringRef();
    const cylinder1Ref = useSpringRef();
    const cylinder2Ref = useSpringRef();
    const cylinder3Ref = useSpringRef();
    const tripleLinesRef = useSpringRef();
    const squigglyLinesRef = useSpringRef();
    const textBlockRef = useSpringRef();

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
            duration: 800,
        },
        from: {
            opacity: '0',
            transform: 'rotate(-90deg) translateY(-140vw)',
        },
        to: [
            {
                opacity: '1',
                transform: 'rotate(-90deg) translateY(-0vw)'
            },
            {
                opacity: '1',
                transform: 'rotate(-180deg) translateY(-0vw)'
            }
        ],
        delay: 800,
        ref: vertLineRef
    });

    const triangle1 = useSpring({
        config: {
            duration: 650
        },
        from: {
            opacity: '0',
            transform: 'translateX(120%)',
        },
        to: {
            opacity: '1',
            transform: 'translateX(10%)',
        },
        ref: triangle1Ref
    });

    const triangle2 = useSpring({
        config: {
            duration: 450
        },
        from: {
            opacity: '0',
            transform: 'translateX(120%)',
        },
        to: {
            opacity: '1',
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
            opacity: '0',
            borderLeft: '0vw solid var(--accent-5)'
        },
        to: {
            left: '67%',
            opacity: '1',
            borderLeft: '20vw solid var(--accent-5)'
        },
        ref: triangle3Ref
    });

    const cylinder1 = useSpring({
        config: {
            duration: 600
        },
        from: {
            height: '0%'
        },
        to: {
            height: '100%'
        },
        delay: 2000,
        ref: cylinder1Ref
    });

    const cylinder2 = useSpring({
        config: {
            duration: 600
        },
        from: {
            height: '0%'
        },
        to: {
            height: '80%'
        },
        ref: cylinder2Ref
    });

    const cylinder3 = useSpring({
        config: {
            duration: 600
        },
        from: {
            height: '0%'
        },
        to: {
            height: '60%'
        },
        ref: cylinder3Ref
    });

    const tripleLines = useSpring({
        config: {
            duration: 600
        },
        from: {
            opacity: '0',
            width: '0%'
        },
        to: {
            opacity: '1',
            width: '55%'
        },
        ref: tripleLinesRef
    });

    const squigglyLines = useSpring({
        config: {
            duration: 850
        },
        from: {
            width: '0%'
        },
        to: {
            width: '55%'
        },
        ref: squigglyLinesRef
    });

    const textBlock = useSpring({
        config: {
            duration: 450
        },
        from: {
            visibility: 'hidden',
            opacity: '0'
        },
        to: {
            visibility: 'visible',
            opacity: '1'
        },
        ref: textBlockRef
    })

    useChain([vertLineRef, triangle3Ref, triangle1Ref, triangle2Ref, squigglyLinesRef]);
    useChain([cylinder1Ref, cylinder2Ref, cylinder3Ref, tripleLinesRef, textBlockRef]);

    async function handleClick(e) {
        e.preventDefault();

        const element = document.getElementById("profile__container");
        element.scrollIntoView({ alignToTop: 'true', block: 'center', behavior: 'smooth' });
    }

    return (
        <>
            <animated.div style={textBlock}>
                <NavBar />
            </animated.div>
            <div id='splash__main'>
                <animated.div style={textBlock} id='splash__text'>
                    <div id='splash__title'>Hi! I'm Christy.</div>
                    <div id='splash__desc'>
                        <p>
                            I tell stories through code.
                        </p>
                        <p>
                            Let's build something to add some positivity to the world.
                        </p>
                    </div>
                    <div id='splash__cta'>
                        <Link to='/' onClick={handleClick}>Enter</Link>
                    </div>
                </animated.div>
                <animated.div style={tripleLines} id='splash__lines'>
                    <div className='splash__line'></div>
                    <div className='splash__line'></div>
                    <div className='splash__line'></div>
                </animated.div>
                <animated.div style={textBlock} id='splash__social'>
                    <a href='https://github.com/christywchen/' target="_blank" rel="noreferrer noopener">
                        <img className='splash__social--icon' src={github} />
                    </a>
                    <a href='https://www.linkedin.com/in/christy-chen/' target="_blank" rel="noreferrer noopener">
                        <img className='splash__social--icon' src={linkedin} />
                    </a>
                </animated.div>
            </div>
            <div id='splash__cylinders'>
                <animated.div style={cylinder1} className='splash__cylinder splash__cylinder--1'></animated.div>
                <animated.div style={cylinder2} className='splash__cylinder splash__cylinder--2'></animated.div>
                <animated.div style={cylinder3} className='splash__cylinder splash__cylinder--3'></animated.div>
            </div>
            <animated.div style={squigglyLines} id='splash__squiggly'>
                <div className='splash__squiggly--ellipse-1'></div>
                <div className='splash__squiggly--ellipse-1 splash__squiggly--ellipse-2'></div>
            </animated.div>
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
