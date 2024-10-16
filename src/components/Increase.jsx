import FluidGlu from "../assets/fluidGlu.svg";
import Hikkeno from "../assets/hikkeno.svg";
import Bubble from "../assets/bubble.svg";
import IncreaseChart from "../assets/increase-chart.svg";

const Increase = () => {
  return (
    <section className="mt-[500px] flex flex-col">
      <div className="mx-auto w-[1000px]">
        <p className="text-center text-3xl text-black/50">
          We have the fast paced growing companies with us
        </p>
        <div className="flex justify-between py-10">
          <img src={FluidGlu} alt="Fluid glu's logo" />
          <img src={Hikkeno} alt="Hikkeno's logo" />
          <img src={Bubble} alt="Bubble's logo" />
        </div>
      </div>
      <div className="mx-auto w-[900px] pt-36">
        <h2 className="text-center font-dm text-6xl font-semibold">
          Turn your growth in to Squaree
        </h2>
        <p className="mx-auto w-[700px] pt-8 text-center font-manrope text-black/50">
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
            <span className="w-40 pt-4 text-center text-black/50">
              Increase in new pipeline generated
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-semibold">70%</span>
            <span className="w-40 pt-4 text-center text-black/50">
              Increase in form workforce
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-semibold">40%</span>
            <span className="w-40 pt-4 text-center text-black/50">
              Decrease in cost per lead
            </span>
          </div>
        </div>
        <div className="mt-14 flex w-full justify-center">
          <button className="rounded-3xl bg-[#F2B53C] px-6 py-4 text-xl text-white">
            Explore our way
          </button>
        </div>
      </div>
    </section>
  );
};

export default Increase;
