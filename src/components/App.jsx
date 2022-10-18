import React from 'react';
import { useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Items from './Iems/Items';
import itemsHome from 'data/data';
import Categories from './Categories/Categories';
import FullDataItem from './FullDataItem/FullDataItem';
export const App = () => {
  const [items] = useState(itemsHome);
  const [orders, setOrders] = useState([]);
  const [selectedItems, setSelectedItems] = useState(items);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [ModalData, setModalData] = useState(null);

  const onAdd = item => {
    let isInArray = orders.some(el => el.id === item.id);

    if (!isInArray) {
      setOrders(prevOrders => [...prevOrders, item]);
    }
  };
  const onRemove = item => {
    setOrders(prevOrders => prevOrders.filter(el => el.id !== item.id));
  };
  const chooseCategory = category => {
    if (category === 'all') {
      return setSelectedItems(items);
    }
    const selected = items.filter(el => el.category === category);
    setSelectedItems(selected);
  };

  const showModal = item => {
    setModalData(item);
    setIsModalOpen(prevState => !prevState);
  };
  return (
    <div className="wrapper">
      <Header orders={orders} onRemove={onRemove} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={selectedItems} onAdd={onAdd} showModal={showModal} />
      {isModalOpen && (
        <FullDataItem
          ModalData={ModalData}
          onAdd={onAdd}
          showModal={showModal}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
