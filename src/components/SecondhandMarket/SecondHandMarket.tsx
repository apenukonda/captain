'use client';
import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

type SecondHandMarketProps = {
  purchasedProducts: Product[];
  setPurchasedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  secondHandMarket: Product[];
  setSecondHandMarket: React.Dispatch<React.SetStateAction<Product[]>>;
};

const SecondHandMarket: React.FC<SecondHandMarketProps> = ({
  purchasedProducts,
  setPurchasedProducts,
  secondHandMarket,
  setSecondHandMarket,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [resellPrice, setResellPrice] = useState<number | ''>('');

  // Handle Reselling
  const handleResell = () => {
    if (selectedProduct && resellPrice && resellPrice > 0) {
      setSecondHandMarket((prevMarket) => [...prevMarket, { ...selectedProduct, price: resellPrice }]);
      setPurchasedProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      setSelectedProduct(null);
      setResellPrice('');
      alert(`${selectedProduct.name} added to the Second-Hand Market!`);
    } else {
      alert('Please select a product and set a valid price.');
    }
  };

  return (
    <div>
      <h2>Second-Hand Market</h2>
      <div>
        <h3>Resell Your Products</h3>
        <div>
          {purchasedProducts.length > 0 ? (
            purchasedProducts.map((product) => (
              <div key={product.id} style={{ margin: '10px', border: '1px solid green', padding: '10px' }}>
                <h3>{product.name}</h3>
                <p>Price: {product.price} credits</p>
                <button onClick={() => setSelectedProduct(product)}>Select to Resell</button>
              </div>
            ))
          ) : (
            <p>No products purchased yet.</p>
          )}
        </div>

        {selectedProduct && (
          <div style={{ marginTop: '20px' }}>
            <h3>Set a Resell Price for {selectedProduct.name}</h3>
            <input
              type="number"
              value={resellPrice}
              onChange={(e) => setResellPrice(Number(e.target.value))}
              placeholder="Set Resell Price"
            />
            <button onClick={handleResell}>Confirm Resell</button>
          </div>
        )}
      </div>

      <h3>Products in the Second-Hand Market</h3>
      <div>
        {secondHandMarket.length > 0 ? (
          secondHandMarket.map((product) => (
            <div key={product.id} style={{ margin: '10px', border: '1px solid blue', padding: '10px' }}>
              <h3>{product.name}</h3>
              <p>Price: {product.price} credits</p>
            </div>
          ))
        ) : (
          <p>No products in the second-hand market yet.</p>
        )}
      </div>
    </div>
  );
};

export default SecondHandMarket;
