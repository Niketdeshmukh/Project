import React from "react";
import { useState } from "react";
import "./Purchase.scss";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import Text3 from "../../assets/images/text3.png";
import Col1 from "../../assets/images/col1.png";
import Col2 from "../../assets/images/col2.png";
import Col3 from "../../assets/images/col3.png";
import Col4 from "../../assets/images/col4.png";
import Header from "../Layout/Header";
import SvgCircule from "../../icons/SvgCircule";
// import Graphic from "../../Assets/images/graphic.png";

 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Purchase = (props) => {
  const [selectedClient, setSelectedClient] = useState("1");

  const handleSelectChange = (value) => {
    setSelectedClient(value);
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
  
        }
      },
    ]
  };

  return (
    <div className="overAll">
      <Header />
      <div className="container-fluid bg pttr">
        <div className="row graphic">
          <div className="col-lg-10 offset-2 my-5 ">
            <img src={Text3} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row graphic" style={{ margin: "3rem" }}>
          <div
            className="col-lg-10 offset-2"
            style={{
              width: "100%",
              marginLeft: "auto",
              padding: "0px 0px 0px 50px",
            }}
          >
            <div className="row ">
              <div style={{ width: "15%", marginRight: 50 }}></div>
              <div
                className="col-lg-2 col-sm-4 my-2  bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col1} alt="" className="hl" />
                <h1 className="text-white mt-4 acuminfont">
                  <b> BASIC</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$100</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and the values of tokens, i.e
                  200 FURY tokens.
                </p>
              </div>
              <div
                className="col-lg-2 col-sm-4  my-2 bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col2} alt="" className="hlC2 pt-3" />
                <h1 className="text-white mt-5 acuminfont">
                  <b> PRO</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$500</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip- $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and the values of tokens, i.e
                  1000 FURY tokens.
                </p>
              </div>
              <div
                className="col-lg-2 col-sm-4  my-2 bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col3} alt="" className="hl" />
                <h1 className="text-white mt-4 acuminfont">
                  <b> ELITE</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$1000</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and 2x the values of tokens,
                  i.e 2000 FURY tokens.
                </p>
              </div>
              <div
                className="col-lg-2 col-sm-4  my-2 bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col4} alt="" className="hlC mt-4" />
                <h3 className="text-white mt-5 acuminfont">
                  <b> LEGENDERY</b>
                </h3>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$2500</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and 2x the values of tokens,
                  i.e 5000 FURY tokens.
                </p>
              </div>
            </div>
          </div>







          {/* mobile  */}

          <div
            className="col-lg-10 offset-2"
            style={{
              width: "100%",
              marginLeft: "auto",
              padding: "0px 0px 0px 50px",
            }}
          >
           
            <div className="row ">
              <div style={{ width: "15%", marginRight: 50 }}></div>
              <Slider  {...settings}>
              <div
                className="col-lg-2 col-sm-4 my-2  bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col1} alt="" className="hl" />
                <h1 className="text-white mt-4 acuminfont">
                  <b> BASIC</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$100</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and the values of tokens, i.e
                  200 FURY tokens.
                </p>
              </div>

              <div
                className="col-lg-2 col-sm-4  my-2 bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col2} alt="" className="hlC2 pt-3" />
                <h1 className="text-white mt-5 acuminfont">
                  <b> PRO</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$500</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip- $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and the values of tokens, i.e
                  1000 FURY tokens.
                </p>
              </div>

              <div
                className="col-lg-2 col-sm-4  my-2 bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col3} alt="" className="hl" />
                <h1 className="text-white mt-4 acuminfont">
                  <b> ELITE</b>
                </h1>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$1000</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and 2x the values of tokens,
                  i.e 2000 FURY tokens.
                </p>
              </div>

              <div
                className="col-lg-2 col-sm-4  my-2 bor textC"
                style={{ width: "20%" }}
              >
                <img src={Col4} alt="" className="hlC mt-4" />
                <h3 className="text-white mt-5 acuminfont">
                  <b> LEGENDERY</b>
                </h3>{" "}
                <hr className="text-light" />
                <h3 className="yellow acuminfont">$2500</h3>
                <p className="yl ylcolor">
                  GET AN EARLY <br />
                  BIRD BONUS
                </p>
                <p className="text-light my-3">
                  Tooltip - $50 worth of FURY will be auto-staked and you gain
                  membership access to a Fan Club and 2x the values of tokens,
                  i.e 5000 FURY tokens.
                </p>
              </div>
              </Slider>
            </div>
            
            
          </div>
         
         
        </div>

        <div className="row mt-5" style={{ margin: "3rem" }}>
          <div className="col graphic">
            <table className="table  text-light">
              <caption></caption>
              <thead>
                <tr className="text-center">
                  <th scope="col"> </th>
                  <th scope="col" className="yellow display-5 acuminfont">
                    {" "}
                    <b> BASIC</b>
                  </th>
                  <th scope="col" className="yellow display-5 acuminfont">
                    {" "}
                    <b> PRO</b>
                  </th>
                  <th scope="col" className="yellow display-5  acuminfont">
                    {" "}
                    <b> ELITE*</b>
                  </th>
                  <th scope="col" className="yellow display-5 acuminfont">
                    {" "}
                    <b> LEGENDERY*</b>
                  </th>
                </tr>
              </thead>
              <tbody style={{ borderColor: "#A93BFF" }}>
                <tr>
                  <th scope="row ps" style={{ width: "20%" }}>
                    PRICE IN <br /> USD
                  </th>
                  <td className="ps " style={{ width: "20%" }}>
                    $100
                  </td>
                  <td className="ps " style={{ width: "20%" }}>
                    $500
                  </td>
                  <td className="ps " style={{ width: "20%" }}>
                    $1000
                  </td>
                  <td className="ps" style={{ width: "20%" }}>
                    $2500
                  </td>
                </tr>
                <tr>
                  <th scope="row ps " style={{ width: "20%" }}>
                    Discount <br /> during campaign{" "}
                  </th>
                  <td style={{ width: "20%" }} className="ps ">
                    N/A
                  </td>
                  <td style={{ width: "20%" }} className="ps ">
                    5%
                  </td>
                  <td style={{ width: "20%" }} className="ps ">
                    10%
                  </td>
                  <td style={{ width: "20%" }} className="ps ">
                    15%
                  </td>
                </tr>
                <tr>
                  <th scope="row ps" style={{ width: "20%" }}>
                    TOKEN VALUE DUE <br /> TO 2X DEAL{" "}
                  </th>
                  <td className="ps " style={{ width: "20%" }}>
                    ---
                  </td>
                  <td className="ps " style={{ width: "20%" }}>
                    ---
                  </td>
                  <td className="ps " style={{ width: "20%" }}>
                    2000
                  </td>
                  <td className="ps " style={{ width: "20%" }}>
                    5000
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ width: "20%" }}>
                    SIGN UP <br /> BONUS{" "}
                  </th>
                  <td style={{ width: "20%" }}>---</td>
                  <td style={{ width: "20%" }}>---</td>
                  <td v>---</td>
                  <td style={{ width: "20%" }}>---</td>
                </tr>
                <tr>
                  <th scope="row" style={{ width: "20%" }}>
                    MEMBERSHIP <br />
                    BONUS{" "}
                  </th>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                </tr>
                <tr>
                  <th style={{ width: "20%" }} scope="row">
                    BEGINNER'S <br />
                    LUCK BONUS{" "}
                  </th>
                  <td style={{ width: "20%" }}>---</td>
                  <td style={{ width: "20%" }}>---</td>
                  <td style={{ width: "20%" }}>---</td>
                  <td style={{ width: "20%" }}>---</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{ borderColor: "#A93BFF", width: "20%" }}
                  >
                    EARLY <br />
                    BIRD BONUS{" "}
                  </th>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                  <td style={{ width: "20%" }}>
                    <DoneIcon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



              {/* website select package */}
   
               <div className="row my-3" style={{ width: "100%" }}>
          <div className="col-lg-10" style={{ width: "100%" }}>
            <div
              className="row "
              style={{
                marginBottom: "5.5rem",
                marginRight: "3rem",
                marginLeft: "3rem",
                width: "100%",
              }}
            >
              <div style={{ width: "20%" }} />
            
              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("1")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "1" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "1" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>

              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("2")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "2" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "2" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>
              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("3")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "3" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "3" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>
              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("4")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "4" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "4" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>
            
            </div>
          </div>
          <div className="btn-buy" style={{ width: "25rem" }}>
            <Link
              to="/payment-integration-panel"
              className="esf"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </Link>{" "}
            {/* <select value={selectedClient} onChange={handleSelectChange}> //set value here */}
            {/* <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option> */}
            {/* </select> */}
          </div>
        </div>





        {/* mobile slect package */}
        <div className="row my-3" style={{ width: "100%" }}>
          <div className="col-lg-10" style={{ width: "100%" }}>
            <div
              className="row "
              style={{
                marginBottom: "5.5rem",
                marginRight: "3rem",
                marginLeft: "3rem",
                width: "100%",
              }}
            >
              <div style={{ width: "20%" }} />
              <Slider  {...settings}>
              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("1")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "1" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "1" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>

              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("2")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "2" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "2" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>
              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("3")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "3" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "3" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>
              <div
                style={{ width: "20%" }}
                className="col-lg-2 col-sm-3  my-3   center "
              >
                <div
                  onClick={() => handleSelectChange("4")}
                  className=" pkB  text-light  px-lg-4 text-decoration-none"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 44,
                    borderColor: selectedClient === "4" ? "#EBF243" : "#fff",
                    justifyContent: "center",
                  }}
                >
                  {selectedClient === "4" && (
                    <div style={{ marginRight: 8 }}>
                      <SvgCircule />
                    </div>
                  )}
                  Select Package
                </div>
              </div>
              </Slider>
            </div>
          </div>
          <div className="btn-buy" style={{ width: "25rem" }}>
            <Link
              to="/payment-integration-panel"
              className="esf"
              style={{ textDecoration: "none", color: "white" }}
            >
              Buy Now
            </Link>{" "}
            {/* <select value={selectedClient} onChange={handleSelectChange}> //set value here */}
            {/* <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option> */}
            {/* </select> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
