import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './Components/Global/Main';
import Nav from './Components/Global/Nav';
import Footer from './Components/Global/Footer';
import { SnackbarProvider } from 'notistack';
import AllProjects from './Components/Projects/AllProjects';
import Project from './Components/Projects/Project';
import Aboutme from './Components/About/Aboutme';
import ContactMe from './Components/About/ContactMe';

function App() {
  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<ContactMe />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SnackbarProvider >
  );
}

export default App;
