import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const Backdrop = () => {
  const shadowRef = useRef();
  return (
    <AccumulativeShadows
      ref={shadowRef}
      temporal //smooths the edges of the shadow overtime
      frames={60} //render in 60 frames
      alphaTest={0.85} //set the transparency of the shadow
      scale={10}
      rotation={[Math.PI / 2, 0, 0]} // this is the angle of light source (so, shadow is falling to a certain side)
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
