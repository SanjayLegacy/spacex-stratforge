import NavBar from './Components/NavBar';
import Rockets from './Screens/Rocket/Rockets';
import History from './Screens/History/History';
import LandingPage from './Screens/LandingPage/LandingPage';
import Launches from './Screens/Launches/Launches';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RocketDetails from './Screens/Rocket/RocketDetails';
import LaunchDetails from './Screens/Launches/LaunchDetails';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<NavBar />} >
          <Route path="/" element={<LandingPage />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:id" element={<RocketDetails />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:id" element={<LaunchDetails />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
