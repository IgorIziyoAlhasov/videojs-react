import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ApplicationNav, Footer } from './components';
import './main.scss';
import { Basic, CustomControls, Home, Playlist, Redesigned } from './pages';

const App = () => {
  return (
    <main className="video-app">
      <Router>
        <ApplicationNav />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/custom" element={<CustomControls />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/redesign" element={<Redesigned />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
