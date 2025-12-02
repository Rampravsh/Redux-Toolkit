import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./redux/slice";

const Cartlist = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(cartSelector);
  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    setCartItems(cartTempItems);
  };
  const dispatch = useDispatch();
  useEffect(() => {}, [cartSelector]);

  const removeField = (item) => {
    setCartItems((cartItems) =>
      cartItems.filter((cart) => cart.id !== item.id)
    );
    dispatch(removeItem(item));
  };
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Your Cart Items</h2>
          <h2 className="text-2xl font-bold mb-4">
            items:{cartSelector.length}
          </h2>
        </div>

        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-4"
              >
                <div className="w-20 h-20 mr-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-500">{item.brand}</p>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-4">
                    $
                    {(item.quantity
                      ? item.price * item.quantity
                      : item.price
                    ).toFixed(2)}
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => manageQuantity(item.id, e.target.value)}
                    className="w-16 text-center border border-gray-300 rounded-md py-1 px-2 mr-4"
                  />
                  <button
                    onClick={() => removeField(item)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
          <div className="mt-6 text-right text-xl font-bold">
            Total Price: $
            {cartItems
              .reduce(
                (total, item) =>
                  item.quantity
                    ? total + item.price * item.quantity
                    : total + item.price,
                0
              )
              .toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
