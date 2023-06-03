import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import Sign from './components/signin/Sign';

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Header />} />
        <Route path='/sign-in' element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;