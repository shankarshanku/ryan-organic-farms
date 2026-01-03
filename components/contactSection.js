import { useRef } from "react";

export default function ContactSection() {
  const statusRef = useRef(null);
  const sendBtnRef = useRef(null);

  return (
    <section className="contact-section py-5 bg-light" id="contact">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* LEFT SIDE — ADDRESS */}
          <div className="col-md-6">
            <h2 className="contact-heading">Get in touch with any questions</h2>

            <p className="contact-label">Address</p>
            <p className="contact-text">
              Ryan Organic Farms, Dugarajapatnam, Tirupati (Dist), Andhra
              Pradesh, 524415
            </p>

            <p className="contact-label mt-4">Contact</p>
            <p className="contact-number">+91 97054 70700</p>

            <div className="social-icons mt-3">
              <a href="#">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="col-md-6">
            <div className="contact-form-box p-4 bg-white rounded">
              <h3 className="mb-2 form-title">Get in touch</h3>
              <p className="text-muted small mb-4">
                Enter your details and message — we'll get back to you.
              </p>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const statusEl = statusRef.current;
                  const sendBtn = sendBtnRef.current;

                  if (sendBtn.disabled) return;

                  const data = {
                    first: form.first.value,
                    last: form.last.value,
                    email: form.email.value,
                    phone: form.phone.value,
                    message: form.message.value,
                  };

                  if (!data.first || !data.email || !data.message) {
                    statusEl.textContent =
                      "Please fill required fields (name, email, message).";
                    statusEl.className = "text-danger mt-2";
                    return;
                  }

                  try {
                    sendBtn.disabled = true;
                    statusEl.textContent = "Sending...";
                    statusEl.className = "text-muted mt-2";

                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });

                    const json = await res.json();

                    if (res.ok) {
                      statusEl.textContent = "Thanks — your message was sent!";
                      statusEl.className = "text-success mt-2";
                      form.reset();
                    } else {
                      statusEl.textContent =
                        json.error || "Failed to send message.";
                      statusEl.className = "text-danger mt-2";
                      sendBtn.disabled = false;
                    }
                  } catch (err) {
                    statusEl.textContent = "Error sending message.";
                    statusEl.className = "text-danger mt-2";
                    sendBtn.disabled = false;
                  }
                }}
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small">First Name *</label>
                    <input name="first" className="form-control" required />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small">Last Name</label>
                    <input name="last" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small">Email *</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small">Phone</label>
                    <input name="phone" type="tel" className="form-control" />
                  </div>

                  <div className="col-12">
                    <label className="form-label small">Your message *</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-12 mt-3">
                    <div className="contact-buttons">
                      <button
                        ref={sendBtnRef}
                        type="submit"
                        className="btn btn-outline-danger"
                      >
                        Send Message
                      </button>

                      <a
                        href="tel:+919705470700"
                        className="btn btn-outline-dark"
                      >
                        Call +91 97054 70700
                      </a>
                    </div>

                    <div ref={statusRef} className="contact-status"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="map-wrap mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3872.30551163984!2d80.156304!3d13.940406000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4da9fb8fa7cf7d%3A0x2108ae26f69af447!2sMarvel%20organic%20and%20agri%20farms!5e0!3m2!1sen!2sus!4v1765704369315!5m2!1sen!2sus"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
