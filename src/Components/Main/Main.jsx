import Company from "./Company/Company";
import Services from "./Servi/Services";
import AboutUs from "./AboutUs/AboutUs";
import { Fragment } from "react";

export function Main() {
  return (
    <Fragment>
      <section id="company-section">
        <Company />
      </section>
      <section id="services-section">
        <Services />
      </section>
      <section id="aboutus-section">
        <AboutUs />
      </section>
    </Fragment>
  );
}
export default Main;
