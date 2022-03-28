import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {
  const [categories, setcategories] = useState(["Clash Royale"]);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} categories={categories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
};

export default GifExpertApp;
