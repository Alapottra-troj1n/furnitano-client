import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  

  return (
    <div className="card w-96 bg-base-100 hover:shadow-xl transition-all cursor-pointer">
      <figure>
        <img
          src={product.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description.slice(0,50)}...</p>
        <div className="card-actions justify-center gap-2">
          <div className="badge badge-outline p-3"> <p>Quantity:<span className="font-medium"> { product.quantity}</span></p> </div>
          <div className="badge badge-outline p-3">  <p>Supplier:<span className="font-medium"> { product.supplier}</span></p> </div>
          <div className="badge p-4 text-md"> <p>Price: <span className="font-medium "> { product.price}$</span></p> </div>
        </div>
        <div className="card-actions justify-center mt-4 ">
          <button className="bg-gray-500 text-white rounded-lg px-7 py-2 hover:bg-gray-700 transition-all"> <Link to={`/product/${product._id}`}>Manage</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
