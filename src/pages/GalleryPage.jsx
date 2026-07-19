import "./GalleryPage.css";
import { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaArrowDown } from "react-icons/fa";
import GalleryModal from "../components/Gallery/GalleryModal";
import galleryHero from "../assets/images/gallery/Gallery-hero.jpeg";
import galleryData from "../data/galleryData";
const GalleryPage = () => {
  const categories = [
    "All",
    "Mountain",
    "Beach",
    "City",
    "Adventure",
    "Nature",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const filteredImages = galleryData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.country.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const scrollToGallery = () => {
    document
      .getElementById("gallery-content")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="gallery-page">
      <section className="gallery-hero">
        <img src={galleryHero} alt="Gallery Hero" />
        <div className="hero-overlay">
          <span>Travel Gallery</span>
          <h1>Every Picture Tells A Story Worth Exploring</h1>
          <p>
            Discover breathtaking destinations and unforgettable memories from
            around the world.
          </p>
          <button onClick={scrollToGallery}>
            Explore Collection
            <FaArrowDown />
          </button>
        </div>
      </section>
      <section id="gallery-content">
        <div className="gallery-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search destination..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="gallery-grid">
          {filteredImages.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>
                  <FaMapMarkerAlt />
                  {item.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
export default GalleryPage;
