import Banner from "../../Banner/Banner";
import { infoContact } from "../../../Utilities/infoContact";

function Contact() {
  return (
    <section>
      {Object.values(infoContact).map((banner, i) => {
        return (
          <div key={i}>
            <Banner
              paragraph={banner.paragraph}
              img={banner.img}
              position={banner.position}
            />
            <p className="banner-subtext">{banner.subText}</p>{" "}
            {/* Renderiza el texto debajo del banner */}
          </div>
        );
      })}
    </section>
  );
}

export default Contact;
