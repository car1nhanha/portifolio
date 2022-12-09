import { Fragment, useState } from "react";
import {
  ContainerList,
  Link,
  List,
  ListItem,
  NavbarContainer,
} from "./navbar.styles";

const options = [
  {
    name: "Hello",
  },
  {
    name: "Resume",
  },
  {
    name: "skills",
  },
  {
    name: "Portfolio",
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <Fragment>
      <NavbarContainer className={isScrolled ? "color" : ""}>
        <ContainerList className="container">
          <List>
            {options.map((option, index) => (
              <ListItem key={index}>
                <Link href={`#${option.name.toLowerCase()}`}>
                  {option.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </ContainerList>
      </NavbarContainer>
    </Fragment>
  );
};
