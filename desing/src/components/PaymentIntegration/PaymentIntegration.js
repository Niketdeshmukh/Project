import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import barCode from "../../assets/barcode.png";
import download from "../../assets/images/download.png";
import Layout from "../Layout/Layout";
// import PureModal from "react-pure-modal";

const PaymentIntegration = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Col lg={5}>
        {/* from new branch */}

        <button
          className="closed_btn"
          onClick={() => navigate("/connect-wallet")}
        >
          X
        </button>

        <div className="hero-content">
          <div className="hero-action-box payment-box">
            <div className="bar-code-box">
              <img src={download} alt="bar-code" className="img-fluid" />
            </div>
          </div>
        </div>
      </Col>
    </Layout>
  );
};

export default PaymentIntegration;
