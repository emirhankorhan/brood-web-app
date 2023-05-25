import { Route, Routes } from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Focus from "./components/focus/Focus";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/focus' element={<Focus />} />
      </Routes>
    </div>
  );
}

export default App;