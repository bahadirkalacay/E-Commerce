import React from "react";
import "../styles/Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../redux/action/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} />

      <button onClick={addToBasket} className="btn btn-success">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
