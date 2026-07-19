import "./DestinationsPage.css";
import { useMemo, useState } from "react";
import { FaLocationDot, FaStar, FaMagnifyingGlass } from "react-icons/fa6";
import destinationsHero from "../assets/images/destination/destinations-hero.jpeg";
import destinationData from "../data/destinationsData";
import DestinationModal from "../components/Destinations/DestinationsModal";
const DestinationsPage = () => {
  const continents = [
    "All",
    "Asia",
    "Europe",
    "North America",
    "South America",
  ];
  const categories = [
    "All",
    "Mountain",
    "Beach",
    "City",
    "Adventure",
    "Nature",
    "Island",
  ];
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("All");
  const [category, setCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredDestinations = useMemo(() => {
    return destinationData.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase());
      const matchContinent =
        continent === "All" || item.continent === continent;
      const matchCategory = category === "All" || item.category === category;
      return matchSearch && matchContinent && matchCategory;
    });
  }, [search, continent, category]);
  const currentIndex = filteredDestinations.findIndex(
    (item) => item.id === selectedDestination?.id,
  );
  const openModal = (item) => {
    setSelectedDestination(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
    document.body.style.overflow = "auto";
  };
  const nextDestination = () => {
    const next =
      filteredDestinations[(currentIndex + 1) % filteredDestinations.length];
    setSelectedDestination(next);
  };
  const prevDestination = () => {
    const prev =
      filteredDestinations[
        (currentIndex - 1 + filteredDestinations.length) %
          filteredDestinations.length
      ];
    setSelectedDestination(prev);
  };
  return (
    <section className="destinations-page">
      {/* Hero */}
      <section className="destinations-hero">
        <img src={destinationsHero} alt="Destinations" />
        <div className="hero-overlay">
          <span>Top Destinations</span>
          <h1>Explore Beautiful Places Around The World</h1>
          <p>
            Discover hand-picked destinations crafted for unforgettable
            journeys.
          </p>
        </div>
      </section>
      {/* Search */}
      <div className="destination-search">
        <FaMagnifyingGlass />
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Continents */}
      <div className="filter-group">
        {continents.map((item) => (
          <button
            key={item}
            className={continent === item ? "active" : ""}
            onClick={() => setContinent(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {/* Categories */}
      <div className="filter-group">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {/* Grid */}
      <div className="destination-page-grid">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((item) => (
            <div
              className="destination-page-card"
              key={item.id}
              onClick={() => openModal(item)}
            >
              <img src={item.image} alt={item.title} />
              <div className="destination-page-overlay">
                <div className="top">
                  <span>
                    <FaStar />
                    {item.rating}
                  </span>
                  <span>{item.price}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    <FaLocationDot />
                    {item.country}
                  </p>
                  <small>{item.duration}</small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No Destinations Found</h3>
            <p>Try another search or change your filters.</p>
          </div>
        )}
      </div>
      <DestinationModal
        isOpen={isModalOpen}
        currentDestination={selectedDestination}
        currentIndex={currentIndex}
        totalItems={filteredDestinations.length}
        onClose={closeModal}
        onPrev={prevDestination}
        onNext={nextDestination}
      />
    </section>
  );
};
export default DestinationsPage;
