import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  /* ===== Detect mobile ===== */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 992);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ===== Hide / show navbar on scroll (DESKTOP ONLY) ===== */
  useEffect(() => {
    if (isMobile) return;

    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".site-navbar");

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        navbar?.classList.add("nav-hidden");
      } else {
        navbar?.classList.remove("nav-hidden");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  /* ===== Close mobile menu ===== */
  const closeMenu = () => {
    const menu = document.querySelector(".navbar-collapse");
    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg site-navbar">
      <div className="container">
        {/* ===== BRAND ===== */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center brand-wrap"
        >
          <img
            src="/Ryan_logo.png"
            alt="Ryan Organic Farms"
            className="brand-logo"
          />
          <div className="brand-text">
            <div className="brand-title">Ryan</div>
            <div className="brand-sub">Organic Farms</div>
          </div>
        </Link>

        {/* ===== TOGGLER ===== */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
          aria-controls="navmenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* ===== MENU ===== */}
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto align-items-center">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Produce", href: "/produce" },
              { label: "Gallery", href: "/gallery" },
              { label: "FAQ", href: "/faq" },
            ].map(({ label, href }) => (
              <li className="nav-item" key={href}>
                <Link
                  href={href}
                  className={`nav-link ${
                    router.pathname === href ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <Link
                href="/#contact"
                className={`nav-link ${
                  router.asPath === "/#contact" ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
