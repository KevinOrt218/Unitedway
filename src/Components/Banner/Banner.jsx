import PropTypes from "prop-types";
import { Fragment } from "react";
import "../../Components/Banner/Banner.css";

function Banner({ paragraph, img, position }) {
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
