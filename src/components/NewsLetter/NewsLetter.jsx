import "../NewsLetter/NewsLetter.css";
import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { FaPaperPlane, FaCheck } from "react-icons/fa6";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = () => {
    if (!email.trim()) return;
    setSubscribed(true);

    //Resets after 3 seconds
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        {/* Reusable component SectionHeading  */}
        <SectionHeading
          title="Stay Inspired. Travel Smarter"
          description="Receive destination inspiration, exclusive travel offers and handpicked adventures delivered straight to you inbox."
        />
        <div className="newsletter-card">
          <div className="newsletter-input">
            <input
              type="email"
              placeholder="Enter your email.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            className={`newsletter-btn ${subscribed ? "success" : ""}`}
            onClick={handleSubscribe}
            disabled={subscribed}
          >
            {subscribed ? (
              <>
                <FaCheck /> You're In!
              </>
            ) : (
              <>
                Subscribe
                <FaPaperPlane />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
