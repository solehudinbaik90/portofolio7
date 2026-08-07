import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle({ lightMode }) {
  const [init, setInit] = useState(false);

  // Inisialisasi engine hanya sekali saat komponen pertama kali dipasang
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Membungkus konfigurasi dengan useMemo agar tsParticles tidak re-init terus menerus
  const options = useMemo(() => {
    const baseConfig = {
      fpsLimit: 60,
      particles: {
        number: {
          value: 160,
          density: { enable: false },
        },
        opacity: { value: 0.1 },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            enable: true,
            speed: 4,
            sync: false,
          },
        },
        links: { enable: false },
        move: {
          enable: true,
          speed: 1,
          direction: "top",
          outModes: { default: "out" },
        },
      },
    };

    // Sesuaikan warna berdasarkan lightMode
    if (lightMode) {
      baseConfig.particles.color = { value: "#000000" };
      baseConfig.particles.size.value.min = 0.3;
    } else {
      baseConfig.particles.color = { value: "#ffffff" };
      baseConfig.particles.size.value.min = 1;
    }

    return baseConfig;
  }, [lightMode]);

  // JANGAN render apa pun jika engine belum siap (Mencegah crash .add() pada canvas kosong)
  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="mi-home-particle"
      options={options}
    />
  );
}

export default Particle;
