const Pricing = () => {
  return (
    <section className="mt-48">
      <div className="mx-auto flex max-w-6xl flex-col">
        <div className="mx-auto flex w-full items-center justify-center gap-6">
          <span className="font-dm text-4xl font-semibold">Billed Monthly</span>

          <span className="font-manrope">Billed Yearly (save 15%)</span>
        </div>
        <div className="mx-auto mt-8 flex gap-10">
          <div className="flex h-full w-[400px] flex-col gap-6 rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
            <span className="font-dm text-4xl font-semibold">Free</span>
            <span className="font-dm text-4xl font-semibold">$0</span>
            <p className="font-manrope">
              Description of the tier list will go here, copy should be concise
              and impactful.
            </p>
            <div className="border border-gray-200" />
            <ul className="pl-4">
              <li className="list-disc font-manrope">Access to All Features</li>
              <li className="list-disc pt-4 font-manrope">
                20% discount on backorders
              </li>
              <li className="list-disc pt-4 font-manrope">
                Domain Name Appraisal
              </li>
              <li className="list-disc pt-4 font-manrope">
                10 Social Profiles
              </li>
            </ul>
            <button className="rounded-3xl bg-yellow-500 px-6 py-4 font-manrope text-xl text-white">
              Try for free
            </button>
          </div>
          <div className="flex h-full w-[400px] flex-col gap-6 rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
            <span className="font-dm text-4xl font-semibold">Pro</span>
            <div>
              <span className="font-dm text-4xl font-semibold">$12</span>
              <span className="font-dm"> /month</span>
            </div>
            <p className="font-manrope">
              Description of the tier list will go here, copy should be concise
              and impactful.
            </p>
            <div className="border border-gray-200" />
            <p>Everything in the Free plan, plus</p>
            <ul className="pl-4">
              <li className="list-disc font-manrope">Access to All Features</li>
              <li className="list-disc pt-4 font-manrope">
                20% discount on backorders
              </li>
              <li className="list-disc pt-4 font-manrope">
                Domain Name Appraisal
              </li>
              <li className="list-disc pt-4 font-manrope">
                10 Social Profiles
              </li>
              <li className="list-disc pt-4 font-manrope">Calendar View</li>
              <li className="list-disc pt-4 font-manrope">24/7 Support</li>
            </ul>
            <button className="rounded-3xl bg-yellow-500 px-6 py-4 font-manrope text-xl text-white">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
