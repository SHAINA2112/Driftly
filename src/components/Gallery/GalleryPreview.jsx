import "./GalleryPreview.css";
import { Link } from "react-router-dom";
import galleryData from "../../data/galleryData";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaArrowRight } from "react-icons/fa";
const GalleryPreview = () => {
  const featuredImages = galleryData.filter((image) => image.featured);
  return (
    <section className="gallery-preview" id="gallery">
      <SectionHeading
        title="Inspired By Every Journey"
        description="A glimpse into extraordinary destinations, unforgettable adventures, and moments that define the joy of travel."
      />
      <div className="preview-grid">
        {featuredImages.map((item) => (
          <div className="preview-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.country}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="gallery-button">
        <Link to="/gallery">
          Explore Full Gallery
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};
export default GalleryPreview;
