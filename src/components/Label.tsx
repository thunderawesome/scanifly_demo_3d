import {
  animated,
  useSpring,
  useSpringRef,
  useChain,
  useTransition
} from "@react-spring/three";
import { Text } from "@react-three/drei";
import { useCallback } from "react";

const AnimatedText = animated(Text);
const labels = [
  "EPAM Launches Ukraine Assistance Fund",
  "Advancing EPAM’s Ongoing Humanitarian Efforts in Ukraine",
  "Pages",
  "Apps"
];

export const Label = ({ step, delay, ...props }) => {
  const duration = delay / 2;

  const spring = useSpring({
    to: useCallback(
      async (next, cancel) => {
        await next({ position: [10, props.y, 0] });
        await next({ position: [0, props.y, 0] });
        await next({ position: [-10, props.y, 0] });
        await next({ position: [0, props.y, 0] });
      },
      [props.y]
    ),
    from: { position: [0, props.y, 0] },
    config: { precision: 0.0001 }
  });

  return (
    <AnimatedText {...props} fontSize={0.5} {...spring}>
      {labels[step]}
    </AnimatedText>
  );
};

export default Label;
