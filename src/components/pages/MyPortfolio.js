import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.postimg.cc/ZRsjPYdZ/20200809-040719.jpg" />
          <div className="text-center">
            <h1 class="text-5xl font-bold">Abdullah AL Safayet</h1>
            <p className="text-xl font-semibold py-1">Junior Web Developer</p>
            <p class="py-8">
              Iam very much passionate about my work. Since january i'm working
              so hard to achieve my goals.From P-Hero i leaned a lot. Just i
              have to carry the learning habit inshaAllah better day coming
              soon.
            </p>
            <hr className="border-gray-300" />
            <h1 className="text-center font-semibold text-2xl py-3">
              Educational Background
            </h1>
            <p className="text-base">Diploma in Computer Technology</p>
            <p className="py-3">
              Bangladesh Institute of Information Technology,BITT
            </p>
            <hr className="border-gray-300" />
            <h1 className="text-center font-semibold text-2xl py-3">Contact</h1>
            <p className="text-base">abdullah.safayet11@gmail.com</p>
            <p>01771-842603</p>
          </div>
        </div>
      </div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex flex-wrap justify-center lg:justify-between md:pl-12">
            <img
              src="https://i.postimg.cc/QMxGn28m/png-clipart-responsive-web-design-html-world-wide-web-consortium-world-wide-web-angle-text.png"
              alt=""
            />
            <img
              src="https://i.postimg.cc/wxSzT42x/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png"
              alt=""
            />
            <img
              src="https://i.postimg.cc/13GjSJCd/logo-javascript-pattern-copyright-framework-free-javascript-logo-label-text-symbol-trademark-transpa.png"
              alt=""
            />
            <img
              src="https://i.postimg.cc/8zcSz8vY/1-9-V4r2-Jp-A02-Jzu0-Tro-i6hg.png"
              alt=""
            />
            <img src="https://i.postimg.cc/t4pz3ykr/images-1.png" alt="" />
            <img
              src="https://i.postimg.cc/0NZDdwjj/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242-1423638015246930701731-rem.png"
              alt=""
            />
            <img src="https://i.postimg.cc/90b6c1QV/images.png" alt="MpngoDB" />
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-bold text-center mt-10">Live Project</h2>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <section id="intro">
            <div class="flex flex-col items-center justify-center mx-auto rounded-lg lg:px-10 max-w-7xl">
              <img
                class="object-cover object-center w-full rounded-xl"
                alt="hero"
                src="https://i.postimg.cc/HL5Zz35z/Screenshot-2.png"
              />
              <a
                className="link text-xl"
                href="https://el-sol-warhouse.web.app/"
              >
                Live Website
              </a>
            </div>
          </section>
        </div>
      </section>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <section id="intro">
            <div class="flex flex-col items-center justify-center mx-auto rounded-lg lg:px-10 max-w-7xl">
              <img
                class="object-cover object-center w-full rounded-xl"
                alt="hero"
                src="https://i.postimg.cc/zGTKPQty/Screenshot-1.png"
              />
              <a
                className="link text-xl"
                href="https://wedding-venue.netlify.app/"
              >
                Live Website
              </a>
            </div>
          </section>
        </div>
      </section>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <section id="intro">
            <div class="flex flex-col items-center justify-center mx-auto rounded-lg lg:px-10 max-w-7xl">
              <img
                class="object-cover object-center w-full rounded-xl"
                alt="hero"
                src="https://i.postimg.cc/j2WJ63nd/Screenshot-3.png"
              />
              <a
                className="link text-xl"
                href="https://bit-by-bit-manufacturer.web.app/"
              >
                Live Website
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
