import styled from "styled-components";

interface BodyProps {
  mt: number;
}

export const Container = styled.div<BodyProps>`
  margin-top: ${(props) => props.mt}px;
`;

export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const TechnologieImage = styled.img`
  max-width: 3rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
