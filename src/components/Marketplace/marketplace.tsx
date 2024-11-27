'use client';
import React, { useState } from 'react';
import Link from "next/link";
import SecondHandMarket from '../SecondhandMarket/SecondHandMarket';

const Marketplace = () => {
  const [userCredits, setUserCredits] = useState(1000); // Initial user credits
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 200, image: '/images/Marketplace/skin.jpg' },
    { id: 2, name: 'Product 2', price: 500, image: '/images/Marketplace/skin.jpg' },
    { id: 3, name: 'Product 3', price: 300, image: '/images/Marketplace/skin.jpg' },
    { id: 4, name: 'Product 4', price: 200, image: '/images/Marketplace/skin.jpg' },
    { id: 5, name: 'Product 5', price: 500, image: '/images/Marketplace/skin.jpg' },
    { id: 6, name: 'Product 6', price: 300, image: '/images/Marketplace/skin.jpg' },
  ]); // Sample products

  const [searchQuery, setSearchQuery] = useState(''); // Search query state

  // Handle Buy Logic
  const handleBuy = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      if (userCredits >= product.price) {
        setUserCredits((prevCredits) => prevCredits - product.price); // Deduct credits
        alert(`You bought ${product.name}! Remaining credits: ${userCredits - product.price}`);
        updateMarketplace(productId); // Remove the product from the marketplace
      } else {
        alert('Not enough credits!');
      }
    }
  };

  // Update Marketplace by Removing Product
  const updateMarketplace = (productId: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
  };

  // Filter Products Based on Search Query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100" style={{ backgroundColor: "#110219" }}>
      <div className="max-w-7xl mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
            className="w-full p-2 rounded border border-gray-300 text-black"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">Price: {product.price} credits</p>
                <button
                  onClick={() => handleBuy(product.id)}
                  className="mt-4 text-white px-4 py-2 rounded bg-[#d600e1]"
                >
                  Buy Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-white">No products found.</p>
          )}
        </div>
      </div>
      <Link href="/second-hand-market">
       Second-Hand Market
      </Link>
    </div>
  );
};

export default Marketplace;
