import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-image: url(images/bg.jpg);
  /* paralax */
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Line = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const ImageProfile = styled.img`
  width: 90%;
  margin: 0 5%;
  height: auto;
  position: relative;
  margin-bottom: -40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  filter: grayscale(100%);
  border-radius: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    margin-bottom: 0;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 40px;
  }
`;

export const TextContainer = styled.div`
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const MyName = styled.h1`
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 40px;
  line-height: 50px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
    font-size: 36px;
  }
  @media screen and (max-width: 540px) {
    font-size: 28px;
  }
`;

export const MyDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const DefinitionList = styled.dl`
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
`;

export const DefinitionTerm = styled.dt`
  opacity: 0.8;
  float: left;
  text-transform: uppercase;
  &:after {
    content: ":";
  }
`;

export const DefinitionDescription = styled.dd`
  padding-left: 120px;
`;

// social
export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  display: flex;
  margin-right: 10px;
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
