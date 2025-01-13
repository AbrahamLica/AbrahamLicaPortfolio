import styled, { css } from "styled-components";

export const mainContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  padding: 5px;
  min-height: 10vh;
  /* background-color: black; */
  /* border-bottom: 1px solid black; */
`;

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const menu = styled.p`
  font-family: "Parisienne";
  font-size: 3rem;
`;
