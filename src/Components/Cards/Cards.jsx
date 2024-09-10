import { Container, Row, Col, Image } from "react-bootstrap";
import "./Cards.css";

function Cards() {
  return (
    <Container fluid className="my-5" id="">
      <Row className="mb-4">
        <Col md={3} className="red-background text-end">
          <h2 className="text-white py-3 ps-4">Our Services</h2>
        </Col>
      </Row>
      <Row className="container-card">
        <Col md={5} className="mx-auto">
          <div className="image-container">
            <Image src="/images/truck.jpg" className="image-content" />
          </div>
          <h3 className="mt-3 text-center title-card">Distribution</h3>
          <p className="paragraph-card">
            We specialize in shipping to a multitude of vendors and are fully
            equipped with EDI integration.
          </p>
        </Col>
        <Col md={5} className="mx-auto">
          <div className="image-container">
            <Image src="/images/chuttersnap.jpg" className="image-content" />
          </div>
          <h3 className="mt-3 text-center title-card">Warehousing</h3>
          <p className="paragraph-card">
            We are familiar with the guidelines of most vendors. We assure you
            that your goods are in safe hands with United-Way CHB.
          </p>
          <p className="paragraph-card">
            We specialize in many projects for our customers, including: Pick
            and Pack, E-commerce, Labeling, Change in care labels, etc.
            Container transloading.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
