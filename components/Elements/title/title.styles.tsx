import styled from "styled-components";

interface TitleProps {
  mt?: number;
  mb?: number;
}

export const TitleElement = styled.h1<TitleProps>`
  margin: 0;
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  text-indent: 0;
  font-size: 36px;
  line-height: 42px;

  ::after {
    content: "_";
  }
`;
