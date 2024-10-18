import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <section className="mt-40">
      <div className="mx-auto max-w-[800px] text-center">
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
      <HeroCards />
    </section>
  );
};

export default Hero;
