import React from "react";
import "./buttons.css";
const Button = ({ content, onButtonClick,  type }) => {
   return (
    <div className={`Button ${content=="0"?"zero":""}${type || ""}`} onClick={onButtonClick(content)}>
      {content}
      </div>
);
};
export default Button;