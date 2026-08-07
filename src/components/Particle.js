import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle({ lightMode }) {
  const [init, setInit] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => setInit(true))
      .catch((err) => {
        console.error("Gagal inisialisasi tsParticles engine:", err);
        setInit(false);
      });
  }, []);

  if (!init) return null;

  const baseColor = lightMode ? "#000000" : "#ffffff";

  const options = {
    fpsLimit: 60,
    particles: {
      number: { value: 120, density: { enable: true, area: 800 } },
      color: { value: baseColor },
      opacity: { value: 0.15 },
      size: { value: { min: 1, max: 5 } },
      links: { enable: true, color: baseColor, distance: 140, opacity: 0.1 },
      collisions: { enable: true },
      move: {
        enable: true,
        random: true,
        speed: 1,
        direction: "top",
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "attract" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        attract: { distance: 150, duration: 0.4, factor: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles id="tsparticles" className="mi-home-particle" options={options} />
  );
}

export default Particle;
