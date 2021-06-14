import React from "react";
import "./Twitter.css";

function Twitter(props) {
  const { src } = props;

  return (
    <div className="twitter">
      <img className="vector-6" src={src} />
    </div>
  );
}

export default Twitter;
