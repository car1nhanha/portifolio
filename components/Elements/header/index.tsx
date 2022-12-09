import {
  BodyContainer,
  DefinitionDescription,
  DefinitionList,
  DefinitionTerm,
  HeaderContainer,
  ImageProfile,
  Line,
  MyDescription,
  MyName,
  ProfileContainer,
  SocialContainer,
  SocialLink,
  TextContainer,
} from "./header.styles";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const Header = () => {
  return (
    <HeaderContainer>
      <BodyContainer className="container">
        <Line className="row">
          <ProfileContainer className="col-8 col-xl-4 col-lg-5 col-md-6 offset-2 offset-sm-0">
            <ImageProfile
              src="https://avatars.githubusercontent.com/u/34972401?v=4"
              alt="profile"
            />
          </ProfileContainer>
          <TextContainer
            className="
          col-12
          col-xl-8
          col-lg-6
          col-md-6
          offset-lg-1
          offset-xl-0
          "
          >
            <MyName>Oi, Eu sou o Lucas</MyName>
            <MyDescription>
              Eng. de Software, apaixonado por desenvolvimento web e mobile.
            </MyDescription>

            <DefinitionList>
              <DefinitionTerm>Idade</DefinitionTerm>
              <DefinitionDescription>
                {formatDistance(new Date(1999, 6, 8), new Date(), {
                  locale: ptBR,
                })}
              </DefinitionDescription>

              <DefinitionTerm>Email</DefinitionTerm>
              <DefinitionDescription>
                <a
                  href="mailto:lucascarinhanha4@gmail.com"
                  title="enviar email"
                >
                  lucascarinhanha4@gmail.com
                </a>
              </DefinitionDescription>
              <DefinitionTerm>residencia</DefinitionTerm>
              <DefinitionDescription>
                <a href="https://goo.gl/maps/JyhaT469crhhVaue6">Ariquemes-Ro</a>
              </DefinitionDescription>
            </DefinitionList>
            <SocialContainer>
              <SocialLink href="https://github.com/car1nhanha">
                <AiFillGithub size={24} />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/lucas-c-988650138/">
                <AiFillLinkedin size={24} />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/lucascarinhanha/">
                <AiFillInstagram size={24} />
              </SocialLink>
            </SocialContainer>
          </TextContainer>
        </Line>
      </BodyContainer>
    </HeaderContainer>
  );
};
