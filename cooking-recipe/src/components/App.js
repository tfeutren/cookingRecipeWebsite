import '../App.css';
import Banner from './Banner';
import RecipeItem from './RecipeItem';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <p>Bienvenue sur notre site de Cuisine ! (44=bzh)</p>
      <RecipeItem />
      <Footer />
    </div>
  );
}

export default App;
