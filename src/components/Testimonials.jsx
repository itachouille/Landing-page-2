import Testimonial1 from "../assets/testimonials/testimonial-1.png";
import Testimonial2 from "../assets/testimonials/testimonial-2.png";
import Testimonial3 from "../assets/testimonials/testimonial-3.png";
import Testimonial4 from "../assets/testimonials/testimonial-4.png";

const Testimonials = () => {
  return (
    <section className="mt-[200px]">
      <div className="mx-auto flex max-w-6xl flex-col">
        <h2 className="text-center font-dm text-6xl font-semibold">
          What squaree users say
        </h2>
        <p className="mx-auto w-[700px] pt-8 text-center font-manrope text-black/50">
          Here is how homely can help you
        </p>
        <div className="mt-10 flex justify-around">
          <div className="flex h-[260px] w-[500px] flex-col justify-between rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
            <p className="font-dm text-2xl font-medium">
              Brilliant houses to rent
            </p>
            <p className="mr-20 text-gray-600">
              All eFounders teams have moved to Cycle for all things product
              management and it is truly a game-changer.
            </p>
            <div className="flex items-center justify-start">
              <img
                className="size-12"
                src={Testimonial1}
                alt="profil's picture"
              />
              <div className="flex flex-col items-start pl-2">
                <span>John Master</span>
                <span className="text-gray-500">Director, Blue</span>
              </div>
            </div>
          </div>
          <div className="flex h-[260px] w-[620px] flex-col justify-between rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
            <p className="font-dm text-2xl font-medium">
              Convenient for searching apartments
            </p>
            <p className="mr-20 text-gray-600">
              Cycle makes it easy to contact the most relevant users whenever I
              need feedback on a new product initiative. It helps me capture all
              the necessary customer context without friction.
            </p>
            <div className="flex items-center justify-start">
              <img
                className="size-12"
                src={Testimonial2}
                alt="profil's picture"
              />
              <div className="flex flex-col items-start pl-2">
                <span>Jane Doe</span>
                <span className="text-gray-500">CEO, Jinx</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-around">
          <div className="flex h-[260px] w-[620px] flex-col justify-between rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
            <p className="font-dm text-2xl font-medium">
              It feels much more safe
            </p>
            <p className="mr-20 text-gray-600">
              As a company with a strong Slack culture, it’s important that we
              find ways to meet our champions where they are, and Channeled
              allows us to do just that.
            </p>
            <div className="flex items-center justify-start">
              <img
                className="size-12"
                src={Testimonial3}
                alt="profil's picture"
              />
              <div className="flex flex-col items-start pl-2">
                <span>Fred Pussa</span>
                <span className="text-gray-500">CEO, Vorn</span>
              </div>
            </div>
          </div>
          <div className="flex h-[260px] w-[500px] flex-col justify-between rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
            <p className="font-dm text-2xl font-medium">
              Secure search for all
            </p>
            <p className="mr-20 text-gray-600">
              All eFounders teams have moved to Cycle for all things product
              management and it is truly a game-changer.
            </p>
            <div className="flex items-center justify-start">
              <img
                className="size-12"
                src={Testimonial4}
                alt="profil's picture"
              />
              <div className="flex flex-col items-start pl-2">
                <span>Anna Task</span>
                <span className="text-gray-500">Director, Phax</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
