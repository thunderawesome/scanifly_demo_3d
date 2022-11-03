/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Drone(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/drone.glb");
  const { actions } = useAnimations(animations, group);
  React.useEffect(() => {
    actions.BL_propeller.setDuration(0.1);
    actions.FL_propeller.setDuration(0.1);
    actions.BR_propeller.setDuration(0.1);
    actions.FR_propeller.setDuration(0.1);
    actions.BL_propeller.play();
    actions.FL_propeller.play();
    actions.BR_propeller.play();
    actions.FR_propeller.play();
  });

  const { viewport } = useThree();
  // viewport = canvas in 3d units (meters)

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    group.current.position.set(x, y);
    group.current.rotation.set(0, x, 0);
  });

  return (
    <group ref={group} {...props} dispose={null} rotation={[0, 0, 0]}>
      <group name="Scene">
        <group name="dron_2_body_root" position={[0.12, -0.25, 0]} scale={0.01}>
          <group
            name="dron_2_body"
            position={[11.85, 0, 0]}
            rotation={[Math.PI, 0, 0]}
          >
            <mesh
              name="Mesh"
              castShadow
              receiveShadow
              geometry={nodes.Mesh.geometry}
              material={materials.Emission}
            />
            <mesh
              name="Mesh_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh_1.geometry}
              material={materials.Drone}
            />
            <group
              name="BL_propeller"
              position={[98.4, -61.15, 118.19]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <mesh
                name="Mesh002"
                castShadow
                receiveShadow
                geometry={nodes.Mesh002.geometry}
                material={materials.Emission}
              />
              <mesh
                name="Mesh002_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh002_1.geometry}
                material={materials.Drone}
              />
            </group>
            <group
              name="BR_propeller"
              position={[-98.4, -61.15, 118.19]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <mesh
                name="Mesh003"
                castShadow
                receiveShadow
                geometry={nodes.Mesh003.geometry}
                material={materials.Emission}
              />
              <mesh
                name="Mesh003_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh003_1.geometry}
                material={materials.Drone}
              />
            </group>
            <mesh
              name="camera"
              castShadow
              receiveShadow
              geometry={nodes.camera.geometry}
              material={materials.Drone}
              position={[0.18, 38.89, 0.47]}
            />
            <group
              name="FL_propeller"
              position={[98.4, -61.15, -118.19]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <mesh
                name="Mesh005"
                castShadow
                receiveShadow
                geometry={nodes.Mesh005.geometry}
                material={materials.Emission}
              />
              <mesh
                name="Mesh005_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh005_1.geometry}
                material={materials.Drone}
              />
            </group>
            <group
              name="FR_propeller"
              position={[-98.4, -61.15, -118.19]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <mesh
                name="Mesh004"
                castShadow
                receiveShadow
                geometry={nodes.Mesh004.geometry}
                material={materials.Emission}
              />
              <mesh
                name="Mesh004_1"
                castShadow
                receiveShadow
                geometry={nodes.Mesh004_1.geometry}
                material={materials.Drone}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/drone.glb");
