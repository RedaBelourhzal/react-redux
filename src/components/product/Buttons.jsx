import { useDispatch } from "react-redux";
import { editProduct } from "../../store/features/product/productSlice";
import { destroyProduct } from "../../store/features/product/productActions";
import { addToCart } from "../../store/features/cart/cartSlice";

const Buttons = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <button
        onClick={(e) => dispatch(editProduct(product))}
        className="me-2 btn btn-sm btn-warning"
      >
        Edit
      </button>
      <button
        onClick={(e) => dispatch(destroyProduct(product.id))}
        className="me-2 btn btn-sm btn-danger"
      >
        Delete
      </button>
      <button
        onClick={() => handleAddToCart(product)}
        className="btn btn-sm btn-primary"
      >
        Add to Cart
      </button>
    </>
  );
};

export default Buttons;
