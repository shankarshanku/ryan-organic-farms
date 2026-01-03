import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const left = useRef(null);
  const img = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(left.current, { y: 30, opacity: 0, duration: 0.8 }).from(
      img.current,
      { scale: 0.98, opacity: 0, duration: 1 },
      "-=0.5"
    );
    return () => tl.kill();
  }, []);

  return (
    <section className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-7" ref={left}>
            <h1 className="hero-title">Welcome to Ryan Organic Farms</h1>
            <p className="lead hero-sub">
              Pesticide-free, lovingly grown vegetables and fruits — delivered
              fresh to your doorstep.
            </p>
            <div className="mt-3">
              <a href="/produce" className="btn btn-success me-2">
                Our Produce
              </a>
              <a href="/contact" className="btn btn-outline-dark">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img
              ref={img}
              src="/hero-produce.jpg"
              alt="hero produce"
              className="img-fluid hero-img rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
