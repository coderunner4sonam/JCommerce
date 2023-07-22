import React from "react";
import ProductCard from "../component/ProductCard";
import earings from "../assets/earings.jpeg";
import earingone from "../assets/earingone.jpeg";
import earingtwo from "../assets/earingtwo.jpeg";

export interface ProductType {
  ProductImage: string;
  ProductTitle: string;
  ProductDescription: string;
  ProductPrice: number;
}

const Product: ProductType[] = [
  {
    ProductImage: earings,
    // ProductImageone: earingone, 
    ProductTitle: "STUD EARRINGS",
    ProductDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ProductPrice: 7000,
  },
  {
    ProductImage: earings,
    ProductTitle: "STUD EARRINGS",
    ProductDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    ProductPrice: 7000,
  },
];
  
const MainBody: React.FC<{}> = () => {
  return (
    <div style={MainBody_Parent}>
      {Product.map((ele, ind) => (
        <ProductCard
          key={ind} // Don't forget to add a unique key for each mapped element
          productdata={ele}
        />
      ))}
    </div>
  );
};

const MainBody_Parent: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
};

export default MainBody;



