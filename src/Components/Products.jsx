import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
import pimage3 from "../images/s3.png";
import pimage4 from "../images/s4.png";
import pimage5 from "../images/s5.png";

function Products() {
  return (
    <div id="products">
      <h1>Choose & Enjoy</h1>
      <p>Celebrate your family events with special cakes at our store.</p>
      <div className="a-container">
        <Productbox image={pimage1} title="Strawberry Cake" />
        <Productbox image={pimage2} title="Chocolate Cake" />
        <Productbox image={pimage3} title="Vanilla Cake" />
        <Productbox image={pimage4} title="Anniversary Cake" />
      </div>
    </div>
  );
}

export default Products;
