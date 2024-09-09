import Banner from "./Banner";
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
    </Fragment>
  );
}
export default Main;
