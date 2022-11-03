import { useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, Image } from "@react-three/drei";
import { MathUtils } from "three";
import Images from "./components/Images";
import Words from "./components/Words";
import CustomHtml from "./components/CustomHtml";
import Drone from "./models/Drone";

export default function Scene({ ...props }) {
  const { left, top } = useThree((state) => state.viewport);

  const speed = 0.75;
  useFrame(({ mouse, camera }) => {
    camera.position.x = MathUtils.lerp(
      camera.position.x,
      mouse.x * speed,
      0.01
    );
    camera.position.y = MathUtils.lerp(
      camera.position.y,
      mouse.y * speed,
      0.01
    );
    camera.rotation.y = MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.001
    );
  });

  return (
    <>
      <directionalLight intensity={1} />
      <Drone position={[0, 0, 3]} scale={0.25} />
      <ScrollControls damping={4} pages={3.25}>
        <Scroll html>
          <CustomHtml />
        </Scroll>
        <Scroll>
          <Images />
          <Words />
        </Scroll>
      </ScrollControls>
    </>
  );
}
