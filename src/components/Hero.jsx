import HeroCard1 from "../assets/heroCards/heroCard-1.svg";
import HeroCard2 from "../assets/heroCards/heroCard-2.svg";
import HeroCard3 from "../assets/heroCards/heroCard-3.svg";
import HeroCard4 from "../assets/heroCards/heroCard-4.svg";
import HeroCard5 from "../assets/heroCards/heroCard-5.svg";

const Hero = () => {
  return (
    <section className="mt-40">
      <div className="mx-auto text-center">
        <h1 className="font-dm text-8xl font-semibold">
          Predictable
          <br />
          growth starts here
        </h1>
        <p className="mt-8 px-24 font-manrope text-sm text-gray-500">
          Squaree helps users to go from Zero to Hero with Pockets flow’s simple
          platform that helps creators like you sell their digital products
          online.
        </p>
      </div>
      <div className="flex">
        <img src={HeroCard1} alt="" />
        <img src={HeroCard2} alt="" />
        <img src={HeroCard3} alt="" />
        <img src={HeroCard4} alt="" />
        <img src={HeroCard5} alt="" />
      </div>
    </section>
  );
};

export default Hero;
