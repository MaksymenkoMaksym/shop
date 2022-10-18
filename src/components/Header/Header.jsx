import Order from 'components/Order/Order';
import React from 'react';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';

const Summa = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 20px;
`;
const showOrders = (orders, onRemove) => {
  let summa = 0;
  return (
    <>
      {orders.map(el => {
        summa += Number.parseFloat(el.price);
        return <Order key={el.id} item={el} onRemove={onRemove} />;
      })}
      <Summa className="summa">Total: {summa.toFixed(2)}$</Summa>
    </>
  );
};
const showNothing = () => {
  return (
    <div className="empty">
      <h2>Basket is empty</h2>
    </div>
  );
};
export default function Header({ orders, onRemove }) {
  let [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaShoppingCart
          className={`shop-cart-btn ${isCartOpen && 'active'}`}
          onClick={() => {
            setIsCartOpen(isCartOpen => !isCartOpen);
          }}
        />
        {isCartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders, onRemove) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
