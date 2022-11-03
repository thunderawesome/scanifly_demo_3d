import { useVideoTexture } from "@react-three/drei";
import { useRef } from "react";

function VideoMaterial({ ...props }) {
  const texture = useVideoTexture(props.url, null);
  return <meshBasicMaterial map={texture} />;
}

export default function Video({ ...props }) {
  const ref = useRef<any>(null!);
  return (
    <mesh ref={ref} {...props}>
      <planeGeometry attach="geometry" />
      <VideoMaterial url={props.url} />
    </mesh>
  );
}
