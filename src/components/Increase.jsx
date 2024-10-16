import FluidGlu from "../assets/fluidGlu.svg";
import Hikkeno from "../assets/hikkeno.svg";
import Bubble from "../assets/bubble.svg";
import IncreaseChart from "../assets/increase-chart.svg";

const Increase = () => {
  return (
    <div className="mt-[500px] flex flex-col">
      <div className="mx-auto text-center">
        <p>We have the fast paced growing companies with us</p>
        <div className="flex">
          <img src={FluidGlu} alt="Fluid glu's logo" />
          <img src={Hikkeno} alt="Hikkeno's logo" />
          <img src={Bubble} alt="Bubble's logo" />
        </div>
      </div>
      <div className="mx-auto text-center">
        <h2>Turn your growth in to Squaree</h2>
        <p>
          The expectation that productivity should always lead to tangible
          results or accomplishments & notion that certain types of work or
          activities are more valuable or productive than others.
        </p>
        <img className="mx-auto" src={IncreaseChart} alt="Increase chart" />
        <div className="flex justify-around">
          <div>
            <span>200%</span>
            <span>Increase in new pipeline generated</span>
          </div>
          <div>
            <span>70%</span>
            <span>Increase in form workforce</span>
          </div>
          <div>
            <span>40%</span>
            <span>Decrease in cost per lead</span>
          </div>
        </div>
        <button className="rounded-3xl bg-[#F2B53C] px-4 py-2 text-white">
          Explore our way
        </button>
      </div>
    </div>
  );
};

export default Increase;
