import React from "react";
import pic2 from "../../assets/images/Screen5.png";
import Header from "../Layout/Header";
import "./PayIntPanel.scss";

const PayIntPanel = () => {
  return (
    <>
      <div style={{ position: "absolute", left: 0, top: 0, width: "100%" }}>
        <Header />
      </div>
      <img src={pic2} className="backgroundImg"></img>
    </>
  );
};

export default PayIntPanel;
