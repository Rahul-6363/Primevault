import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;

    if (sortBy === "") {
      // Remove the param if default is selected
      searchParams.delete("sortBy");
    } else {
      searchParams.set("sortBy", sortBy);
    }

    setSearchParams(searchParams);
  };

  // ✅ Safely get the value or fallback to empty string
  const sortValue = searchParams.get("sortBy") || "";

  return (
    <div className='mb-4 flex items-center justify-end'>
      <select
        id='sort'
        onChange={handleSortChange}
        value={sortValue}
        className='border p-2 rounded-md focus:outline-none'
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
