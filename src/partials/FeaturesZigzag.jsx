import React from "react";

import FeatImage01 from "../images/features-03-image-01.png";
import FeatImage02 from "../images/features-03-image-02.png";
import FeatImage03 from "../images/features-03-image-03.png";

function FeaturesZigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-1">
        <div className="py-12 md:py-10  border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 inline-flex text-l font-bold py-1 px-12 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Current Activities
            </h1>

            <p className="text-xl text-gray-400 text-black">
              To officially launch, we would be hosting series of challenges
              listed below
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Phase 1
                  </div>
                  <h3 className="h3 mb-3">First Challenge</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-3 text-black">
                      <h4 style={{ fontWeight: "bold" }}>
                        {" "}
                        We would start with trading an account from N10,000 to
                        N10,000,000 within a month to show its efficiency.
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Phase 2
                  </div>
                  <h3 className="h3 mb-3">Second Challenge</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-3 text-black">
                      <h4>
                        {" "}
                        At this stage we would start off with a bigger
                        challenge. N500,000 to N30,000,000.
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    Phase 3
                  </div>
                  <h3 className="h3 mb-3">Third Phase</h3>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-3 text-black">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      />

                      <h4> More Challenges</h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
