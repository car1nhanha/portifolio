import { HrComponent } from "./hr.styles";

interface HrProps {
  m?: number;
  height?: number;
}

export const Hr = ({ height, m }: HrProps) => {
  return <HrComponent height={height} m={m} />;
};
