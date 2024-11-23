import { useState } from "react";

const Pricing = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <section className="mt-40">
      <div className="flex w-full items-center justify-center gap-6">
        <span className="font-dm text-4xl font-semibold">Billed Monthly</span>
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={isOn}
            readOnly
          />
          <div
            onClick={toggleSwitch}
            className="peer h-11 w-20 rounded-full bg-yellow-500 after:absolute after:left-1 after:top-1 after:size-9 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"
          />
        </label>
        <span className="font-manrope">Billed Yearly (save 15%)</span>
      </div>
      <div className="mx-auto mt-8 flex gap-10">
        <div className="border-gray/20 flex h-full w-[400px] flex-col gap-6 rounded-3xl border bg-gradient-to-b from-white to-[#F6F6F6] p-8">
          <span className="font-dm text-4xl font-semibold">Free</span>
          <span className="font-dm text-4xl font-semibold">$0</span>
          <p className="font-manrope">
            Description of the tier list will go here, copy should be concise
            and impactful.
          </p>
          <div className="border-gray/20 border" />
          <ul className="pl-4">
            <li className="list-disc font-manrope">Access to All Features</li>
            <li className="list-disc pt-4 font-manrope">
              20% discount on backorders
            </li>
            <li className="list-disc pt-4 font-manrope">
              Domain Name Appraisal
            </li>
            <li className="list-disc pt-4 font-manrope">10 Social Profiles</li>
          </ul>
          <button className="bg-orange rounded-3xl px-6 py-4 font-manrope text-xl text-white">
            Try for free
          </button>
        </div>
        <div className="border-gray/20 flex h-full w-[400px] flex-col gap-6 rounded-3xl border bg-gradient-to-b from-white to-[#F6F6F6] p-8">
          <span className="font-dm text-4xl font-semibold">Pro</span>
          <div>
            <span className="font-dm text-4xl font-semibold">$12</span>
            <span className="font-dm"> /month</span>
          </div>
          <p className="font-manrope">
            Description of the tier list will go here, copy should be concise
            and impactful.
          </p>
          <div className="border-gray/20 border" />
          <p className="text-gray">Everything in the Free plan, plus</p>
          <ul className="pl-4">
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
          <button className="bg-orange rounded-3xl px-6 py-4 font-manrope text-xl text-white">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
