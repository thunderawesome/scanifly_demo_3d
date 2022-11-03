import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import fonts from "../Fonts";
import { MathUtils } from "three";

export default function Words({ ...props }) {
  const { width, height, left } = useThree((state) => state.viewport);
  const group = useRef<any>(null!);
  const xOffset = left + 2;
  const fontSizeMod = MathUtils.clamp(width * 0.05, 0.3, 0.5);
  const fontWidthMod = MathUtils.clamp(width * 0.8, 3, 10);
  return (
    <group ref={group} position={[0, 0, 0]}>
      <group>
        <Text
          font={fonts["Poppins500"]}
          fontSize={fontSizeMod - 0.025}
          color={"black"}
          position={[0, -height + 3.5, 1]}
          scale={[1, 1, 1]}
          textAlign={"left"}
          maxWidth={fontWidthMod}
          whiteSpace={"normal"}
          {...props}
        >
          Decrease Onsite Time by Up to 90%
        </Text>
        <Text
          font={fonts["PoppinsLight"]}
          fontSize={fontSizeMod - 0.25}
          color={"black"}
          position={[0.25, -height + 1.25, 1]}
          scale={[1, 1, 1]}
          textAlign={"left"}
          maxWidth={fontWidthMod}
          {...props}
        >
          98% of solar professionals conduct a technical onsite survey before
          construction; over 50% do so before closing a sale. With current
          methods, solar companies still spend hours using ladders and
          hand-measuring rooftops, which slows down pipelines, hurts accuracy,
          and increases safety risks. Scanifly’s solar design software uses
          drone technology and 3D modeling tools to eliminate roof climbs,
          decrease onsite time by up to 90%, and increase design accuracy to
          avoid redesigns, change orders, or delays on install day.
        </Text>
        <Text
          font={fonts["Poppins500"]}
          fontSize={fontSizeMod - 0.1}
          color={"black"}
          position={[0, -height - 2, 2]}
          scale={[1, 1, 1]}
          textAlign={"left"}
          maxWidth={fontWidthMod - 2}
          whiteSpace={"normal"}
          {...props}
        >
          Why use 19th century tools for the 21st century’s energy source?
        </Text>
        <Text
          font={fonts["Poppins500"]}
          fontSize={fontSizeMod - 0.2}
          color={"black"}
          position={[-xOffset, -height - 5, 1.5]}
          scale={[1, 1, 1]}
          textAlign={"left"}
          maxWidth={fontWidthMod - 2}
          whiteSpace={"normal"}
          {...props}
        >
          The Old Way
        </Text>
        <Text
          font={fonts["PoppinsLight"]}
          fontSize={fontSizeMod - 0.25}
          color={"black"}
          position={[-xOffset - 0.75, -height - 5.5, 1]}
          scale={0.75}
          textAlign={"left"}
          maxWidth={fontWidthMod - 4}
          {...props}
        >
          Ladders, tape measures, handwritten notes, and handheld shading
          equipment can lead to inaccuracies, errors, and guesswork.
        </Text>
        <Text
          font={fonts["Poppins500"]}
          fontSize={fontSizeMod - 0.2}
          color={"black"}
          position={[xOffset - 1, -height - 5.25, 2.25]}
          scale={[1, 1, 1]}
          textAlign={"left"}
          maxWidth={fontWidthMod - 2}
          whiteSpace={"normal"}
          {...props}
        >
          The New Way
        </Text>
        <Text
          font={fonts["PoppinsLight"]}
          fontSize={fontSizeMod - 0.25}
          color={"black"}
          position={[xOffset - 0.6, -height - 6, 1.5]}
          scale={0.75}
          textAlign={"left"}
          maxWidth={fontWidthMod - 4}
          {...props}
        >
          Drones and 3D modeling software streamline the process, while
          improving time, safety, and design accuracy.
        </Text>
        <Text
          font={fonts["Poppins500"]}
          fontSize={fontSizeMod}
          color={"white"}
          position={[0, -height * 2 - height / 4, 0.5]}
          scale={[1, 1, 1]}
          textAlign={"left"}
          maxWidth={fontWidthMod}
          outlineColor={"black"}
          outlineWidth={0.025}
          {...props}
        >
          Triple your survey volume, while staying off the roof.
        </Text>
      </group>
    </group>
  );
}
