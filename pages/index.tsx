import { Fragment } from "react";
import { Body } from "../components/Elements/body";
import { Header } from "../components/Elements/header";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Body />
      <br />
    </Fragment>
  );
}
