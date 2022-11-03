import React from "react";

const useCDDState = (delay: number, stepCount: number) => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(
      () => setStep((state) => (state + 1) % stepCount),
      delay
    );
    return () => clearTimeout(t);
  }, [delay, stepCount]);

  return step;
};

export default useCDDState;
