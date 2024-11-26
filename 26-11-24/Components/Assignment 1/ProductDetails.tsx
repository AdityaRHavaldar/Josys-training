import React, { useState } from "react";

const ProductDetails: React.FC = () => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  return (
    <div>
      <h2>Product Form</h2>
      <form>
        <div>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            data-testid="T1"
            id="T1"
          />
        </div>
        <div>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Enter price"
            data-testid="T2"
            id="T2"
          />
        </div>
        <div>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            placeholder="Enter quantity"
            data-testid="T3"
            id="T3"
          />
        </div>
        <div>
          <button
            type="button"
            id="B1"
            onClick={() => setTotalAmount(price * qty)}
          >
            Get Total Amount
          </button>
        </div>
      </form>
      <p data-testid="P1" id="P1">
        Total Amount: ${totalAmount}
      </p>
    </div>
  );
};

export default ProductDetails;
