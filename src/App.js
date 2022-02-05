import { Routes, Route } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Splash from './components/Splash';
import Profile from './components/Profile';
import Projects from './components/Projects';
import './App.css';

function App() {
	return (
		<>
			<Parallax pages={3} style={{ top: 0, left: 0 }}>
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
					speed={0.2}>
					<Profile />
				</ParallaxLayer>
				<ParallaxLayer
					id='container__two'
					offset={2}
					speed={0.2}>
					<Projects />
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
