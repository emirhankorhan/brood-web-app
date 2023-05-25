import './App.css';
import Header from './components/Header/Header';
import Content from './components/content/Content';
// import Features from './components/features/Features';
// import Featurestwo from './components/featurestwo/Featurestwo';

function App() {

  return (
    <div>
      <div className="app">
        <Header />
        <Content />
      </div>
      {/* <Features />
      <Featurestwo/> */}
    </div>
  );
}

export default App;
