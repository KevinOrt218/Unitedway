import Banner from "./Banner";
import { aboutinfo } from "../../Utilities/aboutusInfo";

function AboutUs() {
  return (
    <section>
      {Object.values(aboutinfo).map((banner, i) => {
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
export default AboutUs;
