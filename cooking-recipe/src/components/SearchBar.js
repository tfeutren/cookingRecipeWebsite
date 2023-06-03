import recipeList from '../datas/recipeList';

function SearchBar() {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          
        }
    };

    return (
        <div className='search-box'>
            <input className="search-text" type="text" placeholder="Search Anything" onKeyDown={handleKeyPress} />
        </div>
    )
}

export default SearchBar;