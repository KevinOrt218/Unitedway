import Banner from "../../Banner/Banner";
import BannerFooter from "../../BannerFooter/BannerFooter";
import { infoBanner } from "../../../Utilities/infoBannerCompany";
import { infoBannerFooter } from "../../../Utilities/infoBannerFooter";
import { Fragment } from "react";

function Company() {
  const banners = Object.values(infoBanner);
  const footers = Object.values(infoBannerFooter);

  return (
    <section className="main-container">
      {banners.map((banner, i) => (
        <Fragment key={i}>
          <Banner
            paragraph={banner.paragraph}
            img={banner.img}
            text={banner.text}
            position={banner.position}
          />
          {footers[i] && (
            <BannerFooter
              logo={footers[i].logo}
              textfooter={footers[i].textfooter}
            />
          )}
        </Fragment>
      ))}
    </section>
  );
}

export default Company;
