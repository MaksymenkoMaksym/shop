import React from 'react';
import styled from 'styled-components';

const CategoriesUl = styled.ul`
  list-style: none;
`;
const CategoryLi = styled.li`
  display: inline-block;
  text-transform: capitalize;
  background: #f2f2f2;
  border-radius: 50px;
  padding: 10px 20px;
  margin-bottom: 25px;
  margin-right: 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 500ms ease;
  &:hover {
    border-color: silver;
    transform: scale(1.05);
  }
`;
const categories = ['all', 'chandelier', 'light', 'table', 'chairs'];
const Categories = ({ chooseCategory }) => {
  return (
    <CategoriesUl>
      {categories.map(category => (
        <CategoryLi key={category} onClick={() => chooseCategory(category)}>
          {category}
        </CategoryLi>
      ))}
    </CategoriesUl>
  );
};

export default Categories;
