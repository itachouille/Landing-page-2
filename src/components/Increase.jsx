import FluidGlu from "../assets/fluidGlu.svg";
import Hikkeno from "../assets/hikkeno.svg";
import Bubble from "../assets/bubble.svg";
import IncreaseChart from "../assets/increase-chart.svg";
import { motion } from "motion/react";

const Increase = () => {
  const logos = [FluidGlu, Hikkeno, Bubble];

  return (
    <section className="mt-20 max-w-lg md:mt-40 md:max-w-7xl">
      <p className="text-center text-lg text-gray/60 md:text-xl">
        We have the fast paced growing companies with us
      </p>

      <div className="flex items-center justify-around space-x-4 md:hidden">
        {logos.map((logo, key) => (
          <div key={key} className="aspect-square w-1/4 max-w-[120px]">
            <img
              src={logo}
              alt={`Logo ${key + 1}`}
              className="size-full object-contain"
            />
          </div>
        ))}
      </div>

      <div
        className="relative hidden overflow-x-hidden pt-16 md:flex"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {[...Array(2)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex shrink-0 gap-44"
          >
            {logos.map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Carousel Logo ${idx + 1}`}
                className="object-contain"
              />
            ))}
            <div className="shrink-0" />
          </motion.div>
        ))}
      </div>

      <div className="pt-20 md:pt-40">
        <h2 className="text-center font-dm text-4xl font-semibold md:text-5xl">
          Turn your growth into Squaree
        </h2>
        <p className="mx-auto mt-8 max-w-3xl px-4 text-center font-manrope text-lg text-gray md:px-0">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
        <img
          className="mx-auto mt-6 w-3/4 max-w-md"
          src={IncreaseChart}
          alt="Increase chart"
        />
      </div>

      <div className="flex flex-wrap justify-around gap-8 pt-8 font-dm">
        {[
          { value: "200%", label: "Increase in new pipeline generated" },
          { value: "70%", label: "Increase in form workforce" },
          { value: "40%", label: "Decrease in cost per lead" },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-6xl font-semibold">{stat.value}</span>
            <span className="mt-4 max-w-36 text-center text-base text-gray/60">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-14 flex w-full justify-center">
        <button
          className="flex items-center justify-center gap-1 rounded-3xl border bg-orange px-6 py-3 font-manrope text-lg text-white transition-all hover:border-orange hover:bg-white hover:text-orange"
          aria-label="Explore our way"
        >
          Explore our way
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 -1 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Increase;
