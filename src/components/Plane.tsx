import { useRef } from "react";

export default function Plane({ ...props }) {
  const ref = useRef<any>(null!);
  return (
    <mesh ref={ref} {...props}>
      <planeGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        toneMapped={false}
        color={props.color !== undefined ? props.color : "white"}
      />
    </mesh>
  );
}
