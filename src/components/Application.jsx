import BrandLogo from "../assets/brandLogo.svg";
import DualCard from "../assets/dualCard.svg";
import { motion } from "motion/react";

const Application = () => {
  return (
    <section className="mt-20 text-center md:mt-40 md:text-left">
      <div className="flex flex-col items-center justify-center overflow-x-hidden md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="font-dm text-3xl font-semibold md:text-5xl">
            Know your productivity by squaree
          </h2>
          <p className="mt-4 font-manrope text-sm text-gray md:text-lg">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
        </motion.div>
        <motion.img
          src={DualCard}
          alt="dual card"
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0"
        />
      </div>

      <div className="relative mt-10 flex flex-col justify-between overflow-x-hidden md:mt-40 md:flex-row">
        <motion.img
          src={BrandLogo}
          alt="brand"
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex flex-col justify-center pt-4 md:ml-16 md:pt-0"
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-dm text-3xl font-semibold md:text-5xl">
            Seamless <br /> integration <br /> with best apps
          </h2>
          <p className="pt-4 font-manrope text-sm text-gray md:text-lg">
            What ever you use, we integrate with the best of best
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Application;
