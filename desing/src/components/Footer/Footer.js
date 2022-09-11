import React from "react";
import "./Footer.scss";
import image1 from "../../assets/Screen3/footer_img.svg";
const Footer = () => {
  return (
    <>
      <div className="footer__main">
        <div className="social__content" style={{
    display: "flex",
    flexDirection: "row"
}}>
          <div className="link__content">
            <ul>
              <h5>Link</h5>
              <li className="items">White Paper</li>
              <li className="items">Terms of Services</li>
              <li className="items">Privacy Policy</li>
            </ul>
          </div>
          <div className="support__content">
            <ul>
              <h5>Support</h5>
              <li className="items">Developers</li>
              <li className="items">Audits</li>
              <li className="items">Contact</li>
            </ul>
          </div>
          <div className="community__content">
            <ul>
              <h5>Community</h5>
              <li className="items">Telegram</li>
              <li className="items">Discord</li>
              <li className="items">Twitter</li>
              <li className="items">Medium</li>
              <li className="items">Facebook</li>
              <li className="items">Instagram</li>
            </ul>
          </div>
          
        </div><p>Copyright © Fanfury. 2022 All rights Reserved.</p>
        <img src={image1} alt="" srcset="" />
      </div>
    </>
  );
};

export default Footer;
