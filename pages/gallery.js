import { useState } from "react";
import LightboxModal from "../components/LightboxModal";
import ContactSection from "../components/contactSection";
import SEO from "../components/SEO";

export default function Gallery() {
  const images = [
    { src: "/Paddy_fields.jpg", title: "Paddy Fields / Farms" },
    { src: "/farmers.png", title: "Our Farmers at Work" },
    { src: "/isolated_fields.png", title: "Isolated Island Fields" },
    { src: "/landView_drone.jpg", title: "Organic Farm Fields" },
    { src: "/Hen.jpg", title: "Free Range Hens" },
    { src: "/eggs.jpg", title: "Farm Fresh Eggs" },
    { src: "/jayamrutha.png", title: "Jeevamrutham Mixing" },
    { src: "/mango_land-v2.png", title: "Mango Farm" },
    { src: "/bangenpalli.png", title: "Bangenpalli Mangoes" },
    { src: "/neem_fertilizer.png", title: "Neem Fertilizer" },
    { src: "/cows.png", title: "300+ Cows" },
    { src: "/beach_access.png", title: "beach Access" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <SEO
        title="Gallery | Ryan Organic Farms"
        description="A visual glimpse of our organic farms, free-range hens, paddy fields, and sustainable farming practices."
      />
      <div className="container py-5">
        <h6 className="text-center text-muted">Gallery</h6>
        <h2 className="text-center mb-4">A Glimpse of Our Farm</h2>
        <div className="gallery-divider-wrap">
          <div className="gallery-divider" />
        </div>

        <div className="row g-4">
          {images.map((img, i) => (
            <div key={i} className="col-12 col-md-4">
              <div
                className="gallery-thumb-wrap"
                onClick={() => setActiveIndex(i)}
              >
                <img
                  src={img.src}
                  className="img-fluid gallery-thumb"
                  alt={img.title}
                />
                <div className="gallery-caption">{img.title}</div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <ContactSection />
        {activeIndex !== null && (
          <LightboxModal
            images={images}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            setIndex={setActiveIndex}
          />
        )}
      </div>
    </>
  );
}
