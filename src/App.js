import { Routes, Route } from 'react-router-dom';

import Splash from './components/Splash';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/home' element={<>Test</>} />
      </Routes>
    </>
  );
}

export default App;
