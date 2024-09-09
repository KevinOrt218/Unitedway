import PropTypes from "prop-types";
import { Fragment } from "react";
import "../../Components/Main/Banner.css";
import logo from "/images/Unitedway_logo.png";

function Banner({ paragraph, img, text, position }) {
  return (
    <Fragment>
      <div className="banner-container">
        <img src={img} alt="Banner" className="banner-image" />
        <div
          className={
            position
              ? "banner-text-container banner-text-container-right"
              : "banner-text-container"
          }
        >
          <h2 className="banner-text">{paragraph}</h2>
        </div>
      </div>

      <div className="bottom-container">
        <div className="left-side">
          <img src={logo} alt="United-way Logo" className="left-image" />
        </div>
        <div className="vertical-line"></div>
        <div className="right-side">
          <p className="right-text">{text}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Banner;
Banner.propTypes = {
  paragraph: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  position: PropTypes.bool,
};
