import styled from 'styled-components';

const ItemDiv = styled.div`
  position: relative;
  width: 30%;
  margin-bottom: 50px;
  background: #f5f5f5;
  overflow: hidden;
  padding-bottom: 20px;
`;
const ItemImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ItemH2 = styled.h2`
  margin: 10px 20px;
  color: #333;
`;
const ItemB = styled.b`
  margin: 10px 20px;
  color: #333;
  color: #5fa36a;
  font-weight: 700;
`;
const ItemP = styled.p`
  margin: 10px 20px;
  color: #333;
`;

const ItemAdd = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #ca5252;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.5) translateY(-5px);
  }
`;

export { ItemDiv, ItemAdd, ItemP, ItemB, ItemH2, ItemImg };
