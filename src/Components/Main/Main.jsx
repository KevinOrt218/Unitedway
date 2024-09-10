import Banner from "./Banner";
import CardsInfo from "./CardsInfo";
import AboutUs from "./AboutUs";
import { info } from "../../utilities/information";
import { Fragment } from "react";

export function Main() {
  return (
    <Fragment>
      <main id="company-section" className="main-container">
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
      </main>
      <section id="services-section">
        <CardsInfo />
      </section>
      <section>
        <AboutUs />
      </section>
    </Fragment>
  );
}
export default Main;
