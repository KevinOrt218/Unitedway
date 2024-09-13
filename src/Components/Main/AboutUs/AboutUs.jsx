import Banner from "../../Banner/Banner";
import "./AboutUs.css";
import { aboutinfo } from "../../../Utilities/infoAboutUs";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <section>
      {Object.values(aboutinfo).map((banner, i) => (
        <div key={i}>
          <Banner
            paragraph={banner.paragraph}
            img={banner.img}
            position={banner.position}
          />
          <div className="banner-subtext">
            {banner.layoutType === "single" ? (
              <Container>
                <p>{banner.subText}</p>
              </Container>
            ) : (
              <Container>
                <Row>
                  {banner.subText.map((text, i) => (
                    <Col key={i}>
                      <Row className="row-container ">
                        <h3>{text.fisrtTitle}</h3>
                        <p>{text.FirstText}</p>
                        <h3>{text.secondTitle}</h3>
                        <p>{text.secondText}</p>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </Container>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default AboutUs;
