import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
    const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Seller</p>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {products && products.length > 0 ? (
          products
            .slice(0, 6)
            .map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default BestSeller
