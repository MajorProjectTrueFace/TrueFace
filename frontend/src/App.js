import './App.css';
import { Toaster } from 'react-hot-toast';
import Sentiment from './pages/Sentiment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return <>
    <div className='backStyle'>
      <Toaster />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/emotions" element={<Sentiment />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
}

export default App;
