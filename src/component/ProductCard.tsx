
import React from 'react'

const ProductCard: React.FC<{}> = () => {
  return (
    <div style={ProductCard_Parent}>
      <div >Image
        <img src=''  />
      </div>
      <div>Price</div>
      <div>Title</div>
      <div>Buttons</div>
    </div>
  )
}
const ProductCard_Parent:React.CSSProperties={
    width:"400px",
    height:"400px",
    margin:"10px",
    border:"1px solid black",
}
export default ProductCard
