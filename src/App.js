import './App.css';
import MainPage from './containers/MainPage';
import "./static/style.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import NavBar from './components/NavBar';
import Quiz from './containers/Quiz';
import CutGenerator from './components/CutGenerator';

function App() {
  return (
    <BrowserRouter>
      <div className="outer">
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainPage className="main-container"/>} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/cuts" element={<CutGenerator />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
