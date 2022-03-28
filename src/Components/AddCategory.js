import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setcategories, categories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setcategories([inputValue,...categories]);
      setInputValue(" ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddCategory</h2>
      <input
        type="text"
        placeholder={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};
