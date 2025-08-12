/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getApi } from "../../Repository/Api";
import { isAuthenticated } from "../../store/authSlice";
import { ImageLazyLoading } from "../../utils/helpingComponent";
import endPoints from "../../Repository/apiConfig";

const HeroSection = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  const [item, setItem] = useState({});
  const [imageUrl, setImageUrl] = useState("/hero-default.jpg"); // loaded instantly from preload

  useEffect(() => {
    getApi({
      url: endPoints.banner.homepageBanner,
      setResponse: (res) => {
        const banner = res?.data?.[0];
        if (banner) {
          setItem(banner);
          if (banner.bannerImage) {
            setImageUrl(banner.bannerImage);
          }
        }
      },
    });
  }, []);
  return (
    <div className="Home_Hero_Section">
      <div className="left-container">
        <h1>{item?.title}</h1>
        <ul>
          {item?.description?.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
        <Link to={isLoggedIn ? "/schedule1" : "/appointment"}>
          <button>BOOK ONLINE</button>
        </Link>
      </div>
      <div className="Image_container">
        <img
          src="https://shahinaimage.s3.us-west-1.amazonaws.com/Shahina___Nodir-12-removebg-preview-min.png"
          alt="Shahina Hoja"
          className="Hero_Imgl"
          loading="eager"
          decoding="async"
          width="150"
          height="150"
        />
      </div>
    </div>
  );
};



export default HeroSection;
