import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductList from "../components/product/ProductList";
import ProductForm from "../components/product/ProductForm";
import ProductGrid from "../components/product/ProductGrid";

import { getAllProducts } from "../store/features/product/productActions";
import ProductCard from "../components/product/ProductCard";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [viewMode, setViewMode] = useState("list");

  return (
    <>
      <ProductForm />

      <div className="row my-4 text-end ">
        <div className="col-12 mb-2">
          <div>
            <button
              className="me-2 btn btn-sm btn-primary"
              onClick={() => setViewMode("list")}
            >
              List
            </button>
            <button
              className="me-2 btn btn-sm btn-success"
              onClick={() => setViewMode("grid")}
            >
              Card
            </button>
          </div>

          {viewMode === "list" ? <ProductList /> : <ProductCard />}
        </div>
      </div>
    </>
  );
};

export default Shop;
