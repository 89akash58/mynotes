import React from "react";
import grpImage from "../images/GroupPhoto.png";
import lock from "../images/Vector.png";
import "../styles/RightSide.css";
const RightBanner = () => {
  return (
    <div className="rightSide">
      <img className="grpImage" src={grpImage} alt="anImage" />
      <h1 className="p1">Pocket Notes</h1>
      <p className="p2">
        Send and receive messages without keeping your phone online.{" "}
      </p>
      <p className="p4">
        Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <div className="newDiv">
        <img className="lockImage" src={lock} alt="image" />
        <p className="p3">end-to-end encrypted</p>
      </div>
    </div>
  );
};
export default RightBanner;
