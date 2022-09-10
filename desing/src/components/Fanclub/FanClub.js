import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Layout from "../Layout/Layout";
const FanClub = () => {
  return (
    <Layout>
      <Col lg={5}>
        <div className="fan__container">
          <h2>SELECT A FAN CLUB</h2>
          <p>
            Claim, Own and Manage Fan clubs, choose from 250 clubs spread across
            5 Major leagues
          </p>
          <div className="head__box">
            <img src="../img/fanclub_logo/download.png" alt="" srcset="" />
            Arsenal <a href="">˅ </a>{" "}
          </div>
          <div className="content__box">
            <li>
              <img src="../img/fanclub_logo/chelsea.png" alt="" srcset="" />
              Chelsea Fc
            </li>
            <hr />
            <li>
              <img src="../img/fanclub_logo/manchester.png" alt="" srcset="" />
              Manchester City F.C.
            </li>{" "}
            <hr />
            <li>
              <img src="../img/fanclub_logo/liverpool.png" alt="" srcset="" />
              Liverpool F.C.
            </li>{" "}
            <hr />
          </div>
        </div>
        <br />
        <div className="con__btn">
          {" "}
          <Link
            to="/purchase"
            className="esf"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Continue
          </Link>{" "}
        </div>
      </Col>
    </Layout>
  );
};

export default FanClub;
