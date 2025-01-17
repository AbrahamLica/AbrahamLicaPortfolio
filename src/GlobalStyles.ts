import styled from 'styled-components';

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
  font-size: 1.2rem;
  line-height: 2rem;
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
