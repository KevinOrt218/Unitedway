import Banner from "../../Banner/Banner";
import { aboutinfo } from "../../../Utilities/infoAboutUs";

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
          />
        );
      })}
    </section>
  );
}
export default AboutUs;
