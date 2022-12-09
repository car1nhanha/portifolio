import { TitleElement } from "./title.styles";

interface TitleProps {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
  id?: string;
}

export const Title = ({ children, id, mb, mt }: TitleProps) => {
  return (
    <TitleElement mb={mb} mt={mt} id={id}>
      {children}
    </TitleElement>
  );
};
