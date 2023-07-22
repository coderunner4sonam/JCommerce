import React, { useState } from 'react';
import {ProductType} from "../pages/MainBody";
  
const ProductCard: React.FC<{ productdata: ProductType }> = ({ productdata }) => {
  let [isHover,setHover]=useState(false);

  return (
    <div style={ProductCard_Parent}>
      <div>
        {/* <img src={isHover?productdata.ProductImage:productdata.ProductImage} style={Image} alt="Product" /> */}
         <img src={productdata.ProductImage} style={Image} alt="Product" />
      </div>
      <div style={description}>
        <div>Rs: {productdata.ProductPrice} /- </div>
        <div> {productdata.ProductTitle}</div>
      </div>
      <div style={button_style}>
        <button>Buy Now</button>
        <button>Add to Card</button>
      </div>
    </div>
  );
};

const ProductCard_Parent: React.CSSProperties = {
  width: "400px",
  height: "400px",
  margin: "10px",
};
const Image: React.CSSProperties = {
  width: "300px",
  height:"280px",
  border: "0.1px solid grey",
  borderRadius:"6px"
}
const description: React.CSSProperties = {
  padding:"4px",
  display:"flex",
  justifyContent:"space-evenly",
  alignItems:"center"
}
const button_style: React.CSSProperties = {
  padding:"4px",
  display:"flex",
  justifyContent:"space-evenly",
  alignItems:"center"
}
export default ProductCard;
