import React from "react";
import Image from "next/image";
import Button from "./common/Button";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[url('/images/hero.jpg')] relative overlay">
      <div className="relative z-10 flex items-center justify-center h-screen w-screen">
        <div className="ring-8 ring-gray-600 shadow-2xl rounded-full overflow-hidden mr-12">
          <Image
            src="/images/ahmed.jpg"
            alt="Ahmed Ibrahim"
            height={300}
            width={300}
          />
        </div>
        <div className="text-white max-w-lg font-rubik">
          <p className="uppercase text-lg mb-2">HI THERE!</p>
          <h1 className="mt-2 mb-3 text-4xl font-bold uppercase flex items-center justify-start">
            I&apos;m{" "}
            <span className="text-indigo-500 ml-1">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("A WEB DEVELOPER")
                    .pauseFor(200)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="mt-2 mb-6 leading-relaxed">
            I&apos;m a Freelance UI/UX Designer and Developer based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <div>
            <Button className="mr-4 w-52" variant="primary">
              More about me
            </Button>
            <Button variant="secondary" className="w-52">
              Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
