export default function CustomHtml() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          <div className="container">
            <h1>The Only Drone-Based Solar Design Software</h1>
            <button className="button1">Schedule a Demo</button>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", top: "185vh", left: "10vw" }}>
        <button className="button1">Calculate ROI</button>
      </div>

      {/* <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>to</h1>
      <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>be</h1>
      <h1
        style={{
          position: "absolute",
          top: "198.5vh",
          left: "0.5vw",
          fontSize: "40vw"
        }}
      >
        home
      </h1> */}
    </>
  );
}
