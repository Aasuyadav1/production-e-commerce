import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cart from "./context/Cart.jsx";
import Productdata from "./context/Productdata.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <Cart>
      <Productdata>
        <App />
      </Productdata>
    </Cart>
  </React.StrictMode>
);
