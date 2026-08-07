import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle({ lightMode }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // DIUBAH: Menggunakan standar opsi tsParticles v3
  const paramConfig = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#ffffff",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: { min: 1, max: 5 }, // Menggantikan random: true
        animation: {                // Menggantikan 'anim'
          enable: true,
          speed: 4,
          sync: false,
        },
      },
      links: {                      // Menggantikan 'line_linked'
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        outModes: {                 // Menggantikan 'out_mode'
          default: "out",
        },
      },
    },
  };

  const paramConfigLight = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 160,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#000000",
      },
      opacity: {
        value: 0.1,
      },
      size: {
        value: { min: 0.3, max: 5 }, // Menggantikan random: true
        animation: {                  // Menggantikan 'anim'
          enable: true,
          speed: 4,
          sync: false,
        },
      },
      links: {                        // Menggantikan 'line_linked'
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        outModes: {                   // Menggantikan 'out_mode'
          default: "out",
        },
      },
    },
  };

  return (
    init && (
      <Particles
        id="tsparticles"
        className="mi-home-particle"
        options={lightMode ? paramConfigLight : paramConfig}
      />
    )
  );
}

export default Particle;
