import FluidGlu from "../assets/fluidGlu.svg";
import Hikkeno from "../assets/hikkeno.svg";
import Bubble from "../assets/bubble.svg";
import IncreaseChart from "../assets/increase-chart.svg";
import { motion } from "motion/react";

const Increase = () => {
  return (
    <section className="mt-40">
      <p className="text-gray/60 text-center text-3xl">
        We have the fast paced growing companies with us
      </p>

      <div
        className="relative flex overflow-x-hidden pt-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
        >
          <img src={FluidGlu} alt="Fluid glu's logo" className="pr-20" />
          <img src={Hikkeno} alt="Hikkeno's logo" className="pr-20" />
          <img src={Bubble} alt="Bubble's logo" className="pr-20" />
          <img src={FluidGlu} alt="Fluid glu's logo" className="pr-20" />
          <img src={Hikkeno} alt="Hikkeno's logo" className="pr-20" />
          <img src={Bubble} alt="Bubble's logo" className="pr-20" />
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0"
        >
          <img src={FluidGlu} alt="Fluid glu's logo" className="pr-20" />
          <img src={Hikkeno} alt="Hikkeno's logo" className="pr-20" />
          <img src={Bubble} alt="Bubble's logo" className="pr-20" />
          <img src={FluidGlu} alt="Fluid glu's logo" className="pr-20" />
          <img src={Hikkeno} alt="Hikkeno's logo" className="pr-20" />
          <img src={Bubble} alt="Bubble's logo" className="pr-20" />
        </motion.div>
      </div>

      <div className="pt-40">
        <h2 className="text-center font-dm text-6xl font-semibold">
          Turn your growth in to Squaree
        </h2>
        <p className="text-gray mx-auto mt-8 w-[700px] text-center font-manrope">
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
        <img
          className="mx-auto pt-6"
          src={IncreaseChart}
          alt="Increase chart"
        />
        <div className="flex justify-around pt-8 font-dm">
          <div className="flex flex-col items-center">
            <span className="text-6xl font-semibold">200%</span>
            <span className="text-gray/60 w-40 pt-4 text-center">
              Increase in new pipeline generated
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-semibold">70%</span>
            <span className="text-gray/60 w-40 pt-4 text-center">
              Increase in form workforce
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-semibold">40%</span>
            <span className="text-gray/60 w-40 pt-4 text-center">
              Decrease in cost per lead
            </span>
          </div>
        </div>
        <div className="mt-14 flex w-full justify-center">
          <button className="bg-orange rounded-3xl px-6 py-4 font-manrope text-xl text-white">
            Explore our way
          </button>
        </div>
      </div>
    </section>
  );
};

export default Increase;
