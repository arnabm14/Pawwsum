import React from "react";
import "./CategoryDetails.scss";
import PropTypes from "prop-types";

const CategoryDetails = ({ category, handleExplore }) => {
  return (
    <>
      <div className="category-details">
        <div className="category-title">{category.name}</div>
        <div className="category-description">{category.description}</div>
        <button
          type="button"
          className="category-explore-button"
          onClick={() => handleExplore(category.id)}
          tabIndex={0}
          disabled={!category.enabled}
          onKeyPress={() => handleExplore(category.id)}
        >
          Explore {category.name}
        </button>
      </div>
      <div className="category-right">
        <img
          className="category-image"
          src={category.imageUrl}
          alt={category.name}
          height="150"
          width="200"
        />
      </div>
    </>
  );
};

export default CategoryDetails;

CategoryDetails.propTypes = {
  category: PropTypes.object.isRequired,
  handleExplore: PropTypes.func.isRequired,
};
