import React, { useEffect } from "react";
import "./Home.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/categories/categoryActions";
import { fetchBanners } from "../../redux/banners/bannerActions";
import Carousel from "../../components/Carousel/Carousel";
import CategoryDetails from "../../components/CategoryDetails/CategoryDetails";
import HomeSkeleton from "./Home_skeleton";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const loading = useSelector((state) => state.categories.loading);
  const error = useSelector((state) => state.categories.error);
  const banners = useSelector((state) => state.banners.data);

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, []);

  const handleExplore = (categoryId) => {
    history.push(`/products#${categoryId}`);
  };

  return (
    <div className="home">
      {loading ? (
        <HomeSkeleton />
      ) : error ? (
        <div className="no-content">Some error occured!</div>
      ) : (
        <>
          {banners && <Carousel data={banners} />}
          <div className="disclaimer">
            Note: This is a dummy site built for learning purposes, no products are
            available for sale.
          </div>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.id} className="category">
                <CategoryDetails
                  category={category}
                  handleExplore={handleExplore}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
