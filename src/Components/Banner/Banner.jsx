import PropTypes from "prop-types";
import { Fragment } from "react";
import "../../Components/Banner/Banner.css";

const positionText = [
  "center",
  "right",
  "right-up",
  "right-down",
  "left",
  "left-up",
  "left-down",
];

function Banner({ paragraph, img, position }) {
  const getPositionClass = (position) => {
    switch (position) {
      case "center":
        return "";
      case "right":
        return "banner-text-container-right";
      case "right-up":
        return "banner-text-container-right-up";
      case "right-down":
        return "banner-text-container-right-down";
      case "left":
        return "banner-text-container-left";
      case "left-up":
        return "banner-text-container-left-up";
      case "left-down":
        return "banner-text-container-left-down";
      default:
        return "";
    }
  };
  return (
    <Fragment>
      <div className="banner-container">
        <img src={img} alt="Banner Image" className="banner-image" />
        <div className={`banner-text-container ${getPositionClass(position)}`}>
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
  position: PropTypes.oneOf(positionText),
};
