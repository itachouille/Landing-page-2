import BrandLogo from "../assets/brandLogo.svg";
import DualCard from "../assets/dualCard.svg";

const Application = () => {
  return (
    <section className="pt-20">
      <div className="relative mx-auto flex w-[1000px] justify-between">
        <img src={BrandLogo} alt="brand" />
        <div className="pt-28">
          <h2 className="font-dm text-5xl font-medium">
            Know your productivity by squaree
          </h2>
          <p className="w-[500px] pt-4 text-lg font-medium text-gray-500">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
        </div>
      </div>

      <div className="mt-[200px] flex">
        <div className="flex flex-col justify-center pl-20">
          <h2 className="font-dm text-6xl font-medium">
            Seamless <br /> integration <br /> with best apps
          </h2>
          <p className="pt-4 text-lg font-medium text-gray-500">
            What ever you use, we integrate with the best of best
          </p>
        </div>
        <img src={DualCard} alt="card" />
      </div>
    </section>
  );
};

export default Application;
