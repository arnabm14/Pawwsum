import React, { useEffect } from "react";
import "./Recommendations.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { fetchRecommendation } from "../../redux/recommendations/recommendationActions";

const Recommendations = () => {
  const dispatch = useDispatch();
  const recommendations = useSelector((state) => state.recommendations?.data);
  const loading = useSelector((state) => state.recommendations.loading);
  const error = useSelector((state) => state.recommendations.error);

  useEffect(() => {
    dispatch(fetchRecommendation());
  }, []);

  return (
    <div className="recommendations">
      {loading ? (
        <div className="no-content">Loading your recommendations...</div>
      ) : error ? (
        <div className="no-content">Some error occurred!</div>
      ) : (
        <div className="recommendation-list">
          {recommendations &&
            recommendations.length > 0 &&
            recommendations.map((prod) => (
              <ProductDetails product={prod} key={prod.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
