import { Fragment } from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { Card } from "../card";
import { Footer } from "../footer";
import { Hr } from "../hr";
import { Paragraph } from "../paragraph";
import { Title } from "../title";
import { Container, ContainerImages, TechnologieImage } from "./body.styles";

export const Body = () => {
  return (
    <Fragment>
      <Container className="container" mt={100}>
        <Title mb={20} id="hello">
          Olá
        </Title>
        <Paragraph mb={30} mt={0}>
          Sou um jovem do interior de Rondônia. Atualmente estou terminando a
          faculdade de engenharia de software e também estou trabalhando como
          freelancer. Estou procurando novas formas de interagir com outros
          programadores, pois ultimamente com a pandemia acabei me isolando
          muito, a vantagem é que me tornei um Dev pleno, a desvantagem é a
          ansiedade de trabalhar sozinho.
        </Paragraph>
      </Container>
      <Hr height={2} m={100} />
      <Container className="container" mt={0}>
        <Title mb={20} mt={0} id="resume">
          Resume
        </Title>
        <Paragraph mb={30} mt={0}>
          De forma resumida sou um Dev Pleno e programo principalmente para a
          web no frontend com React, mas também tenho alguns anos de
          desenvolvimento mobile em React Native. Também já tenho alguns anos de
          back em Node, Sempre que possível opto por trabalhar com Typescript
          por ter mais legibilidade no código. Documentação de uma aplicação é
          praticamente obrigatório.
          <br />
          <br />
          Houveram vários projetos que trabalhei nesse tempo, mas a maioria
          possuíam contrato de confidencialidade ou eram de uso interno para
          empresas, devido a isso não possuo muitos projetos de portfólio.
        </Paragraph>
      </Container>
      <Hr height={2} m={100} />
      <Container className="container" mt={0}>
        <Timeline lineColor="#bfddf3">
          <TimelineEvent
            title="Técnico em informática"
            icon="📚"
            createdAt="2016"
            iconColor="#0cee57"
          >
            Técnico em informática pelo Instituto Federal de Educação, Ciência e
            Tecnologia de Rondônia - IFRO.
          </TimelineEvent>

          <TimelineEvent
            title="Estágio em redes de computadores"
            icon="📡"
            createdAt="2017"
            iconColor="#1783c6"
          >
            Estágio em redes de computadores na empresa Faar Turbo Net.
          </TimelineEvent>
          <TimelineEvent
            title="Engenharia de software"
            createdAt="2018"
            icon="💻"
            iconColor="#06098d"
          >
            Início do curso de Engenharia de software na Universidade
            &quot;Centro Universitário de Maringá&quot;.
          </TimelineEvent>
          <TimelineEvent
            title="Desenvolvedor de software"
            createdAt="2020"
            icon="👨‍💻"
            iconColor="#cbd209"
          >
            Início da carreira como desenvolvedor de software na empresa
            Logicamente Info.
          </TimelineEvent>
          <TimelineEvent
            title="Desenvolvedor de Full Stack freelancer"
            createdAt="2021"
            icon="👨"
            iconColor="#bfddf3"
          >
            Início da carreira como desenvolvedor de Full Stack freelancer até
            atualmente.
          </TimelineEvent>
        </Timeline>
      </Container>
      <Container className="container" mt={100}>
        <Title mb={20} mt={0} id="skills">
          Skills Front-end
        </Title>
        <ContainerImages>
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            title="React"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML5"
            title="HTML5"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS3"
            title="CSS3"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            title="JavaScript"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="NextJS"
            title="NextJS"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            alt="Bootstrap"
            title="Bootstrap"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
            alt="Markdown"
            title="Markdown"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            title="TypeScript"
          />
        </ContainerImages>
        <Title mb={20} mt={40}>
          Skills Back-end
        </Title>
        <ContainerImages>
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="NodeJS"
            title="NodeJS"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express"
            title="Express"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
            alt="NestJS"
            title="NestJS"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
            title="Docker"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            title="MongoDB"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="MySQL"
            title="MySQL"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
            alt="Socket.io"
            title="Socket.io"
          />
        </ContainerImages>
        <Title mb={20} mt={40}>
          Outras skills
        </Title>
        <ContainerImages>
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
            title="Git"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            title="GitHub"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
            title="Figma"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
            alt="Heroku"
            title="Heroku"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="NPM"
            title="NPM"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
            alt="Yarn"
            title="Yarn"
          />
          <TechnologieImage
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="VSCode"
            title="VSCode"
          />
        </ContainerImages>
      </Container>
      <Container className="container" mt={100}>
        <Title mb={20} mt={0} id="portfolio">
          Portfolio
        </Title>
        <Card
          title="Social Network"
          image="https://github.com/car1nhanha/social/raw/main/doc/print.png"
          link="https://social-swart.vercel.app/"
          repo=""
        >
          &quot;Site&quot; simples para demostração de código e conhecimento em
          UI. Não tem como foco a responsividade já que essa é uma demostração.
          Futuramente ele ficará responsivo.
        </Card>
        <Card
          title="Por do sol"
          image="https://github.com/car1nhanha/sunset/raw/main/doc/screenshot.png"
          link="https://play.google.com/store/apps/details?id=com.carinhanha.sunset&pli=1"
          repo="https://github.com/car1nhanha/sunset"
        >
          Aplicativo android simples para ser usado nas meditações do por do
          sol. Por se tratar de uma aplicação simples não havia necessidade de
          utilização de typescript.
        </Card>

        <Card
          title="Especialidades"
          image="https://github.com/car1nhanha/especialidades-backend/raw/main/doc/endpoints.jpg"
          link="https://github.com/car1nhanha/especialidades-backend"
          repo="https://github.com/car1nhanha/especialidades-backend"
        >
          Aplicação para cadastro de especialidades para o clube de
          desbravadores. Inicialmente é apenas um backend, mas futuramente terá
          integrações com um front e uma aplicação mobile. A ideia é tornar esta
          aplicaçao um produto comercial.
          <br />
          Esta aplicação foi feita em jest com typescript e integração com o
          mongodb.
        </Card>
      </Container>
      <Hr height={2} m={50} />
      <Container className="container" mt={0}>
        <Footer />
      </Container>
    </Fragment>
  );
};
