import '../App.css';
import Banner from './Banner';
import RecipeItem from './RecipeItem';

function App() {
  return (
    <div className="App">
      <Banner />
      <p>Bienvenue sur notre site de Cuisine ! (44=bzh)</p>
      <RecipeItem />
    </div>
  );
}

export default App;
