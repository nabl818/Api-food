import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ReceipeCard from "./components/ReceipeCard"; // Import ReceipeCard

function App() {
  const [isloading, setIsloading] = useState(false);
  const [quary, setQuary] = useState("");
  const [receipes, setReceipes] = useState([]);

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const searchReceipe = async () => {
    if (!quary.trim()) {
      setReceipes([]);
      return;
    }
    setIsloading(true);
    try {
      const res = await fetch(apiUrl + quary);
      const data = await res.json();
      setReceipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setReceipes([]);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    searchReceipe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchReceipe();
  };

  return (
    <div className="container">
      <h2>Our Recipes</h2>
      <SearchBar
        handleSubmit={handleSubmit}
        value={quary}
        onChange={(event) => setQuary(event.target.value)}
        isloading={isloading}
      />
      <div className="receipes">
        {receipes.length > 0 ? (
          receipes.map((receipe) => (
            <ReceipeCard key={receipe.idMeal} receipe={receipe} />
          ))
        ) : (
          <p>{quary.trim() ? "No Recipes Found!" : "Start by entering a search term!"}</p>
        )}
      </div>
    </div>
  );
}

export default App;
