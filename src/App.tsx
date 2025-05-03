import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box sx={{ height: '100vh', overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
