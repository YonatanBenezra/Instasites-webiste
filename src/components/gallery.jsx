import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/100_ Responsive-Websites-small.png", title: "100% responsive websites" },
    { thumb: "img/portfolio/Always-Up-to-date-small.png", title: "Always up to date" },
    { thumb: "img/portfolio/Available-247-small.png", title: "Available 24/7" },
    { thumb: "img/portfolio/Elegant-Design-small.png", title: "Elegant design" },
    { thumb: "img/portfolio/No-ads-small.png", title: "No Ads" },
    { thumb: "img/portfolio/No-hassle-small.png", title: "No Hassle" },
    { thumb: "img/portfolio/Real-people-small.png", title: "Real People" },
    { thumb: "img/portfolio/Real-websites-small.png", title: "Real Websites" },
    { thumb: "img/portfolio/SEO-Friendly-small.png", title: "Sea Friendly" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div key={index} onClick={() => openImageViewer(index)} className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                    <img src={thumb} className="img-responsive" alt="Project Title" />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
