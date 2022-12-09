import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  position: fixed;
  transition: 0.3s;
  height: 4rem;
  z-index: 3;

  &.color {
    background-color: #fff;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.14);

    a {
      color: #555;
    }
  }
`;

export const ContainerList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ListItem = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  /* padding-right: 50px; */
  display: inline-block;

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  height: 100%;
  margin-right: 50px;
  transition: 0.3s;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }

  &:hover {
    color: #000;
    opacity: 0.5;

    &::after {
      content: "_";
      position: absolute;
    }
  }
`;
