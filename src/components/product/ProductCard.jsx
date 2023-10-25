import React from "react";
import { useSelector } from "react-redux";
import Buttons from "./Buttons";

const ProductCard = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4  mt-2">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <div className="card h-100">
            <img
              src={product.thumbnail || ""}
              alt={product.title}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">Price: {product.price}</p>
            </div>
            <div className="card-footer">
              <Buttons product={product} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
