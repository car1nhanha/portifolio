import styled from "styled-components";

interface ParagraphProps {
  mt?: number;
  mb?: number;
}

export const ContainerParagraph = styled.p<ParagraphProps>`
  margin-top: ${(props) => props.mt || 0}px;
  margin-bottom: ${(props) => props.mb || 0}px;
  text-indent: 0;
`;
