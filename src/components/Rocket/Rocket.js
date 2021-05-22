import React, { useRef } from "react";
import "./Rocket.scss";

const Rocket = () => {
  const ilustration = useRef();
  const rocketButton = useRef();

  const handleRocketButtonClick = () => {
    for (const element of ilustration.current.children) {
      const className = element.className;
      element.classList.add(`${className}--animate`);
      rocketButton.current.disabled = true;
      setTimeout(() => {
        element.classList.remove(`${className}--animate`);
        rocketButton.current.disabled = false;
      }, 5000);
    }
  };

  return (
    <div className="rocket">
      <div className="ilustration" ref={ilustration}>
        <div className="ilustration-rocket"></div>
        <div className="ilustration-landing-gear"></div>
        <div className="ilustration-smoke-left"></div>
        <div className="ilustration-smoke-right"></div>
        <div className="ilustration-planet"></div>
      </div>
      <button
        type="button"
        className="button rocket-button"
        onClick={handleRocketButtonClick}
        ref={rocketButton}
      >
        Launch Rocket!
      </button>
    </div>
  );
};

export default Rocket;
