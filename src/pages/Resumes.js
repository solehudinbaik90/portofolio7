import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Sudah dimigrasi ke async
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    let mounted = true;
    
    axios.get("/api/skills")
      .then((response) => {
        if (mounted) setSkills(response.data);
      })
      .catch((error) => console.error("Gagal memuat skills:", error));

    axios.get("/api/experience")
      .then((response) => {
        // PERBAIKAN: Menggunakan blok percabangan if yang valid untuk mengeksekusi multi-state
        if (mounted) {
          setWorkingExperience(response.data.workingExperience);
          setEducationExperience(response.data.educationExperience);
        }
      })
      .catch((error) => console.error("Gagal memuat experience:", error));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Resume - Portofolio Muhamad Soleh</title>
        <meta
          name="description"
          content="Portofolio Muhamad Soleh Halaman Resume"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="My Skills" />
            <div className="mi-skills">
              <div className="row mt-30-reverse">
                {skills.map((skill) => (
                  <TrackVisibility
                    once
                    className="col-lg-6 mt-30"
                    key={skill.title}
                  >
                    <Progress title={skill.title} percentage={skill.value} />
                  </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Resume" />
            <Smalltitle title="Working Experience" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>
            <div className="mt-30"></div>
            <Smalltitle title="Educational Qualifications" icon="book" />
            <div className="mi-resume-wrapper">
              {educationExperience.map((educatonExp) => (
                <Resume key={educatonExp.id} resumeData={educatonExp} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default Resumes;
