import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import Focus from "./components/focus/Focus";
import Featurestwo from "./components/featurestwo/Featurestwo";
import Sign from './components/signin/Sign';

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Header />} />
        <Route path='/sign-in' element={<Sign />} />
        <Route path='/fear' element={<Featurestwo />} />
        <Route path='/focus' element={<Focus />} />
      </Routes>
    </div>
  );
}

export default App;