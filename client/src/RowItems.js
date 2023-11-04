import React from 'react';
import Thumbnail from './Thumbnail';

function RowItems(props) {
  return (
    <div className="row row-items">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
  </div>
  );
}

export default RowItems;