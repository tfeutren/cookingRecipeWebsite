import '../App.css';
import Banner from './Banner';
import RecipeItem from './RecipeItem';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import EntreesPage from '../pages/EntreePage';
import PlatsPage from '../pages/PlatsPage';
import DessertsPage from '../pages/DessertsPage';
import FrigoPage from '../pages/FrigoPages';
import AleatoirePage from '../pages/AleatoirePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Banner />

        {/* Define the link page */}
        <Routes>
          <Route path="/" element={<RecipeItem />} />
          <Route path="/entrees" element={<EntreesPage />} />
          <Route path="/plats" element={<PlatsPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/frigo" element={<FrigoPage />} />
          <Route path="/aleatoire" element={<AleatoirePage />} />
        </Routes>


        <Footer />
      </Router>
    </div>
  );
}

export default App;
