import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProductDetails = () => {
  const { category, id } = useParams();
  const { products } = useAppContext();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-2xl font-medium text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <div className="mt-16 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full max-w-md rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            {product.name}
          </h1>

          <div className="flex items-center gap-2">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  viewBox="0 0 18 17"
                  fill={product.rating > i ? "#615fff" : "none"}
                  stroke={product.rating > i ? "none" : "#615fff"}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z" />
                </svg>
              ))}
            <span className="text-gray-600">({product.rating})</span>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <p className="text-4xl font-bold text-indigo-500">
              ${product.offerPrice}
            </p>
            <p className="text-2xl text-gray-400 line-through">
              ${product.price}
            </p>
          </div>

          <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
