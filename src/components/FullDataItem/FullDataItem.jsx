import {
  ItemAdd,
  ItemP,
  ItemB,
  ItemH2,
  ItemImg,
} from 'components/Item/Item.styled';
import React from 'react';
import { Backdrop, Modal } from './FullDataItem.styled';

const FullDataItem = ({ ModalData: item, onAdd, showModal }) => {
  return (
    <Backdrop>
      <Modal>
        <ItemImg
          src={process.env.PUBLIC_URL + '/img' + item.img}
          alt={item.title}
          onClick={() => showModal(item)}
        />
        <ItemH2> {item.title}</ItemH2>
        <ItemP> {item.desc}</ItemP>
        <ItemB> {item.price}$</ItemB>
        <ItemAdd onClick={() => onAdd(item)}>+</ItemAdd>
      </Modal>
    </Backdrop>
  );
};

export default FullDataItem;
