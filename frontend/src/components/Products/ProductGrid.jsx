import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className='block'>
          <div className='bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between'>

            {/* ✅ Image wrapper with fixed height */}
            <div className='w-full mb-4'>
              <img
                src={product.images[0]?.url || '/placeholder.png'}
                alt={product.images[0]?.altText || product.name}
                className='w-full h-[400px] object-cover rounded-lg'
              />
            </div>

            {/* ✅ Product info */}
            <div>
              <h3 className='text-base font-medium mb-1 truncate'>{product.name}</h3>
              <p className='text-gray-600 font-semibold text-sm'>₹{product.price}</p>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
