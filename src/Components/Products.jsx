import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
import pimage3 from "../images/s3.png";

function Products() {
  return (
    <div id="products">
      <h1>Choose & Enjoy</h1>
      <p>
        Lorem Products Products Products Products Products Products Products
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="Strawberry Cake" />
        <Productbox image={pimage2} title="Chocolate Cake" />
        <Productbox image={pimage3} title="Vanilla Cake" />
      </div>
    </div>
  );
}

export default Products;
