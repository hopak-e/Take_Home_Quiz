import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: right;
  z-index: 3;
  top: 50px;
  right: 0;
  width: 235px;
  cursor: pointer;
`;

export const UList = styled.ul`
  display: flex;
  width: 100%;
  background-color: white;
  flex-direction: column;
  border: 1px solid gray;
  border-bottom: none;
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: gray;
  }
`;
