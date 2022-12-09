import { FooterContainer } from "./footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Desenvolvido por Lucas Carinhanha &copy; {new Date().getFullYear()}</p>
    </FooterContainer>
  );
};
