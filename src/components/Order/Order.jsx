import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

const Delete = styled(BsFillTrashFill)`
  position: absolute;
  top: 5px;
  right: 10px;
  color: red;
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.5);
  }
`;
export default function Order({ item, onRemove }) {
  return (
    <div className="item">
      <img src={process.env.PUBLIC_URL + '/img' + item.img} alt={item.title} />
      <h2> {item.title}</h2>
      <b>{item.price}$</b>
      <div className="remove-from-cart" onClick={() => onRemove(item)}>
        <Delete />
      </div>
    </div>
  );
}
