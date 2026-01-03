import ContactSection from "../components/contactSection";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Ryan Organic Farms | Sustainable Agriculture"
        description="Learn about Ryan Organic Farms, our vision, organic farming practices, and commitment to chemical-free agriculture."
      />
      <section className="about-page">
        {/* ===== HERO ===== */}
        <div className="about-container text-center py-5">
          <p className="about-subtitle">About</p>
          <h1 className="about-title">Ryan Organic Farms</h1>
        </div>
        <div className="gallery-divider-wrap">
          <div className="gallery-divider" />
        </div>

        {/* ===== OUR FARMLAND ===== */}
        <div className="about-container pb-5">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2 className="section-heading text-center ">Our Farmland</h2>
              <p className="section-subtext text-center ">
                Isolated Islands next to a <br /> Private Beach
              </p>

              <img
                src="/isolated_fields.png"
                alt="Our Farmland"
                className="img-fluid rounded about-img mt-4"
              />
            </div>

            <div className="col-md-6">
              <div className="about-text-stretch">
                <p className="about-text">
                  At Ryan Organic Farms, we are passionate about promoting
                  sustainable farming practices and fostering a deep connection
                  between individuals and the land. Our mission is to create a
                  thriving community that values environmental stewardship,
                  health, and well-being.
                </p>

                <p className="about-text">
                  Our unique features include a Ghoshala with 300 cows, lush
                  paddy fields, and diverse organic produce. We utilize
                  Jeevamrutha, a natural concoction, to significantly boost soil
                  quality and enhance plant growth.
                </p>

                <p className="about-text">
                  Our isolated farm islands ensure pristine, chemical-free
                  farming environments that protect and nurture crops while
                  offering serene coastal surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== OUR VISION ===== */}
        <div className="about-container py-5">
          <div className="row align-items-center g-5">
            <div className="col-md-6 order-2 order-md-1">
              <div className="about-text-wrap">
                <p className="about-text">
                  Ryan Organic Farms is built on a legacy of sustainable and
                  chemical-free agriculture founded by Mr. Ganga Raju, who
                  believed in farming in harmony with nature.
                </p>

                <p className="about-text">
                  Ryan Organic Farms is built on a legacy of sustainable and
                  chemical-free agriculture founded by Mr. Ganga Raju, who
                  believed in farming in harmony with nature.
                </p>

                <p className="about-text">
                  Beyond farming, Praveen is also a fitness trainer, reflecting
                  our belief that healthy food, healthy land, and a healthy
                  lifestyle go hand in hand.
                </p>
              </div>
            </div>

            <div className="col-md-6 text-center order-1 order-md-2">
              <h2 className="section-heading">Our Vision</h2>
              <p className="section-subtext">
                Mr. Ganga Raju's <br />
                Vision & Mission
              </p>

              <img
                src="/praveen.jpg"
                alt="Founder"
                className="img-fluid rounded vision-img mt-4"
              />
            </div>
          </div>
        </div>

        {/* ===== FUTURE PROJECTS ===== */}
        <div className="future-section py-5">
          <div className="about-container">
            <h2 className="future-title">
              Future Projects <span>at Ryan Organic Farms</span>
            </h2>

            <p className="future-subtitle">
              Agri-B-School | Agri-Health Resort
            </p>

            <div className="row align-items-center g-5 mt-4">
              <div className="col-md-6">
                <img
                  src="/Agri.png"
                  alt="Future Projects"
                  className="img-fluid rounded"
                />
              </div>

              <div className="col-md-6">
                <h3 className="future-heading">Agri B-School</h3>
                <p className="about-text">
                  We are cultivating tomorrow’s leaders through hands-on
                  learning.
                </p>

                <ul className="future-list">
                  <li>
                    <span>01</span> Cultivating Tomorrow’s Stewards
                  </li>
                  <li>
                    <span>02</span> Seeding Success Classrooms
                  </li>
                  <li>
                    <span>03</span> Hands-On Harvesting Education
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
      </section>
    </>
  );
}
