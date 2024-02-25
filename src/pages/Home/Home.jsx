import { Link } from "react-router-dom";
import { HomeImg } from "../../assets";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__text">
          <h1 className="home__heading">Hi, I&apos;m Manuel</h1>
          <p>
            I&apos;m a Frontend Web Developer,
            <br />I develop Web and mobile applications.
          </p>
          <Link to="/contact" className="home__link">
            Contact me
          </Link>
        </div>
        <div className="home__img">
          <img src={HomeImg} alt="Laptop image" />
        </div>
      </div>

      <span className="line"></span>

      <div className="services">
        <p className="services__text">What i offer</p>
        <h2 className="services__heading">Services.</h2>
        <p className="services__paragraph">
          I provide a range of services, including website creation,
          maintenance, and enhancement. I specialize in programming languages,
          ensuring visually appealing and functional sites. My expertise extends
          to responsive design, e-commerce development, and mobile optimization.
          I also handle database integration, content management systems, and
          adhere to security standards, contributing to seamless user
          experiences and efficient online platforms for businesses.
        </p>
      </div>
    </>
  );
};

export default Home;
