import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
`;

export const Unit = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  border-right: 1px solid gray;
`;

export const Country = styled.div`
  display: flex;
  position: relative;
  flex: 1.5;
  width: 100%;
  padding: 1rem;
  justify-content: right;
`;