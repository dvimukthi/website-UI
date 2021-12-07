import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It's Time To Eat A Good Taste Of Cakes</h3>
        <h1>
          <span>Cake</span> For
          <br /> WEEK
        </h1>
        <p className="details">
          At our Bakery, we create each product with <br />
          best quality ingredients to ensure you <br />
          enjoy your every occasion.
        </p>
        <div className="header-btns">
          <a herf="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
