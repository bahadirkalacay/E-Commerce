import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../redux/action/StateProvider";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav-logo">
          <LocalGroceryStoreIcon className="nav-logo-item" fontsize="large" />
          <h2 className="nav-title">E-Commerce</h2>
        </div>
      </Link>
      <div className="nav-search">
        <input type="text" className="nav-search-item" />
        <SearchIcon className="nav-search-logo" />
      </div>
      <div className="nav-items">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav-item">
            <span className="nav-itemOne nav-hello">Hello Guest</span>
            <span className="nav-itemTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav-item">
          <span className="nav-itemOne">Your</span>
          <span className="nav-itemTwo nav-shop">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav-itemBasket">
            <ShoppingBagIcon className="nav-itemOneLogo" />
            <span className="nav-itemTwo nav-basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
