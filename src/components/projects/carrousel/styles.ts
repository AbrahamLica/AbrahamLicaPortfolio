import styled, { css } from "styled-components";

export const Carousel = styled.div`
  position: relative;
  width: 100%; 
  height: 400px; 
  overflow: hidden;
  border-radius: 15px;
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  /* width: 100%; */
`;

export const Img = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const ButtonPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const ButtonNext = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;
