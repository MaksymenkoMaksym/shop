import React from 'react';
import { ItemDiv, ItemAdd, ItemP, ItemB, ItemH2, ItemImg } from './Item.styled';

export default function Item({ item, onAdd, showModal }) {
  return (
    <ItemDiv>
      <ItemImg
        src={process.env.PUBLIC_URL + '/img' + item.img}
        alt={item.title}
        onClick={() => showModal(item)}
      />
      <ItemH2> {item.title}</ItemH2>
      <ItemP> {item.desc}</ItemP>
      <ItemB> {item.price}$</ItemB>
      <ItemAdd onClick={() => onAdd(item)}>+</ItemAdd>
    </ItemDiv>
  );
}
