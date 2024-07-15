import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/search';
import Label from './components/label';

// const Search = () => <h1>Search</h1>

function App() {
  return (
    <div>
      <h1>Welcome to Food Nutrition Label</h1>
      <Search />
      {/* <Label /> */}
    </div>
  );
}


export default App;
