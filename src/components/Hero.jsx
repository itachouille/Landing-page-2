import HeroCard1 from "../assets/heroCards/heroCard-1.svg";
import HeroCard2 from "../assets/heroCards/heroCard-2.svg";
import HeroCard3 from "../assets/heroCards/heroCard-3.svg";
import HeroCard4 from "../assets/heroCards/heroCard-4.svg";
import HeroCard5 from "../assets/heroCards/heroCard-5.svg";
import { motion } from "motion/react";

const Hero = () => {
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
      rotate: direction === "top" ? -15 : direction === "bottom" ? 15 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="mt-40">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <h1 className="font-dm text-8xl font-semibold">
          Predictable
          <br />
          growth starts here
        </h1>
        <p className="pt-6 font-manrope text-sm text-gray-500">
          Squaree helps users to go from Zero to Hero with Pockets flow’s simple
          platform that helps
          <br />
          creators like you sell their digital products online.
        </p>
      </motion.div>

      <div className="mt-12 flex justify-center gap-10">
        <motion.img
          src={HeroCard1}
          alt="Hero Card 1"
          custom="left"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.img
          src={HeroCard2}
          alt="Hero Card 2"
          custom="top"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        />
        <div className="flex flex-col gap-10">
          <motion.img
            src={HeroCard3}
            alt="Hero Card 3"
            custom="bottom"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          />
          <motion.img
            src={HeroCard4}
            alt="Hero Card 4"
            custom="right"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          />
        </div>
        <motion.img
          src={HeroCard5}
          alt="Hero Card 5"
          custom="top"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Hero;
