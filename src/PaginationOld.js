import React from 'react';

const Pagination = ({ currentpage, itemsperpage, totalitems, onPageChange }) => {
  // calculate the number of pages
  const pages = Math.ceil(totalitems / itemsperpage);

  return (
    <div>
      <button onClick={() => onPageChange(currentpage - 1)} disabled={currentpage === 1}>Previous</button>
      <span>Page {currentpage} of {pages}</span>
      <button onClick={() => onPageChange(currentpage + 1)} disabled={currentpage === pages}>Next</button>
    </div>
  );
};

export default Pagination;