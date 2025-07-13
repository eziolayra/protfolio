import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './Global/Main';
import Nav from './Global/Nav';
import Aboutme from './About/Aboutme';
import Footer from './Global/Footer';
import { SnackbarProvider } from 'notistack';
import Project from './Projects/Project';
import ContactMe from './About/ContactMe';
import { AllProjects } from './Projects/AllProjects';

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
