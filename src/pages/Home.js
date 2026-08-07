import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
import Spinner from "../components/Spinner";
import { useLightMode } from "../context/LightModeContext";

function Home() {
  const lightMode = useLightMode();
  const [information, setInformation] = useState("");

  useEffect(() => {
    let mounted = true;
    axios.get("/api/information")
    .then((response) => { mounted && setInformation(response.data);
    })
    .catch((error) => { console.error("Gagal memuat information:", error);
    });
  return () => {
    mounted = false;
  };
}, []);

  return (
    <Layout>
      <Helmet>
        <title>Beranda - Portofolio Muhamad Soleh</title>
        <meta
          name="description"
          content="Portofolio Muhamad Soleh Beranda"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-home-area mi-padding-section">
          <Particle lightMode={lightMode} />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="mi-home-content">
                  <h1>
                    Hi, Saya{" "}
                    <span className="color-theme">{information.name}</span>
                  </h1>
                  <p>{information.aboutContent}</p>
                  <Socialicons bordered />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Home;
