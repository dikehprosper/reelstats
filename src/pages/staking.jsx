import React from "react";

import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import HeroHome from "../partials/HeroHome";
import FeaturesBlocks from "../partials/FeaturesBlocks";

import FeaturesZigZag from "../partials/FeaturesZigzag";

import Newsletter from "../partials/Newsletter";

import Footer from "../partials/Footer";

function Staking({ handleOpenLoginModal }) {
  return (
    <div
      className="flex flex-col min-h-screen overflow-hidden"
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

        <div style={{ marginTop: "60px" }}>
          <FeaturesBlocks />
        </div>

        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Staking;
