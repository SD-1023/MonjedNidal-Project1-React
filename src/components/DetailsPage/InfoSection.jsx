import DetailsAside from "./DetailsAside/DetailsAside";
import { useRef } from "react";

function InfoSection({ topicDetails, setLeftSpace, setWidth }) {
  const infoRef = useRef(null);
  function updateLocation() {
    if (infoRef.current) {
      const rect = infoRef.current.getBoundingClientRect();
      const leftSpace = rect.left;
      const width = rect.width;

      setLeftSpace(leftSpace);
      if (window.innerWidth > 1010) {
        setWidth(width);
      }
    }
  }
  updateLocation();
  window.addEventListener("resize", updateLocation);

  return (
    <section className="infoSection">
      <div className="infoContainer d-flex container">
        <div ref={infoRef} className="info">
          <span className="topicCategory">{topicDetails.category}</span>
          <h2 className="detailsLanguage">{topicDetails.topic}</h2>
          <div className="stars d-flex align-center">
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star"></ion-icon>
            <ion-icon class="star" name="star-outline"></ion-icon>
          </div>
          <p className="topicDescription">{topicDetails.description}</p>
        </div>
        <DetailsAside topicDetails={topicDetails} />
      </div>
    </section>
  );
}

export default InfoSection;
