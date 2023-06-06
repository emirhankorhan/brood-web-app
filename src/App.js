import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import Sign from './components/signin/Sign';
import Mybrood from './components/mybrood/Mybrood';
import Focus from './components/focus/Focus';

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Header />} />
        <Route path='/sign-in' element={<Sign />} />
        <Route path='/broods' element={<Mybrood />} />
        <Route path='/help-focusing' element={<Focus />} />
      </Routes>
    </div>
  );
}

export default App;