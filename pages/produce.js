import ContactSection from "../components/contactSection";
import SEO from "../components/SEO";

export default function Produce() {
  const produce = [
    {
      title: "Paddy",
      img: "/paddy.png",
      desc: "At Ryan Organic Farms, we organically grow lush paddy fields, ensuring the highest quality rice without the use of chemicals. Our sustainable practices create a healthy ecosystem for premium rice production.",
    },
    {
      title: "Free-Range Hens",
      img: "/Hen.jpg",
      desc: "Our hens are raised in open, natural environments with organic feed, ensuring ethical care and healthy livestock.",
    },
    {
      title: "Farm-Fresh Organic Eggs",
      img: "/eggs.jpg",
      desc: "Collected fresh from free-range hens, our eggs are rich in nutrition, free from antibiotics, and completely natural.",
    },
    {
      title: "Mangoes",
      img: "/bangenpalli.png",
      desc: "Our mango orchards are nurtured naturally, producing juicy, flavorful mangoes grown without chemical sprays, preserving taste and nutrition.",
    },
  ];

  return (
    <>
      <SEO
        title="Our Organic Produce | Ryan Organic Farms"
        description="Explore our organic rice, mangoes, free-range eggs, and farm-fresh produce grown with sustainable methods."
      />
      <section className="produce-section container py-5">
        <p className="text-center text-muted mb-2">Get to Know</p>
        <h2 className="text-center mb-4">Our Organic Produce</h2>

        {/* FULL WIDTH DIVIDER */}
        <div className="gallery-divider-wrap">
          <div className="gallery-divider" />
        </div>

        <div className="row g-5">
          {produce.map((item, i) => (
            <div key={i} className="col-md-6 text-center">
              <div className="produce-icon mb-3">★</div>

              <h3 className="produce-title mb-3">{item.title}</h3>

              <img
                src={item.img}
                alt={item.title}
                className="img-fluid produce-img mb-4"
              />

              <p className="produce-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
