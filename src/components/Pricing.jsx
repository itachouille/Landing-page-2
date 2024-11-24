import { useState } from "react";

const Pricing = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <section className="mt-20 max-w-7xl px-4 md:mt-40">
      <div className="flex w-full items-center justify-center gap-3 md:gap-6">
        <span
          className={`font-manrope text-2xl md:text-4xl ${isOn ? "font-light" : "font-semibold"}`}
        >
          Billed Monthly
        </span>
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isOn}
            readOnly
          />
          <div
            onClick={toggleSwitch}
            className="peer h-11 w-20 rounded-full bg-orange after:absolute after:left-1 after:top-1 after:size-9 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"
          />
        </label>
        <span
          className={`font-manrope text-2xl md:text-4xl ${!isOn ? "font-light" : "font-semibold"}`}
        >
          Billed Yearly
        </span>
        <span className="font-manrope text-sm md:text-xl">(save 15%)</span>
      </div>

      <div className="mx-auto mt-8 flex flex-col gap-10 md:flex-row md:gap-10">
        <div className="flex size-full flex-col gap-6 rounded-3xl border border-gray/20 bg-gradient-to-b from-white to-[#F6F6F6] p-8 md:w-[450px]">
          <span className="font-dm text-2xl font-semibold md:text-4xl">
            Free
          </span>
          <span className="font-dm text-2xl font-semibold md:text-4xl">$0</span>
          <p className="font-manrope text-sm text-gray md:text-base">
            Description of the tier list will go here, copy should be concise
            and impactful.
          </p>
          <div className="border border-gray/20" />
          <ul className="pl-4 text-sm text-gray md:text-base">
            <li className="list-disc font-manrope">Access to All Features</li>
            <li className="list-disc pt-4 font-manrope">
              20% discount on backorders
            </li>
            <li className="list-disc pt-4 font-manrope">
              Domain Name Appraisal
            </li>
            <li className="list-disc pt-4 font-manrope">10 Social Profiles</li>
          </ul>
          <button className="rounded-3xl border bg-orange px-6 py-4 font-manrope text-sm text-white transition-all hover:border-orange hover:bg-white hover:text-orange md:text-xl">
            Try for free
          </button>
        </div>

        <div className="flex size-full flex-col gap-6 rounded-3xl border-2 border-orange bg-gradient-to-b from-white to-[#F6F6F6] p-8 shadow-[#FFF7E7] md:w-[450px]">
          <span className="font-dm text-2xl font-semibold md:text-4xl">
            Pro
          </span>
          <div>
            <span className="font-dm text-2xl font-semibold md:text-4xl">
              $12
            </span>
            <span className="font-dm"> /month</span>
          </div>
          <p className="font-manrope text-sm text-gray md:text-base">
            Description of the tier list will go here, copy should be concise
            and impactful.
          </p>
          <div className="border border-gray/20" />
          <p className="text-gray">Everything in the Free plan, plus</p>
          <ul className="pl-4 text-sm text-gray md:text-base">
            <li className="list-disc font-manrope">Access to All Features</li>
            <li className="list-disc pt-4 font-manrope">
              20% discount on backorders
            </li>
            <li className="list-disc pt-4 font-manrope">
              Domain Name Appraisal
            </li>
            <li className="list-disc pt-4 font-manrope">10 Social Profiles</li>
            <li className="list-disc pt-4 font-manrope">Calendar View</li>
            <li className="list-disc pt-4 font-manrope">24/7 Support</li>
          </ul>
          <button className="rounded-3xl border bg-orange px-6 py-4 font-manrope text-sm text-white transition-all hover:border-orange hover:bg-white hover:text-orange md:text-xl">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
