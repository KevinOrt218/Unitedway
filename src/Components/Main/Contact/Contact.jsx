import Banner from "../../Banner/Banner";
import "./Contact.css";
import { infoContact } from "../../../Utilities/infoContact";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <section>
      {Object.values(infoContact).map((banner, i) => (
        <div key={i}>
          <Banner
            paragraph={banner.paragraph}
            img={banner.img}
            position={banner.position}
          />

          <div className="banner-subtext">
            {banner.layoutType === "single" ? (
              <Container>
                {banner.subText.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Container>
            ) : (
              <Container>
                <Row>
                  {banner.subText.map((text, colIndex) => (
                    <Col key={colIndex}>
                      {text.split("\n").map((line, lineIndex) => (
                        <p className="p-text" key={lineIndex}>
                          {line}
                        </p>
                      ))}
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

export default Contact;
