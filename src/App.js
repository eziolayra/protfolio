import './index.css';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Global/Main';
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
      </BrowserRouter>
    </SnackbarProvider >
  );
}

export default App;
