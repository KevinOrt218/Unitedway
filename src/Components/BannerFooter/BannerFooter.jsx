import "./BannerFooter.css";
import PropTypes from "prop-types";

function BannerFooter({ logo, textfooter }) {
  return (
    <div className="bottom-container">
      <div className="left-side">
        <img src={logo} alt="Logo" className="left-image" />
      </div>
      <div className="vertical-line"></div>
      <div className="right-side">
        <p className="right-text">{textfooter}</p>
      </div>
    </div>
  );
}

export default BannerFooter;

BannerFooter.propTypes = {
  logo: PropTypes.string.isRequired,
  textfooter: PropTypes.string.isRequired,
};
