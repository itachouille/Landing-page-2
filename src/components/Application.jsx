import BrandLogo from "../assets/brandLogo.svg";
import DualCard from "../assets/dualCard.svg";

const Application = () => {
  return (
    <section className="pt-40">
      <div className="flex w-full items-center justify-between">
        <div>
          <h2 className="font-dm text-6xl font-medium">
            Know your productivity by squaree
          </h2>
          <p className="text-gray pt-4 text-lg font-medium">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
        </div>
        <img src={DualCard} alt="card" />
      </div>

      <div className="mt-40 flex">
        <img src={BrandLogo} alt="brand" className="" />
        <div className="flex flex-col justify-center pl-20">
          <h2 className="font-dm text-6xl font-medium">
            Seamless <br /> integration <br /> with best apps
          </h2>
          <p className="text-gray pt-4 text-lg font-medium">
            What ever you use, we integrate with the best of best
          </p>
        </div>
      </div>
    </section>
  );
};

export default Application;
