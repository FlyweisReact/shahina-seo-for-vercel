/** @format */
import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import "./MobileOfferBanner.css";
import img from "../../assest/Images/offerimage.webp";
import img1 from "../../assest/Images/playstore.png";
import img2 from "../../assest/Images/apple.png";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ImageLazyLoading } from "../../utils/helpingComponent";

const MobileOfferBanner = ({ open, onClose }) => {
  const [animate, setAnimate] = useState(false);
  const [maskApplied, setMaskApplied] = useState(false);

  useEffect(() => {
    if (open) {
      // Start animation quickly for LCP
      setTimeout(() => setAnimate(true), 10);

      // Apply heavy mask AFTER LCP
      setTimeout(() => setMaskApplied(true), 1200);
    } else {
      setAnimate(false);
      setMaskApplied(false);
    }
  }, [open]);

  // Generate scrolling text in a lighter way
  const scrollingTexts = Array(20).fill("$50 OFF");

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      mask={false}
      height={295}
      className={`mofferbanner_1 ${animate ? "open" : ""}`}
    >
      <div className="mofferbanner_2">
        <div className={`mofferbanner_3 ${maskApplied ? "mask-applied" : ""}`}>
          {/* Top Scrolling Banner */}
          <div className="mofferbanner_4">
            <div className="mscrolling-text">
              {scrollingTexts.map((text, i) => (
                <h6 key={i}>{text}</h6>
              ))}
            </div>
          </div>

          {/* Offer Details */}
          <div className="mofferbanner_5">
            <h5>
              Get $50 OFF your first
              <br /> booking when you book
              <br /> through our app!
            </h5>
            <div className="mofferbanner_6">
              <h6>Discount Code - 2VQG4IMJZ</h6>
            </div>
            <div className="mofferbanner_9">
              <h6>Download Our App NOW!!</h6>
              <div className="mofferbanner_10">
                {/* Google Play */}
                <Link
                  to={
                    "https://play.google.com/store/apps/details?id=com.ms.shahina&hl=en-US"
                  }
                  target="_blank"
                >
                  <div className="mofferbanner_11">
                    <img src={img1} alt="Google Play" loading="lazy" />
                    <div className="mofferbanner_12">
                      <p>GET IT ON</p>
                      <h5>Google Play</h5>
                    </div>
                  </div>
                </Link>

                {/* App Store */}
                <Link
                  to={
                    "https://apps.apple.com/in/app/shahina-med-spa/id6740401346"
                  }
                  target="_blank"
                >
                  <div className="mofferbanner_11">
                    <img src={img2} alt="App Store" loading="lazy" />
                    <div className="mofferbanner_12">
                      <p>Download on the</p>
                      <h5>App Store</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Scrolling Banner */}
          <div className="mofferbanner_7">
            <div className="mscrolling-text">
              {scrollingTexts.map((text, i) => (
                <h6 key={i}>{text}</h6>
              ))}
            </div>
          </div>
        </div>

        {/* LCP Image */}
        <div className="mofferbanner_8">
          <ImageLazyLoading
            img={img}
            alt="Offer image"
            width={300}
            height={400}
          />
        </div>

        {/* Close Icon */}
        <div className="mofferbanner_13">
          <GrClose onClick={onClose} />
        </div>
      </div>
    </Drawer>
  );
};

export default MobileOfferBanner;
