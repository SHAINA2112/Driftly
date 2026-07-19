import "./SectionHeading.css";
const SectionHeading = ({ title, description }) => {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default SectionHeading;
