import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="ml-[7rem]">
      <h1 className="text-xl font-bold ml-[3rem] mt-[3rem] mb-[1.5rem]">
        FAVORITE PRODUCTS
      </h1>

      {/* Check if there are no favorite products */}
      {favorites.length === 0 ? (
        <p className="ml-[3rem] mt-[2rem]">You have no favorite products yet.</p>
      ) : (
        <div className="flex flex-wrap">
          {favorites.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
