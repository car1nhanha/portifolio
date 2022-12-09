import styled from "styled-components";

interface HrProps {
  m?: number;
  height?: number;
}

export const HrComponent = styled.hr<HrProps>`
  border: 0;
  background-color: #555;
  height: ${(props) => props.height || 1}px;
  margin: ${(props) => props.m || 0}px 0;
  opacity: 0.2;

  @media screen and (max-width: 1024px) {
    height: calc(${(props) => props.height || 1}px * 0.8);
    margin: calc(${(props) => props.m || 0}px * 0.8) 0;
  }
  @media screen and (max-width: 540px) {
    height: calc(${(props) => props.height || 1}px * 0.5);
    margin: calc(${(props) => props.m || 0}px * 0.5) 0;
  }
`;
