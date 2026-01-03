import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import SEO from "../components/SEO";
import ContactSection from "../components/contactSection";

export default function Home() {
  const heroTitle = useRef();
  const leftImg = useRef();
  const aboutLeft = useRef();
  const features = useRef([]);
  features.current = [];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(heroTitle.current, { y: 30, opacity: 0, duration: 0.8 })
      .from(leftImg.current, { x: -50, opacity: 0, duration: 1 }, "-=0.4")
      .from(aboutLeft.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(features.current, { y: 20, opacity: 0, stagger: 0.12 }, "-=0.4");
    return () => tl.kill();
  }, []);

  const addFeature = (el) => {
    if (el && !features.current.includes(el)) features.current.push(el);
  };

  return (
    <>
      <SEO
        title="Ryan Organic Farms | Sustainable & Chemical-Free Farming"
        description="Ryan Organic Farms delivers premium organic produce, free-range eggs, and sustainable farming practices for a healthier future."
      />
      <section className="hero-section">
        <div className="hero-inner">
          <h2 className="hero-welcome">Welcome to</h2>
          <h1 className="hero-title">Ryan Organic Farms</h1>
          <p className="hero-tagline">
            Sustainable Farmlands for Generations to Come!
          </p>
        </div>
      </section>

      {/* Brochure section: left image, right form */}
      <section
        id="contact"
        className="brochure-section d-flex align-items-stretch"
      >
        <div className="left-image">
          <video
            className="hero-video"
            src="/home-mobile.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
          />
        </div>

        {/* RIGHT FORM - Contact (improved) */}
        <div className="right-form bg-light p-5">
          <div className="container">
            <h3 className="mb-3">Let’s Grow Something Together</h3>
            <p className="text-muted small">
              Enter your details and message — we'll get back to you.
            </p>

            <form
              id="contactForm"
              className="mt-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const sendBtn = document.getElementById("sendBtn");
                const statusEl = document.getElementById("status");

                // prevent double submit
                if (sendBtn.disabled) return;

                const data = {
                  first: form.first?.value || "",
                  last: form.last?.value || "",
                  email: form.email?.value || "",
                  phone: form.phone?.value || "",
                  message: form.message?.value || "",
                };

                // basic front-end validation
                if (!data.email || !data.first || !data.message) {
                  statusEl.innerText =
                    "Please fill required fields (name, email, message).";
                  statusEl.className = "text-danger";
                  return;
                }

                try {
                  sendBtn.disabled = true;
                  sendBtn.classList.add("disabled");
                  statusEl.innerText = "Sending...";
                  statusEl.className = "text-muted";

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    statusEl.innerText = "Thanks — your message was sent!";
                    statusEl.className = "text-success";
                    // keep send button disabled to avoid re-sends, or re-enable if you prefer:
                    // sendBtn.disabled = false;
                    form.reset();
                  } else {
                    const json = await res.json().catch(() => ({}));
                    statusEl.innerText =
                      json.error || "Failed to send — please try again later.";
                    statusEl.className = "text-danger";
                    sendBtn.disabled = false;
                  }
                } catch (err) {
                  console.error(err);
                  statusEl.innerText = "Error sending message";
                  statusEl.className = "text-danger";
                  sendBtn.disabled = false;
                }
              }}
            >
              <div className="row g-3">
                <div className="col-6">
                  <label className="form-label small">First Name</label>
                  <input
                    name="first"
                    className="form-control form-border"
                    required
                  />
                </div>

                <div className="col-6">
                  <label className="form-label small">Last Name</label>
                  <input name="last" className="form-control form-border" />
                </div>

                <div className="col-6">
                  <label className="form-label small">Email *</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control form-border"
                    required
                  />
                </div>

                <div className="col-6">
                  <label className="form-label small">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="form-control form-border"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small">Your message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="form-control form-border"
                    required
                  />
                </div>

                <div className="col-12 d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <button
                      id="sendBtn"
                      type="submit"
                      className="btn btn-outline-danger me-3"
                    >
                      Send Message
                    </button>

                    {/* the Call button remains simple and static — won't be duplicated */}
                    <a
                      id="callBtn"
                      href="tel:+919705470700"
                      className="btn btn-outline-dark"
                    >
                      Call +91 97054 70700
                    </a>
                  </div>

                  {/* status area — we only update text here (no DOM insertion) */}
                  <div id="status" className="text-success" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* About / Visionary section */}
      {/* ===== Visionary Section (big left title + right text) ===== */}
      <section id="vision" className="vision-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* LEFT TITLE */}
            <div className="col-md-6 text-start title-col">
              <h2 className="vision-stack">
                Meet the visionary
                <br />
                <span className="vision-name-large">Mr. Ganga Raju</span>
              </h2>
            </div>

            {/* RIGHT PARAGRAPH */}
            <div className="col-md-6 text-start vision-text-col">
              <p className="muted-lead">
                A Legacy of Agriculture, Continued with Purpose
              </p>

              <p className="vision-paragraph">
                Ryan Organic Farms was founded by Mr. Ganga Raju, a passionate
                farmer who believed in preserving the purity of land through
                natural and sustainable farming methods. His values of soil
                care, ethical agriculture, and chemical-free cultivation laid a
                strong foundation for the farm.
                <br />
                Today, the legacy is continued by his grandson Praveen, who
                combines modern knowledge with hands-on farming to carry the
                vision forward.
              </p>

              <Link href="/about" className="btn btn-outline-danger mt-3">
                Full Story
              </Link>
            </div>
          </div>

          {/* IMAGE + VIDEO ROW */}
          <div className="row media-row mt-5 g-4">
            <div className="col-md-6">
              <img
                src="/visonary_image.png"
                className="media-img"
                alt="Visionary Image"
              />
            </div>

            <div className="col-md-6">
              <div className="media-video-wrap">
                <video
                  className="media-video"
                  src="/farmland.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything We Offer */}
      <section className="offer-section container py-5">
        <h2 className="offer-main-title text-center mb-5">
          Everything We Offer
        </h2>

        {/* <!-- 3 columns --> */}
        <div className="row text-center justify-content-center g-5">
          {/* <!-- ITEM 1 --> */}
          <div className="col-md-4">
            <div className="offer-icon">★</div>
            <h3 className="offer-title">
              Isolated Organic
              <br />
              Islands
            </h3>
          </div>

          {/* <!-- ITEM 2 --> */}
          <div className="col-md-4">
            <div className="offer-icon">★</div>
            <h3 className="offer-title">
              Naturally
              <br />
              Protected
            </h3>
          </div>

          {/* <!-- ITEM 3 --> */}
          <div className="col-md-4">
            <div className="offer-icon">★</div>
            <h3 className="offer-title">
              No Residue
              <br />
              Overflow
            </h3>
          </div>
        </div>

        {/* <!-- paragraph --> */}
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8 text-center">
            <p className="offer-description">
              At Ryan Organic farmlands offer isolated islands for serene,
              untouched farming environments. Naturally protected from
              pollutants, our unique locations ensure your crops thrive safely.
              With no residue overflow, our sustainable practices guarantee
              pure, uncontaminated soil for the healthiest produce.
            </p>
          </div>
        </div>

        {/* <!-- button --> */}
        <div className="text-center mt-4">
          <a href="/produce" className="btn btn-outline-danger offer-btn">
            Learn More
          </a>
        </div>
      </section>

      <section className="gallery-section container py-5">
        <h2 className="text-center mb-4">Gallery</h2>

        <div className="uniform-gallery-grid">
          {[
            "/landView_drone.jpg",
            "/mud.png",
            "/rice.png",
            "/eggs.jpg",
            "/Goats.png",
            "/Hen.jpg",
          ].map((src, i) => (
            <div className="uniform-gallery-item" key={i}>
              <img src={src} alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Map section */}
      <ContactSection />
    </>
  );
}
