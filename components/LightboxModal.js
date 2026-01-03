export default function LightboxModal({ images, index, setIndex, onClose }) {
  const next = () => setIndex((index + 1) % images.length);

  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="lightbox-overlay">
      <button className="lb-close" onClick={onClose}>
        ✕
      </button>
      <button className="lb-prev" onClick={prev}>
        ‹
      </button>

      <div className="lb-content">
        <img src={images[index].src} alt={images[index].title} />
        <h3>{images[index].title}</h3>
      </div>

      <button className="lb-next" onClick={next}>
        ›
      </button>
    </div>
  );
}
