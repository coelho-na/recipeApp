import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {
  const apiId = process.env.REACT_APP_API_ID;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${apiId}&app_key=${apiKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="seacr-form">
        <input className="search-form__bar" type="text" />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>

      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
