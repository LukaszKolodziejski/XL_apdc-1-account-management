import React, { Fragment } from "react";
import "./Layout.css";
const Layout = (props) => {
  return (
    <Fragment>
      <main className="Layout">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
