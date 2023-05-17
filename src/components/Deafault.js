import React, { Fragment } from "react";
import Sidebar from "./Sidebar/Sidebar";

const Default = (props) => {
  return (
    <Fragment>
      <Sidebar />
      <div className="sidebar-content">
        {props.children}
      </div>
    </Fragment>
  );
};

export default Default;