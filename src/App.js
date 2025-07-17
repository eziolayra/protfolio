import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Main from './Components/Global/Main';
import Footer from './Components/Global/Footer';
import { SnackbarProvider } from 'notistack';
import AllProjects from './Components/Projects/AllProjects';

function App() {
  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </SnackbarProvider >
  );
}

export default App;
