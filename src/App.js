import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
import Convertasion from './pages/Convertasion';
import USDPage from './pages/USDPage';
import EURPage from './pages/EURPage';
import PLNPage from './pages/PLNPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        {/* <Route index element={<Convertasion />} /> */}
        {/* <Route path="uah-usd" element={<USDPage />} /> */}
        <Route path="uah-usd" element={<USDPage />} />
        <Route path="uah-eur" element={<EURPage />} />
        <Route path="uah-pln" element={<PLNPage />} />
      </Route>
    </Routes>
  );
}

export default App;
