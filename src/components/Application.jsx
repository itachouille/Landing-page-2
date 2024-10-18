import Bubble from "../assets/bubble.svg";
import JaneDoe from "../assets/janeDoe.png";
import Slack from "../assets/slack.svg";
import Figma from "../assets/figma.svg";
import Zapier from "../assets/zapier.svg";
import Evernote from "../assets/evernote.svg";
import Notion from "../assets/heroCards/notion.svg";

const Application = () => {
  return (
    <section className="pt-20">
      <div className="relative mx-auto flex w-[1000px] justify-between">
        <div className="pt-28">
          <h2 className="font-dm text-5xl font-medium">
            Know your productivity by squaree
          </h2>
          <p className="w-[500px] pt-4 text-lg font-medium text-gray-500">
            The expectation that productivity should always lead to tangible
            results or accomplishments.
          </p>
        </div>

        <div className="flex h-[300px] w-[350px] flex-col justify-between rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
          <img className="h-auto w-36" src={Bubble} alt="Bubble's logo" />
          <div className="flex">
            <div className="flex flex-col">
              <span className="text-lg">Employees</span>
              <span className="text-gray-500">1200+</span>
            </div>
            <div className="ml-6 flex flex-col">
              <span className="text-lg">Growth</span>
              <span className="text-gray-500">Reviewed</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Productivity by squaree</span>
            <span className="text-4xl font-semibold">70%</span>
          </div>
        </div>

        <div className="absolute -bottom-28 -right-48 flex h-[160px] w-[350px] justify-between rounded-3xl border bg-gradient-to-b from-white to-gray-100 p-8">
          <img src={JaneDoe} alt="profil pic" />
          <div className="relative">
            <div className="flex flex-col">
              <span className="text-3xl font-semibold">Doe</span>
              <span className="text-3xl font-semibold">Jane</span>
              <span className="pt-2 text-lg text-gray-500">
                doe_jane@mail.com
              </span>
            </div>
            <span className="absolute -right-2 top-2 rounded-2xl bg-black px-4 py-2 font-manrope text-sm font-semibold text-white">
              PROFILE
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[200px] flex">
        <div>
          <div className="flex w-[900px] -translate-x-8 gap-10">
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-gray-100" />
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-white">
              <img className="size-1/2" src={Notion} alt="Notion's logo" />
            </div>
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-white">
              <img className="size-1/2" src={Slack} alt="Slack's logo" />
            </div>
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-white">
              <img className="size-1/2" src={Zapier} alt="Zapier's logo" />
            </div>
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-gray-100" />
          </div>

          <div className="mt-16 flex w-[800px] translate-x-14 gap-10">
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-gray-100" />
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-white">
              <img className="size-1/2" src={Evernote} alt="Evernote's logo" />
            </div>
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-white">
              <img className="size-1/2" src={Figma} alt="Figma's logo" />
            </div>
            <div className="flex size-36 items-center justify-center rounded-3xl border bg-gray-100" />
          </div>
        </div>
        <div className="flex flex-col justify-center pl-20">
          <h2 className="font-dm text-6xl font-medium">
            Seamless <br /> integration <br /> with best apps
          </h2>
          <p className="pt-4 text-lg font-medium text-gray-500">
            What ever you use, we integrate with the best of best
          </p>
        </div>
      </div>
    </section>
  );
};

export default Application;
