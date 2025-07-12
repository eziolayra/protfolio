import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './Global/Main';
import Nav from './Global/Nav';
import Aboutme from './About/Aboutme';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/projects" element={<Main />} />
          <Route path="/contacts" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
