import React, { useState } from "react";
import "./Screen4.scss";
import "../Modal/Modal.scss";
import Header from "../Layout/Header";
import Footer from "../Footer/Footer";
import image1 from "../../assets/Screen4/first_img.svg";
import image3 from "../../assets/Screen3/box1_container2.svg";
import image4 from "../../assets/Screen3/box2_container2.svg";
import image5 from "../../assets/Screen3/image__forth.svg";
import image2 from "../../assets/Screen4/image_four.svg";
// import Modal from "../Modal/Modal";
const Screen4 = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
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
          <h3>
            {" "}
            <span>Basic</span> &nbsp; $FURY Kit
          </h3>
          <div className="content__box">
            <img src={image2} alt="" srcset="" />
            <div className="content__a">
              <h5>Basic $FURY Kit </h5>
              <p>$100</p>
              <button>Claim Now</button>
            </div>
            <p>
              Claim the Basic Kit and avail the Membership Bonus. Please click
              the “question mark” icon for details on the exclusive bonus
              available on this package.
            </p>
            <div className="elipse">
              <button onClick={toggleModal} className="btn-modal">
                ?
              </button>
            </div>

            {modal && (
              <div className="moodal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h4>
                    <span style={{ fontSize: "31px" }}>Basic</span>&nbsp; $FURY
                    Kit
                  </h4>
                  <p>
                    Get 2x $FURY as part of the Membership Bonus. Claim 500
                    $FURY tokens at just $200!
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <p
                    style={{
                      color: " #EBF243",
                      fontFamily: "Sora",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "135%",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    Bonus deals included in this package:
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      marginTop: "-4px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <ul>
                    <li>Membership Bonus</li>
                    <li>Early-Bird Bonus</li>
                  </ul>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "50%",
                      width: "33px",
                      backgroundColor: "white",
                    }}
                    className="close-modal"
                    onClick={toggleModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container__box">
          <h3>
            {" "}
            <span>Pro</span>&nbsp; $FURY Kit
          </h3>
          <div className="content__box">
            <img src={image4} alt="" srcset="" />
            <div className="content__a">
              <h5>Pro $FURY Kit </h5>
              <p>$500</p>
              <button>Claim Now</button>
            </div>
            <p>
              Claim the Pro Kit at 5% discount. Please click the “question mark”
              icon for details on the exclusive bonus available on this package
            </p>
            <div className="elipse">
              <button onClick={toggleModal} className="btn-modal">
                ?
              </button>
            </div>
            {modal && (
              <div className="moodal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h4>
                    <span style={{ fontSize: "31px" }}>Basic</span>&nbsp; $FURY
                    Kit
                  </h4>
                  <p>
                    Get 2x $FURY as part of the Membership Bonus. Claim 500
                    $FURY tokens at just $200!
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <p
                    style={{
                      color: " #EBF243",
                      fontFamily: "Sora",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "135%",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    Bonus deals included in this package:
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      marginTop: "-4px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <ul>
                    <li>Membership Bonus</li>
                    <li>Early-Bird Bonus</li>
                  </ul>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "50%",
                      width: "33px",
                      backgroundColor: "white",
                    }}
                    className="close-modal"
                    onClick={toggleModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container__box">
          <h3>
            {" "}
            <span>Elite</span>&nbsp; $FURY Kit
          </h3>
          <div className="content__box">
            <img src={image3} alt="" srcset="" />
            <div className="content__a">
              <h5>Elite $FURY Kit </h5>
              <p>$1000</p>
              <button>Claim Now</button>
            </div>
            <p>
              Claim the Elite Kit at 10% discount. Please click the “question
              mark” icon for details on the exclusive bonus available on this
              package.{" "}
            </p>
            <div className="elipse">
              <button onClick={toggleModal} className="btn-modal">
                ?
              </button>
            </div>
            {modal && (
              <div className="moodal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h4>
                    <span style={{ fontSize: "31px" }}>Basic</span>&nbsp; $FURY
                    Kit
                  </h4>
                  <p>
                    Get 2x $FURY as part of the Membership Bonus. Claim 500
                    $FURY tokens at just $200!
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <p
                    style={{
                      color: " #EBF243",
                      fontFamily: "Sora",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "135%",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    Bonus deals included in this package:
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      marginTop: "-4px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <ul>
                    <li>Membership Bonus</li>
                    <li>Early-Bird Bonus</li>
                  </ul>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "50%",
                      width: "33px",
                      backgroundColor: "white",
                    }}
                    className="close-modal"
                    onClick={toggleModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container__box">
          <h3 style={{ margin: "0 47rem 23px 0" }}>
            {" "}
            <span>Legendary </span> &nbsp; $FURY Kit
          </h3>
          <div className="content__box" style={{ marginBottom: "24rem" }}>
            <img src={image5} alt="" srcset="" />
            <div className="content__a">
              <h5>Legendary $FURY Kit </h5>
              <p>$2500</p>
              <button>Claim Now</button>
            </div>
            <p>
              Claim the Legendary Kit at 12% discount. Please click the
              “question mark” icon for details on the exclusive bonus available
              on this package.{" "}
            </p>
            <div className="elipse">
              <button onClick={toggleModal} className="btn-modal">
                ?
              </button>
            </div>
            {modal && (
              <div className="moodal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h4>
                    <span style={{ fontSize: "31px" }}>Basic</span>&nbsp; $FURY
                    Kit
                  </h4>
                  <p>
                    Get 2x $FURY as part of the Membership Bonus. Claim 500
                    $FURY tokens at just $200!
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <p
                    style={{
                      color: " #EBF243",
                      fontFamily: "Sora",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "18px",
                      lineHeight: "135%",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    Bonus deals included in this package:
                  </p>
                  <hr
                    style={{
                      width: "404px",
                      marginTop: "-4px",
                      height: "0px",
                      border: "1px solid #EBF243",
                    }}
                  />
                  <ul>
                    <li>Membership Bonus</li>
                    <li>Early-Bird Bonus</li>
                  </ul>
                  <button
                    style={{
                      border: "none",
                      borderRadius: "50%",
                      width: "33px",
                      backgroundColor: "white",
                    }}
                    className="close-modal"
                    onClick={toggleModal}
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Screen4;
