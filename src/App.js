import { useState } from 'react';
import './app.css'
import { SearchBar } from './component/search_bar';
import { SearchResult } from './component/SearchResults';
function App() {
  const [results,setResults]= useState([]);

  return (
    <div className="App">
     <div className='search-bar'>
       <SearchBar setResults={setResults}/>
       <SearchResult results = {results}/>
        </div>
    </div>
  );
}

export default App;
