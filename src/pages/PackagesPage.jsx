import "./PackagesPage.css";
import { useMemo, useState } from "react";
import { FaLocationDot, FaMagnifyingGlass, FaClock, FaUsers, FaStar,} from "react-icons/fa6";
import packageHero from "../assets/images/Packages/package-hero.jpeg";
import packageData from "../data/packageData";
import PackageModal from "../components/Packages/PackageModal";
const PackagesPage = () => {
  const categories = [
    "All",
    "Adventure",
    "Beach",
    "Mountain",
    "Luxury",
    "Nature",
    "City",
    "Culture",
  ];
  const durations = ["All", "4 Days", "5 Days", "6 Days", "7 Days", "8 Days"];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [duration, setDuration] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredPackages = useMemo(() => {
    return packageData.filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.destination.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || item.category === category;
      const matchDuration = duration === "All" || item.duration === duration;
      return matchSearch && matchCategory && matchDuration;
    });
  }, [search, category, duration]);
  const currentIndex = filteredPackages.findIndex(
    (item) => item.id === selectedPackage?.id,
  );
  const openModal = (item) => {
    setSelectedPackage(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const nextPackage = () => {
    const next = filteredPackages[(currentIndex + 1) % filteredPackages.length];
    setSelectedPackage(next);
  };
  const prevPackage = () => {
    const prev =
      filteredPackages[
        (currentIndex - 1 + filteredPackages.length) % filteredPackages.length
      ];
    setSelectedPackage(prev);
  };
  return (
    <section className="packages-page">
      {/* Hero */}
      <section className="packages-hero">
        <img src={packageHero} alt="Packages" />
        <div className="hero-overlay">
          <span>Travel Packages</span>
          <h1>Find The Perfect Package For Your Next Adventure</h1>
          <p>
            Carefully crafted travel experiences designed for unforgettable
            journeys.
          </p>
        </div>
      </section>
      {/* Search */}
      <div className="package-search">
        <FaMagnifyingGlass />
        <input
          type="text"
          placeholder="Search package..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Category */}
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
      {/* Duration */}
      <div className="filter-group">
        {durations.map((item) => (
          <button
            key={item}
            className={duration === item ? "active" : ""}
            onClick={() => setDuration(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {/* Grid */}
      <div className="packages-grid">
        {filteredPackages.map((pkg) => (
          <div
            className="package-card"
            key={pkg.id}
            onClick={() => openModal(pkg)}
          >
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
              <span className="price">{pkg.price}</span>
            </div>
            <div className="package-content">
              <h3>{pkg.title}</h3>
              <p className="location">
                <FaLocationDot />
                {pkg.destination},{pkg.country}
              </p>
              <div className="package-meta">
                <span>
                  <FaClock />
                  {pkg.duration}
                </span>
                <span>
                  <FaUsers />
                  {pkg.people}
                </span>
                <span>
                  <FaStar />
                  {pkg.rating}
                </span>
              </div>
              <p className="description">{pkg.description}</p>
            </div>
          </div>
        ))}
      </div>
      <PackageModal
        isOpen={isModalOpen}
        currentPackage={selectedPackage}
        currentIndex={currentIndex}
        totalItems={filteredPackages.length}
        onClose={closeModal}
        onPrev={prevPackage}
        onNext={nextPackage}
      />
    </section>
  );
};
export default PackagesPage;
