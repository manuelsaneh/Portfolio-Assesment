import ContactCard from "../../components/ContactCard/ContactCard";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__text">
        <h2 className="contact__heading">Contact me.</h2>
        <p>
          Let&apos;s collaborate in crafting your next
          <br /> website or mobile application.
        </p>
      </div>
      <div className="contact__card">
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
