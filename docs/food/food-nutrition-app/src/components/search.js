import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  // input -> text  ===> convert to fdcId for fetch ===> return dataObj ==> load to frontEnd with calculation & Label
  // input text with dropdown selection to autofill the food (E.g. milk - brand name )
  // result will show up on top of labels with "x" delete function (might consider change to check/uncheck) 
  // need to know what food has data and what are missing -> food item show up as red when fail to fetch? (Or not being able to add from search bar)
  // populate USDA labels & YAML 
  // Might consider adding charts to make it easy to read 

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.length > 3) {
      try {
        const data = await loadDataCommons_search('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml', value);
        console.log("data",data);
        setSuggestions(data.foods);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setSuggestions([]);
    }
  };

  console.log(suggestions)

  const handleSelectSuggestion = async (suggestion) => {
    try {
      const data = await fetchFoodDetails('bLecediTVa2sWd8AegmUZ9o7DxYFSYoef9B4i1Ml', suggestion.fdcId);
      setSearchResults([...searchResults, data]);
      setSearchInput("");
      setSuggestions([]);
    } catch (error) {
      setError(error.message);
    }
  };

  const loadDataCommons_search = async (apiKey, keyword) => {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${keyword}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  };

  const fetchFoodDetails = async (apiKey, fdcId) => {
    const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch food details');
    }
    return await response.json();
  };

  const handleRemoveResult = (index) => {
    setSearchResults(searchResults.filter((_, i) => i !== index));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter your food search"
        onChange={handleInputChange}
        value={searchInput}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion) => (
            <li key={suggestion.fdcId} onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="error">{error}</p>}
      <div className="results-container">
        {searchResults.map((result, index) => (
          <div key={result.fdcId} className="result-item">
            <span>{result.description}</span>
            <button onClick={() => handleRemoveResult(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
