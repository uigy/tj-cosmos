import React from "react";
import "./Shapes.scss";

const Shapes = () => {
  return (
    <div className="shapes">
      <div>
        <div className="shapes-dot shapes-dot--turquoise"></div>
        <div className="shapes-dot shapes-dot--red"></div>
        <div className="shapes-dot shapes-dot--turquoise"></div>
        <div className="shapes-dot shapes-dot--red"></div>
        <div className="shapes-dot shapes-dot--violet"></div>
      </div>
      <div>
        <div className="shapes-ring"></div>
        <div className="shapes-ring"></div>
        <div className="shapes-ring"></div>
      </div>
    </div>
  );
};

export default Shapes;
