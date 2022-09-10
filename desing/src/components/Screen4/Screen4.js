import React from "react";
import Header from "../Layout/Header";
import Footer from "../Footer/Footer";
import image1 from "../../assets/Screen4/first_img.svg";
import image2 from "../../assets/Screen4/image_four.svg"
import "./Screen4.scss";
const Screen4 = () => {
  return (
    <>
      <div className="container__main">
        <Header />
        <div className="content__main">
          <div className="content__first">
            <h2>Fanfury’s $FURY Kits</h2>
            <p>Sale period 2022-07-28 08:00 UTC ~ 2022-10-27 00:00 UTC</p>
          </div>
          <img src={image1} alt="" srcset="" />
        </div>
        <div className="container__box">
        <h3> <span>Basic</span>  $FURY Kit</h3>
        <div className="content__box">
        <img src={image2} alt="" srcset="" />
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Screen4;
