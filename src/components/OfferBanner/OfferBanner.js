/** @format */
import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import "./offerBanner.css";
import img from "../../assest/Images/offerimage.webp";
import img1 from "../../assest/Images/playstore.png";
import img2 from "../../assest/Images/apple.png";

import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

const OfferBanner = ({ open, onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimate(true), 30);
    } else {
      setAnimate(false);
    }
  }, [open]);

  // Create 24 "$50 OFF" items without manual duplication
  const discountItems = Array(24).fill("$50 OFF");

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      mask={false}
      height={330}
      className={`offerbanner_1 ${animate ? "open" : ""}`}
    >
      <div className="offerbanner_2">
        <div className="offerbanner_3">
          {/* Top scrolling text bar - half width */}
          <div className="offerbanner_4">
            <div className="scrolling-text">
              {discountItems.map((text, i) => (
                <h6 key={i}>{text}</h6>
              ))}
            </div>
          </div>

          {/* Center offer text */}
          <div className="offerbanner_5">
            <h5>
              Get $50 OFF your first booking
              <br />
              when you book through our app!
            </h5>
            <div className="offerbanner_6">
              <h6>Discount Code - 2VQG4IMJZ</h6>
            </div>
          </div>

          {/* Bottom scrolling text bar - half width */}
          <div className="offerbanner_7">
            <div className="scrolling-text">
              {discountItems.map((text, i) => (
                <h6 key={i}>{text}</h6>
              ))}
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="offerbanner_8">
          <img src={img} alt="Offer" width="300" height="300" fetchpriority="high" />
        </div>

        {/* App download section */}
        <div className="offerbanner_9">
          <h6>Download Our App NOW!!</h6>
          <div className="offerbanner_10">
            <Link
              to="https://play.google.com/store/apps/details?id=com.ms.shahina&hl=en-US"
              target="_blank"
            >
              <div className="offerbanner_11">
                <img src={img1} alt="Google Play" width="35" height="35" />
                <div className="offerbanner_12">
                  <p>GET IT ON</p>
                  <h5>Google Play</h5>
                </div>
              </div>
            </Link>
            <Link
              to="https://apps.apple.com/in/app/shahina-med-spa/id6740401346"
              target="_blank"
            >
              <div className="offerbanner_11">
                <img src={img2} alt="App Store" width="35" height="35" />
                <div className="offerbanner_12">
                  <p>Download on the</p>
                  <h5>App Store</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Close button */}
        <div className="offerbanner_13">
          <GrClose onClick={onClose} />
        </div>
      </div>
    </Drawer>
  );
};

export default OfferBanner;
