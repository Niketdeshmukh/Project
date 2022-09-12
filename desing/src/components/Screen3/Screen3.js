import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import "../Screen3/Screen3.scss";
import image1 from "../../assets/Screen3/box1_container2.svg";
import image2 from "../../assets/Screen3/box2_container2.svg";
import image3 from "../../assets/Screen3/image_third.svg";
import image4 from "../../assets/Screen3/image__forth.svg";
import Footer from "../Footer/Footer"
const Screen3 = () => {
  return (
    <>
      <div className="container__main">
        <Header />
        <div className="container__first">
          <div className="container__content">
            <h2>FURY KITS</h2>
            <button className="claim__now">  <Link to='/screen4' style={{textDecoration:"none",color:"#ffffff"}}> Claim Now</Link></button>
          </div>
        </div>
        <div className="container__second">
          <div className="boxes">
            <div className="first__box">
              <img src={image1} alt="" srcset="" />
              <h5>PRO $FURY KIT</h5>
              <p>$500</p>
            </div>
            <div className="second__box">
              <img src={image2} alt="" srcset="" />
              <h5>ELITE $FURY KIT</h5>
              <p>$1000</p>
            </div>
          </div>
        </div>
        <div className="container__third">
          <div className="content__main" >
            <div className="content__text">
              <h3>ABOUT FANFURY</h3>
              <p>
                With Web 3.0, Fanfury is set to forever change Daily Fantasy
                Sports. <br />
                <br /> Fanfury combines decentralised blockchain technology with
                fantasy sports. Built on the Juno network and with the
                assistance of multiple data oracles, which validate data from
                real-world player scores to ensure zero manipulation, as well as
                the lowest industry rake fee and Fan Club-specific DAOs, which
                give our players ownership and governance rights. <br />
                <br /> While smart contracts ensure that payouts are accurate,
                our protocol-owned liquidity and burn mechanism based on
                deflationary tokenimics ensures that the price of $FURY is not
                affected by crypto market volatility.
              </p>
              <button className="readMore">Read More</button>
            </div>
            <img src={image3} alt=""  className="image_pos" srcset="" />
          </div>
        </div>
        <div className="container__forth">
          <div className="content__forth">
            <img src={image4} alt="" srcset="" />
            <div className="content__text">
              <h3>Refill your $FURY with FURY Kits</h3>
              <p>
                Fanfury offers four distinct kits for users to choose from,
                beginning with the Basic kit, which includes an early bird
                bonus, and progressing to the Pro, Elite, and Legendary kits,
                which include kit specific additional bonus offers. The Elite
                and Legendary kits provide the best value for money, with the
                Legendary kit including exclusive NFT shards. Each kit includes
                2x FURY tokens as a welcome bonus(membership-bonus), so if you
                choose a $100 package, you will receive 2x FURY tokens. That's
                200 tokens!
              </p>
            </div>
          </div>
        </div>
        <Footer/></div>
      
    </>
  );
};

export default Screen3;
