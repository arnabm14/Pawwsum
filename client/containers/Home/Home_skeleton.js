import React from "react";
import "./Home_skeleton.scss";
import CategoryDetails_skeleton from "../../components/CategoryDetails/CategoryDetails_skeleton";
import Carousel_skeleton from "../../components/Carousel/Carousel_skeleton";

const categories = [1, 2, 3, 4, 5];
const HomeSkeleton = () => {
  return (
    <div className="home-skeleton">
      <Carousel_skeleton />
      <ul className="category-list">
        {categories.map((num) => (
          <CategoryDetails_skeleton key={num} />
        ))}
      </ul>
    </div>
  );
};

export default HomeSkeleton;
