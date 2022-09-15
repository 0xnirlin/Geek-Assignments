import React from "react";
import Fade from "react-reveal/Fade";

const Imagert = () => {
  return (
    <div>
      <div class="bg-white">
        <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <Fade left>
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
            <p class="mt-4 text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              illum, exercitationem.
            </p>

            <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Heading 1</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Heading 2</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Heading 3</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci illum, exercitationem
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Heading 4</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Heading 5</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing el
                </dd>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <dt class="font-medium text-gray-900">Heading 6</dt>
                <dd class="mt-2 text-sm text-gray-500">
                  Made from natural materials. Grain .
                </dd>
              </div>
            </dl>
          </div>
          </Fade>

          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <Fade right>
              <img
                src="https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                class="rounded-lg bg-gray-100 "
              />
            </Fade>
            <Fade right>
              <img
                src="https://images.pexels.com/photos/3184646/pexels-photo-3184646.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                class="rounded-lg bg-gray-100"
              />
            </Fade>
            <Fade right>
              <img
                src="https://images.pexels.com/photos/3352384/pexels-photo-3352384.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Side of walnut card tray with card groove and recessed card area."
                class="rounded-lg bg-gray-100"
              />
            </Fade>
            <Fade right>
              <img
                src="https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                class="rounded-lg bg-gray-100"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagert;
