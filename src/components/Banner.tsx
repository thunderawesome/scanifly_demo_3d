import { Html } from "@react-three/drei";

const Banner = () => {
  return (
    <Html as="div" prepend>
      <div className="banner">
        <div className="grid-container">
          <div className="grid-item">
            <img alt="logo" className="logo" src="img/website-header.png"></img>
          </div>
          <div className="grid-item banner-text"></div>
          <div className="grid-item">
            <button className="button1">Log In</button>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Banner;
