import Banner from "../../Banner/Banner";
import { info } from "../../../Utilities/infoBannerCompany";

function Company() {
  return (
    <section className="main-container">
      {Object.values(info).map((banner, i) => {
        return (
          <Banner
            key={i}
            paragraph={banner.paragraph}
            img={banner.img}
            text={banner.text}
            position={banner.position}
            logoside={banner.logoside}
          />
        );
      })}
    </section>
  );
}

export default Company;
