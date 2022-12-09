import { ContainerParagraph } from "./paragraph.styles";

interface ParagraphProps {
  mt?: number;
  mb?: number;
  children: React.ReactNode;
}

export const Paragraph = ({ children, mt, mb }: ParagraphProps) => {
  return (
    <ContainerParagraph mb={mb} mt={mt} className="col col-md-10">
      {children}
    </ContainerParagraph>
  );
};
