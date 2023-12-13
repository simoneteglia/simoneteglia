import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrthographicCamera,
  OrbitControls,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import global from "../../global.json";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function DynamicBubbleCanvas({ windowSize }) {
  console.log(windowSize);
  if (windowSize > global.UTILS.TABLET_WIDTH) {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        <Canvas style={{ pointerEvents: "none" }}>
          <DesktopBubbles windowSize={windowSize} />
        </Canvas>
      </div>
    );
  } else if (windowSize < global.UTILS.TABLET_WIDTH) {
    return (
      <div style={{ width: "100%", height: "40%" }}>
        <Canvas>
          <MobileBubbles windowSize={windowSize} />
        </Canvas>
      </div>
    );
  } else return <></>;
}

const DesktopBubbles = ({ windowSize }) => {
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={30}>
        <a.ambientLight intensity={5} />
        <a.pointLight position-z={-15} intensity={2} color="#a42332" />
      </OrthographicCamera>
      <Suspense fallback={null}>
        <a.mesh position={[-20, 3, 4]} scale={6}>
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial color={"#2e3777"} metalness={0.2} roughness={0.7} />
        </a.mesh>
        <a.mesh position={[20, -5, 4.5]} scale={6}>
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial color={"#2e3777"} metalness={0.2} roughness={0.7} />
        </a.mesh>
        {Lights(windowSize)}
      </Suspense>
    </>
  );
};

const MobileBubbles = ({ windowSize }) => {
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 100]} zoom={30}>
        <a.ambientLight intensity={5} />
        <a.pointLight position-z={-20} intensity={2} color="#a42332" />
      </OrthographicCamera>
      <Suspense fallback={null}>
        <a.mesh position={[0, 0, 4.5]} scale={6}>
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial color={"#2e3777"} metalness={0.2} roughness={0.7} />
        </a.mesh>
        {Lights(windowSize)}
      </Suspense>
    </>
  );
};

const Lights = ({ windowSize }) => {
  const spotLightRightRef = useRef();
  const spotLightLeftRef = useRef();
  // useHelper(spotLightRightRef, SpotLightHelper, "red");
  // useHelper(spotLightLeftRef, SpotLightHelper, "green");

  useFrame(() => {
    if (spotLightRightRef && spotLightLeftRef) {
      spotLightRightRef.current.target.position.set(25, 0, 0);
      spotLightRightRef.current.target.updateMatrixWorld();
      spotLightLeftRef.current.target.position.set(-25, 0, 0);
      spotLightLeftRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      <spotLight
        intensity={30000}
        color={"#a42332"}
        position={[10, -20, 15]}
        angle={0.4}
        ref={spotLightRightRef}
      />
      <spotLight
        intensity={150000}
        color={"#a42332"}
        position={[10, -10, 30]}
        angle={windowSize > global.UTILS.TABLET_WIDTH ? 0.4 : 0.8}
        ref={spotLightLeftRef}
      />
      <ambientLight intensity={0.55} />
    </>
  );
};
