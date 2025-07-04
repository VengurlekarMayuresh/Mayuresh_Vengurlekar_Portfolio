import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const VantaClouds = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });

    const loadVantaClouds = async () => {
      if (!window.VANTA || !window.VANTA.CLOUDS) {
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"
        );
      }

      if (!vantaEffect && vantaRef.current && window.VANTA?.CLOUDS) {
        setVantaEffect(
          window.VANTA.CLOUDS({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
             skyColor: 0xa7d7f9,     // Soft cold blue sky
cloudColor: 0xddeeff,
// sunColor: 0xbbddff,  // soft warm sun (can be darker)
  sunColor: 0x189fff,
  sunGlareColor: 0x309dff,
  sunlightColor: 0x2a9fe1,
            speed: 0.8,
          })
        );
      }
    };

    loadVantaClouds();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-full h-screen -z-10 bg-black"
    />
  );
};

export default VantaClouds;
