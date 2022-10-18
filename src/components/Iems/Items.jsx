import Item from 'components/Item/Item';
import React from 'react';

export default function Items({ items, onAdd, showModal }) {
  return (
    <main>
      {items.map((el, i) => (
        <Item
          key={el.title + i}
          item={el}
          onAdd={onAdd}
          showModal={showModal}
        />
      ))}
    </main>
  );
}

//rfc
