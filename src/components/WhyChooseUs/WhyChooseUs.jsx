import "../WhyChooseUs/WhyChooseUs.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeatureCard from "./FeatureCard";
import features from "../../data/featuresData";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose-us">
      {/* Reusable component SectionHeading  */}
      <SectionHeading
        title="Why Travel With Driftly"
        description="From personalized tours to realiable support, we are making every journey seamless, safe and worthy living."
      />
      
      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};
export default WhyChooseUs;
