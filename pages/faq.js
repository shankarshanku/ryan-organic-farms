import ContactSection from "../components/contactSection";
import SEO from "../components/SEO";

export default function FAQ() {
  const faqs = [
    {
      q: "What is organic farming?",
      a: "Organic farming is a method of agriculture that relies on natural processes and materials to grow crops. It avoids the use of synthetic pesticides, fertilizers, and genetically modified organisms (GMOs). Instead, it uses techniques like crop rotation, green manure, compost, and biological pest control to maintain soil health and ecosystem balance.",
    },
    {
      q: "Where are the farms located?",
      a: "Our farms are located in Dugarajapatnam, Tirupati District, Andhra Pradesh, surrounded by naturally protected farmlands.",
    },
    {
      q: "Are your eggs farm-fresh and natural?",
      a: "Yes. Our eggs are collected daily from farm-raised hens and are completely natural, free from artificial enhancers, preservatives, or chemical treatments.",
    },
    {
      q: "How are the hens raised on your farm?",
      a: "Our hens are raised in open, spacious environments where they can move freely. They are naturally fed and cared for without the use of growth hormones or harmful antibiotics.",
    },
    {
      q: "Do you use antibiotics or hormones for hens?",
      a: "No. We do not use synthetic hormones or routine antibiotics. Our focus is on natural immunity, clean surroundings, and proper nutrition.",
    },
    {
      q: "What do your hens eat?",
      a: "Our hens are fed a balanced natural diet that includes grains, farm-grown feed, and natural supplements — avoiding chemically processed feed.",
    },
    {
      q: "Is your farm completely chemical-free?",
      a: "We strictly avoid synthetic pesticides, chemical fertilizers, and GMOs. All farming is done using organic inputs and natural methods.",
    },
    {
      q: "How do you maintain soil fertility naturally?",
      a: "We use compost, organic manure, crop rotation, and natural soil enhancers to keep the land fertile and healthy over time.",
    },
    {
      q: "Can I get updates on my farm after purchase?",
      a: "Yes, you can receive updates on your farm post-purchase. We have installed CCTV cameras across the farm, allowing you to monitor and stay informed about the activities and progress on your land",
    },
    {
      q: "How can I place an order or visit the farm?",
      a: "You can place orders by contacting us through the website or phone. Farm visits can also be arranged by appointment.",
    },
  ];

  return (
    <>
      <SEO
        title="FAQ | Organic Farming, Eggs & Produce | Ryan Organic Farms"
        description="Find answers to common questions about Ryan Organic Farms, including organic farming methods, free-range hens, natural eggs, delivery, and sustainability practices."
        keywords="organic farming FAQ, free range eggs FAQ, natural eggs, organic produce questions, Ryan Organic Farms FAQ"
      />

      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title text-center">Frequently Asked Questions</h2>

          <div className="faq-accordion accordion" id="faqAccordion">
            {faqs.map((item, i) => (
              <div className="faq-item accordion-item" key={i}>
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded={i === 0 ? "true" : "false"}
                    aria-controls={`collapse${i}`}
                  >
                    <div className="faq-number">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    {item.q}
                  </button>
                </h2>

                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${
                    i === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${i}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <ContactSection />
      </section>
    </>
  );
}
