import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="flex max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop"
            alt="Product Image"
          />
        </div>
        <div className="w-1/2 p-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Wireless Headphones
          </h1>
          <p className="mt-2 text-xl font-semibold text-gray-700">$129.99</p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            voluptatibus incidunt impedit corrupti sunt minima sed tenetur,
            commodi, accusantium praesentium minus provident maxime magnam fugit
            laboriosam consequuntur. Voluptas, eaque ipsum.
          </p>
          <div className="mt-6">
            <button
              onClick={() => dispatch(addItem())}
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeItem())}
              className="w-full px-4 py-2 font-bold mt-2 text-white bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
