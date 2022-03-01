import { Routes, Route } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Splash from './components/Splash/Splash';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import './App.css';
import Technologies from './components/Technologies/Technologies';

function App() {
	return (
		<>
			<Parallax pages={5} style={{ top: 0, left: 0 }}>
				<ParallaxLayer
					offset={0}
					id='container__one'
					speed={0.5}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Splash />
				</ParallaxLayer>
				<ParallaxLayer
					id='container__two'
					offset={1}
					speed={0.2}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Profile />
				</ParallaxLayer>
				<ParallaxLayer
					id='container__three'
					offset={1.9}
					speed={0.2}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Technologies />
				</ParallaxLayer>
				<ParallaxLayer
					id='container__four'
					offset={3.2}
					speed={0.2}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Projects />
				</ParallaxLayer>
				<ParallaxLayer
					id='container__five'
					offset={4}
					speed={0.2}>
				</ParallaxLayer>
			</Parallax>
			<Routes>
				{/* <Route path='/' element={<Splash />} /> */}
				{/* <Route path='/home' element={<>Test</>} /> */}
			</Routes>
		</>
	);
}

export default App;
