import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Scene from "./Scene";

export default function App() {
  return (
    <Canvas
      gl={{
        antialias: false
        // powerPreference: "low-power"
      }}
      dpr={Math.max(window.devicePixelRatio, 2)}
    >
      <Suspense fallback={null}>
        <Scene />
        <Preload />
      </Suspense>
    </Canvas>
  );
}
