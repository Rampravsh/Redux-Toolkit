import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelecter = useSelector((state) => state.Products.items);
  const cartSelecter = useSelector((state) => state.cart.items);
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productSelecter.length &&
          productSelecter.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 hover:scale-101 transition-transform duration-200"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                  <p className="text-sm text-gray-500">Rating: {item.rating}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {item.description}
                  </p>
                  {cartSelecter.find((cartItem) => cartItem.id === item.id) ? (
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="bg-red-500 px-6 py-2 m-2 rounded-full  hover:bg-red-600 text-white text-center"
                    >
                      remove
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="bg-green-500 px-6 py-2 m-2 rounded-full  hover:bg-green-600 text-white text-center"
                    >
                      add to cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;
