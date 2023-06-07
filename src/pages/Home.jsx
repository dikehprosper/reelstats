import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import Features from "../partials/Features";
import FeaturesZigZag from "../partials/FeaturesZigzag";
import Roadmap2 from "./Roadmap2";
import Newsletter from "../partials/Newsletter";

import Footer from "../partials/Footer";

function Home({ handleOpenLoginModal }) {
  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden "
      style={{
        backgroundColor: "white",
        width: "100vw",
      }}
    >
      {/*  Site header */}
      <Header handleOpenLoginModal={handleOpenLoginModal} />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div
          className="relative max-w-8xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome handleOpenLoginModal={handleOpenLoginModal} />

        {/* <FeaturesZigZag />  */}
        <Roadmap2 />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
