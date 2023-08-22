import React from 'react';

function ItemListContainer(props) {
  return (
    <div className="item-list-container">
      <p>{props.greeting}</p>
    </div>
  );
}

export default ItemListContainer;