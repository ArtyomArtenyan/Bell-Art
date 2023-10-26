import React from "react";
import { Link } from "react-router-dom";
import Product1 from "../Pictures/Products/BG_Photo.jpg";
import Product2 from "../Pictures/Products/BG_Photo2.jpg";

const Product = () => {
  return (
    <div className="ProductsWrapper flex justify-center py-20">
      <div className="Products justify-center w-[79vw] items-center gap-[2vw] sr:flex-col inline-flex">
        <div className="Product1 w-[54%] h-[600px] md:w-[45%] lg:w-[48.4%] lg:h-[468px] sr:w-[98.7%] xg:w-[111%] xg:h-[400px] relative bg-white shadow">
          <Link to="/products/1">
            <div className="ProductPhoto  w-full h-full left-0 top-0 absolute">
              <img
                className="BgPhoto w-full h-full object-cover	 left-0 top-0 absolute"
                src={Product1}
              />
              <div className="BgLayer w-full h-full left-0 top-0 absolute bg-neutral-800 bg-opacity-50" />
            </div>
            <div className="absolute pl-20 md:pl-10 bottom-20 lg:bottom-[34px] text-white text-[2.1vw] sr:text-[32px] sr:bottom-10 xg:text-[22px]  font-normal font-montserrat">
              Արտադրանք 1
            </div>{" "}
          </Link>
        </div>{" "}
        <div className="Product2 w-[54%] h-[600px] md:w-[45%] lg:w-[48.4%] lg:h-[468px] sr:w-[98.7%] xg:w-[111%] xg:h-[400px]  relative bg-white shadow">
          <Link to="/products/2">
            <div className="ProductPhoto  w-full h-full left-0 top-0 absolute">
              <img
                className="BgPhoto w-full h-full object-cover	 left-0 top-0 absolute"
                src={Product2}
              />
              <div className="BgLayer w-full h-full left-0 top-0 absolute bg-neutral-800 bg-opacity-50" />
            </div>
            <div className="absolute pl-20 md:pl-10 bottom-20 lg:bottom-[34px] text-white text-[2.1vw] sr:text-[32px] sr:bottom-10 xg:text-[22px] font-normal font-montserrat">
              Արտադրանք 2
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
