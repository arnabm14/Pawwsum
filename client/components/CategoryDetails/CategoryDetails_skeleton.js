import React from "react";
import "./CategoryDetails_skeleton.scss";

const CategoryDetails_skeleton = () => {
  return (
    <div className="category-details-skeleton-container">
      <div className="skeleton-left">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton-body">
          <div className="skeleton skeleton-description"></div>
          <div className="skeleton skeleton-description"></div>
        </div>
        <div className="skeleton skeleton-button"></div>
      </div>
      <div className="skeleton-right">
        <div className="skeleton skeleton-image"></div>
      </div>
    </div>
  );
};

export default CategoryDetails_skeleton;
