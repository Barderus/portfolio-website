import { useEffect, useState } from "react";

function PatternPreview({ visualType }) {
  switch (visualType) {
    case "chart":
      return (
        <div className="preview-pattern preview-chart" aria-hidden="true">
          <span className="preview-grid preview-grid-a" />
          <span className="preview-grid preview-grid-b" />
          <span className="preview-line preview-line-a" />
          <span className="preview-line preview-line-b" />
          <span className="preview-dot preview-dot-a" />
          <span className="preview-dot preview-dot-b" />
        </div>
      );
    case "route":
      return (
        <div className="preview-pattern preview-route" aria-hidden="true">
          <span className="preview-route-line" />
          <span className="preview-route-node preview-route-node-a" />
          <span className="preview-route-node preview-route-node-b" />
          <span className="preview-route-node preview-route-node-c" />
          <span className="preview-route-grid" />
        </div>
      );
    case "dashboard":
      return (
        <div className="preview-pattern preview-dashboard" aria-hidden="true">
          <span className="preview-panel preview-panel-a" />
          <span className="preview-panel preview-panel-b" />
          <span className="preview-panel preview-panel-c" />
          <span className="preview-bar preview-bar-a" />
          <span className="preview-bar preview-bar-b" />
          <span className="preview-bar preview-bar-c" />
        </div>
      );
    case "network":
      return (
        <div className="preview-pattern preview-network" aria-hidden="true">
          <span className="preview-connection preview-connection-a" />
          <span className="preview-connection preview-connection-b" />
          <span className="preview-node preview-node-a" />
          <span className="preview-node preview-node-b" />
          <span className="preview-node preview-node-c" />
          <span className="preview-node preview-node-d" />
        </div>
      );
    case "bracket":
      return (
        <div className="preview-pattern preview-bracket" aria-hidden="true">
          <span className="preview-branch preview-branch-a" />
          <span className="preview-branch preview-branch-b" />
          <span className="preview-branch preview-branch-c" />
          <span className="preview-branch preview-branch-d" />
          <span className="preview-branch preview-branch-e" />
        </div>
      );
    case "signal":
      return (
        <div className="preview-pattern preview-signal" aria-hidden="true">
          <span className="preview-wave preview-wave-a" />
          <span className="preview-wave preview-wave-b" />
          <span className="preview-wave preview-wave-c" />
        </div>
      );
    case "constellation":
      return (
        <div className="preview-pattern preview-constellation" aria-hidden="true">
          <span className="preview-star preview-star-a" />
          <span className="preview-star preview-star-b" />
          <span className="preview-star preview-star-c" />
          <span className="preview-star preview-star-d" />
          <span className="preview-star-link preview-star-link-a" />
          <span className="preview-star-link preview-star-link-b" />
        </div>
      );
    case "document":
    default:
      return (
        <div className="preview-pattern preview-document" aria-hidden="true">
          <span className="preview-sheet" />
          <span className="preview-copy preview-copy-a" />
          <span className="preview-copy preview-copy-b" />
          <span className="preview-copy preview-copy-c" />
        </div>
      );
  }
}

function VisualPreview({ title, visualType = "chart", imageSrc, imageSources }) {
  const slides = imageSources?.length ? imageSources : imageSrc ? [imageSrc] : [];
  const hasSlides = slides.length > 0;
  const hasMultipleSlides = slides.length > 1;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0);
  }, [slides.length]);

  useEffect(() => {
    if (!hasMultipleSlides) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleSlides, slides.length]);

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div className={`visual-preview visual-preview-${visualType}`}>
      {hasSlides ? (
        <>
          <img
            className="visual-preview-image"
            src={slides[activeSlide]}
            alt={`${title} preview ${activeSlide + 1}`}
          />

          {hasMultipleSlides ? (
            <>
              <button
                className="visual-preview-nav visual-preview-nav-prev"
                type="button"
                aria-label={`Previous ${title} image`}
                onClick={showPreviousSlide}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                className="visual-preview-nav visual-preview-nav-next"
                type="button"
                aria-label={`Next ${title} image`}
                onClick={showNextSlide}
              >
                <span aria-hidden="true">›</span>
              </button>
              <div className="visual-preview-dots" aria-label={`${title} image gallery`}>
                {slides.map((slide, index) => (
                  <button
                    key={`${slide}-${index}`}
                    className={`visual-preview-dot${index === activeSlide ? " is-active" : ""}`}
                    type="button"
                    aria-label={`Show ${title} image ${index + 1}`}
                    aria-pressed={index === activeSlide}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : null}
        </>
      ) : (
        <PatternPreview visualType={visualType} />
      )}
      <div className="visual-preview-overlay">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default VisualPreview;
