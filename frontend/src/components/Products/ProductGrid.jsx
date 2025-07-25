import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products, loading, error }) => {
  console.log("🔍 products value:", products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const safeProducts = Array.isArray(products) ? products : [];

  if (safeProducts.length === 0) {
    return <p className='text-center'>No products found.</p>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {safeProducts.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className='block'>
          <div className='bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between'>
            <div className='w-full h-[420px] mb-4'>
              {product.images?.[0]?.url ? (
                <img
                  src={product.images[0].url}
                  alt={product.images[0]?.altText || product.name}
                  className='w-full h-full object-cover rounded-lg'
                />
              ) : (
                <div className='w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-500'>
                  No Image
                </div>
              )}
            </div>
            <h3 className='text-base font-medium mb-1 truncate'>{product.name}</h3>
            <p className='text-gray-600 font-semibold text-sm'>₹{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
