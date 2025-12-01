import React from "react";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex space-x-4">
          <ul className="flex space-x-4">
            <li className="hover:text-gray-300">
              <a href="#" className="text-lg font-semibold">
                Home
              </a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#" className="text-lg font-semibold">
                Products
              </a>
            </li>
          </ul>
        </nav>
        <AddToCart />
      </div>
    </header>
  );
};

export default Header;
