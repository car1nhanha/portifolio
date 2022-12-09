import { Line } from "../header/header.styles";
import {
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  ContainerImage,
  Link,
  Repo,
  RepoImage,
} from "./card.styles";

interface CardProps {
  children: React.ReactNode;
  title: string;
  image: string;
  link: string;
  repo: string;
}

export const Card = ({ children, image, title, link, repo }: CardProps) => {
  return (
    <CardContainer>
      <Line className="row">
        <div className="col col-md-4 col-12">
          <ContainerImage>
            <CardImage src={image} alt={title} />
          </ContainerImage>
        </div>
        <CardDescription className="col col-md-8 col-12">
          <CardTitle>{title}</CardTitle>
          {children}
          <Link href={link} target="_blank">
            Ver mais
          </Link>

          <Repo href={repo} target="_blank">
            <RepoImage
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="Github"
            />
          </Repo>
        </CardDescription>
      </Line>
    </CardContainer>
  );
};
