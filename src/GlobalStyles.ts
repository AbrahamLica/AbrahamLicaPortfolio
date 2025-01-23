import styled, { keyframes } from 'styled-components';

export type ContainerProps = {
  color?: string;
  id?: any;
  width?: string;
  heigth?: string;
  backgroundColor?: string;
  displayFlex?: boolean;
  flex?: string;
  flexWrap?: boolean;
  alignItems?: string;
  margin?: string;
  padding?: string;
  column?: boolean;
  border?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  justifyContent?: string;
  top?: string;
  objectPosition?: string;
  fontSize?: string;
};

export type InputProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  width?: string;
  backgroundColor?: string;
  margin?: string;
};

export type TextProps = {
  color?: string;
  bold?: boolean;
  fontSize?: string;
  textAlign?: string;
  margin?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  cursorPointer?: boolean;
  zIndex?: boolean;
  lineHeight?: string;
};

export type ImgProps = {
  characterWidth?: boolean;
  comicsWidth?: boolean;
};

export type ItemNameProps = {
  characterWidth?: boolean;
  comicsWidth?: boolean;
  characterHeight?: boolean;
  comicsHeight?: boolean;
};

export type ImgDetailsProps = {
  ImgDetailsCharactersWidth?: boolean;
  ImgDetailsCharactersHeight?: boolean;

  ImgDetailsComicsWidth?: boolean;
  ImgDetailsComicsHeight?: boolean;

  ImgDetailsCreatorsWidth?: boolean;
  ImgDetailsCreatorsHeight?: boolean;

  ImgDetailsEventssWidth?: boolean;
  ImgDetailsEventssHeight?: boolean;

  ImgDetailsSeriesWidth?: boolean;
  ImgDetailsSeriesHeight?: boolean;

  ImgDetailsStoriesWidth?: boolean;
  ImgDetailsStoriesHeight?: boolean;
};

export type MainContainerDetailsProps = {
  background: any;
};

export const Container = styled.div<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.backgroundColor};
  /* display: ${(props) => (props.displayFlex ? 'flex' : 'block')}; */
  /* flex: ${(props) => props.flex}; */
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => props.flexWrap && 'wrap'};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
  background-size: ${(props) => props.backgroundSize};
  cursor: ${(props) => (props.cursorPointer ? 'pointer' : null)};
  overflow: hidden;
`;

export const Text = styled.p<TextProps>`
  color: black;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1.5rem;
  line-height: ${(props) => props.lineHeight || '2rem'};
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Span = styled.span<TextProps>`
  font-weight: bold;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
`;

export const Title = styled.p<TextProps>`
  color: black;
  font-family: 'Playfair Display';
  letter-spacing: 5px;
  font-size: 2.5rem;
  font-weight: 600;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1270px) {
    text-align: center;
  }
`;

export const TitleSecondary = styled.p<TextProps>`
  color: black;
  font-family: 'Playfair Display';
  letter-spacing: 4px;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Link = styled.a<TextProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? 'bold' : 'light')};
  font-size: ${(props) => props.fontSize};
  text-align: ${(props) => props.textAlign};
  cursor: pointer;
  text-decoration: underline;
  margin: ${(props) => props.margin};
`;

export const Img = styled.img<ContainerProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.backgroundColor};
  display: ${(props) => (props.displayFlex ? 'flex' : 'block')};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => props.flexWrap && 'wrap'};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => (props.cursorPointer ? 'pointer' : null)};
  overflow: hidden;
  object-fit: cover;
  object-position: ${(props) => props.objectPosition};
`;

const brutalistShake = keyframes`
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-2px) translateY(-2px) rotate(-1deg);
  }
  75% {
    transform: translateX(2px) translateY(2px) rotate(1deg);
  }
`;

export const Button = styled.button<ContainerProps>`
  --button_radius: 0.75em;
  --button_color: rgb(240, 239, 239);
  --button_outline_color: #000000;
  --hover_offset: 4px;
  --active_offset: 2px;
  --shadow_color: rgba(0, 0, 0, 0.5);

  font-size: ${(props) => props.fontSize || '1.1rem'};
  font-weight: bold;
  border: none;
  width: ${(props) => props.width || 'auto'};
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  position: relative;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  margin: ${(props) => props.margin};

  &:hover {
    box-shadow: var(--hover_offset) var(--hover_offset) 0 var(--shadow_color);
    transform: translate(calc(-1 * var(--hover_offset)), calc(-1 * var(--hover_offset)));
    animation: ${brutalistShake} 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  &:active {
    box-shadow: var(--active_offset) var(--active_offset) 0 var(--shadow_color);
    transform: translate(calc(-1 * var(--active_offset)), calc(-1 * var(--active_offset)));
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--button_outline_color), inset 0 0 0 2px var(--button_color);
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 3px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1em;
    background: var(--button_color);
    color: var(--button_outline_color);
    text-decoration: none;
    transform: translateY(-0.2em);
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .button_top {
    transform: translateY(-0.33em);
  }

  &:active .button_top {
    transform: translateY(0);
  }
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
