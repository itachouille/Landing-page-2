import Testimonial1 from "../assets/testimonials/testimonial-1.png";
import Testimonial2 from "../assets/testimonials/testimonial-2.png";
import Testimonial3 from "../assets/testimonials/testimonial-3.png";
import Testimonial4 from "../assets/testimonials/testimonial-4.png";

const Testimonials = () => {
  return (
    <section className="mt-20 max-w-5xl px-4 md:mt-40">
      <h2 className="text-center font-dm text-3xl font-semibold md:text-5xl">
        What Squaree Users Say
      </h2>
      <p className="pt-6 text-center font-manrope text-lg text-gray">
        Here is how Squaree can help you
      </p>

      <div className="mt-10 gap-4 md:flex">
        <div className="rounded-3xl border border-gray/20 bg-gradient-to-b from-white to-[#F6F6F6] p-8">
          <p className="font-dm text-2xl font-medium">
            Brilliant houses to rent
          </p>
          <p className="my-4 text-gray">
            All eFounders teams have moved to Cycle for all things product
            management, and it is truly a game-changer.
          </p>
          <div className="flex items-center justify-start">
            <img
              className="size-12 rounded-full object-cover"
              src={Testimonial1}
              alt="John Master profile"
            />
            <div className="flex flex-col items-start pl-2">
              <span>John Master</span>
              <span className="text-gray">Director, Blue</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-gray/20 bg-gradient-to-b from-white to-[#F6F6F6] p-8 md:mt-0">
          <p className="font-dm text-2xl font-medium">
            Convenient for searching apartments
          </p>
          <p className="my-4 text-gray">
            Cycle makes it easy to contact the most relevant users whenever I
            need feedback on a new product initiative. It helps me capture all
            the necessary customer context without friction.
          </p>
          <div className="flex items-center justify-start">
            <img
              className="size-12 rounded-full object-cover"
              src={Testimonial2}
              alt="Jane Doe profile"
            />
            <div className="flex flex-col items-start pl-2">
              <span>Jane Doe</span>
              <span className="text-gray">CEO, Jinx</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 gap-4 md:flex">
        <div className="rounded-3xl border border-gray/20 bg-gradient-to-b from-white to-[#F6F6F6] p-8">
          <p className="font-dm text-2xl font-medium">
            It feels much more safe
          </p>
          <p className="my-4 text-gray">
            As a company with a strong Slack culture, it’s important that we
            find ways to meet our champions where they are, and Channeled allows
            us to do just that.
          </p>
          <div className="flex items-center justify-start">
            <img
              className="size-12 rounded-full object-cover"
              src={Testimonial3}
              alt="Fred Pussa profile"
            />
            <div className="flex flex-col items-start pl-2">
              <span>Fred Pussa</span>
              <span className="text-gray">CEO, Vorn</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-gray/20 bg-gradient-to-b from-white to-[#F6F6F6] p-8 md:mt-0">
          <p className="font-dm text-2xl font-medium">Secure search for all</p>
          <p className="my-4 text-gray">
            All eFounders teams have moved to Cycle for all things product
            management, and it is truly a game-changer.
          </p>
          <div className="flex items-center justify-start">
            <img
              className="size-12 rounded-full object-cover"
              src={Testimonial4}
              alt="Anna Task profile"
            />
            <div className="flex flex-col items-start pl-2">
              <span>Anna Task</span>
              <span className="text-gray">Director, Phax</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
