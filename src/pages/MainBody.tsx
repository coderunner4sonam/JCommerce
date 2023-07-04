import React from "react";
import ProductCard from "../component/ProductCard";

const Product = [
    {
        
    },

];

function MainBody() {
  return (
    <div style={MainBody_Parent}>
      {[...Array(30)].map((ele, ind) => (
        <ProductCard />
      ))}
    </div>
  );
}

const MainBody_Parent: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
};

export default MainBody;
