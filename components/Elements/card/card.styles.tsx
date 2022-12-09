import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Link = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 20px;
  transition: 0.3s;

  &:hover {
    color: #000;
    ::after {
      content: "_";
    }
  }
`;

export const Repo = styled.a`
  margin-top: 20px;
`;

export const RepoImage = styled.img`
  width: 30px;
  height: 30px;
  opacity: 0.5;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;
