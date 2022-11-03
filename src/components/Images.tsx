import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Image, useScroll } from "@react-three/drei";
import Video from "./Video";
import Plane from "./Plane";
import { MathUtils } from "three";

export default function Images() {
  const { width, height, left } = useThree((state) => state.viewport);
  const xOffset = left + 2;
  let widthMod = MathUtils.clamp(width * 0.8, 0.25, 2.5);
  const group = useRef<any>(null!);
  const data = useScroll();
  useFrame(() => {
    group.current.children[0].material.zoom =
      0.1 + data.range(1.15 / 2, 1 / 2) / 2;
    group.current.children[2].material.zoom =
      0.5 + data.range(1.15 / 2, 1 / 2) / 2;
    group.current.children[3].material.zoom =
      0.5 + data.range(1.15 / 2, 1 / 2) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 2, 1 / 2) / 2;
    // group.current.children[4].material.zoom =
    //   1 + data.range(1.25 / 3, 1 / 3) / 1;
    // group.current.children[].material.zoom =
    //   1 + data.range(1.8 / 3, 1 / 3) / 3;
    // group.current.children[5].material.grayscale =
    //   1 - data.range(1.6 / 3, 1 / 3);
    // group.current.children[6].material.zoom =
    //   1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Video
        position={[0, 0.84, 0]}
        scale={[width, height, 1]}
        url="img/scanifly_footage.mp4"
      />
      <Plane
        position={[0, -height - 4, 0.01]}
        scale={[width, height, 1]}
        toneMapped={false}
        color={"hsl(198, 22.73%, 91.37%)"}
      />
      <Image
        position={[-xOffset, -height - 3.5, 1.5]}
        scale={widthMod}
        toneMapped={false}
        url="/img/surveyoronroof.png"
      />
      <Image
        position={[xOffset - 1, -height - 4, 2]}
        scale={widthMod}
        toneMapped={false}
        url="/img/surveyorflyingdrone.png"
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2]}
        toneMapped={false}
        color={"rgb(.25,.25,.25)"}
        url="/img/SolarSourceCochisetrail.png"
      />

      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2]}
        toneMapped={false}
        color={"rgb(.25,.25,.25)"}
        url="/img/SolarSourceCochisetrail.png"
      />
    </group>
  );
}
