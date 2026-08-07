import Disqus from "disqus-react";
import Markdown from "markdown-to-jsx";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

function BlogDetails(props) {
  const params = useParams();
  const [content, setContent] = useState("");
  const blogId = params.id;
  const blogFile = params.title;
  const fileName = `${blogFile}.md`;

  useEffect(() => {
  let isMounted = true;

  import(`../blog/${fileName}`)
    .then((res) => fetch(res.default))
    .then((res) => res.text())
    .then((text) => isMounted && setContent(text))
    .catch((err) => console.error("Gagal memuat artikel:", err));

  return () => {
    isMounted = false;
  };
}, [fileName]);

  const disqusShortname = "portofolio-msoleh";
  const disqusConfig = {
    url: "https://portofolio7.vercel.app/",
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout>
      <Helmet>
        <title>Detail Artikel - Portofolio Muhamad Soleh</title>
        <meta
          name="description"
          content="Portofolio Muhamad Soleh Halaman Detail Artikel"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Markdown>{content}</Markdown>
            <Suspense fallback={<h1>loading...</h1>}>
              <div className="mi-blog-details-comments mt-30">
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </Suspense>
    </Layout>
  );
}

export default BlogDetails;
