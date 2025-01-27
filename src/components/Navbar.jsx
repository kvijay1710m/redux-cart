import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);  // Reference to the cart dropdown to detect outside clicks

  const toggleCartDropdown = () => {
    setIsCartOpen((prev) => !prev);
  };

  const closeCartDropdown = () => {
    setIsCartOpen(false);
  };

  // Close the cart dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCartDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <div className="text-xl font-bold">
          <a href="#" className="text-gray-800 hover:text-blue-600">
            Redux
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Products
          </a>
        </div>

        {/* Right Side: Cart and Profile */}
        <div className="flex items-center space-x-4">
          {/* Cart Dropdown */}
          <div className="relative" ref={cartRef}>
            <button
              onClick={toggleCartDropdown}
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                0
              </span>
            </button>
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-gray-200 rounded-lg shadow-lg">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">8 Items</span>
                    <button onClick={closeCartDropdown} className="text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="block text-gray-600">Subtotal: $999</span>
                  <Link to="/cart">
                    <button className="btn btn-primary bg-blue-500 text-white btn-block mt-2">
                      View Cart
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300"
              role="button"
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User Avatar"
                className="w-full h-full rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  