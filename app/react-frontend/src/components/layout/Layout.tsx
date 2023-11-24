import { Fragment, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

export default function Layout(props: PropsWithChildren) {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/home";
  const headerComponent = isHomePage ? <Header /> : null;
  return (
    <Fragment>
      {headerComponent}
      <Main>{props.children}</Main>
    </Fragment>
  );
}