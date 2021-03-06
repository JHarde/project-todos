import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ffff;
  color: #266150;

  height: 100px;
  flex-direction: column;
`;

const HeaderText = styled.h1`
font-size 25px;
text-transform: uppercase;
margin-bottom: 5px;
`;

const TodoCount = styled.h2`
font-size 22px;
`;

export const Header = () => {
  const items = useSelector((state) => state.todos.items);

  return (
    <>
      <HeaderContent>
        <HeaderText>Todo List 📝</HeaderText>
        <TodoCount>Tasks: {items.length}</TodoCount>
      </HeaderContent>

      {/* <div>{`${todosCount} left`}</div> */}
    </>
  );
};
