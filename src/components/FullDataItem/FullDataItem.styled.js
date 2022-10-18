import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  overflow: auto;
`;

const Modal = styled.div`
  width: 600px;
  position: relative;
  margin: 10% auto;
  padding: 40px 30px;
  background: #fff;
  border-radius: 10px;
`;

export { Modal, Backdrop };
