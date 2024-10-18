import HeroCard1 from "../assets/heroCards/heroCard-1.png";
import HeroCard2 from "../assets/heroCards/heroCard-2.png";
import Calendar from "../assets/heroCards/Calendar.svg";
import Notion from "../assets/heroCards/notion.svg";
import Chart from "../assets/heroCards/chart.svg";
import Ellipse from "../assets/heroCards/ellipse.svg";

const HeroCards = () => {
  return (
    <div className="relative pt-[100px]">
      <div className="relative size-96">
        <span className="absolute left-8 top-8 rounded-2xl bg-black px-4 py-2 font-manrope text-sm font-semibold text-white">
          PROFILE
        </span>
        <img
          className="h-auto max-w-full rounded-3xl border border-gray-200 object-cover"
          src={HeroCard1}
          alt="card"
        />
      </div>
      <div className="absolute left-[470px] top-52 h-[450px] w-[430px] rounded-3xl bg-purple-300">
        <div className="relative px-8 pb-4 pt-10">
          <div className="relative flex">
            <img src={HeroCard2} alt="profile picture" />
            <div className="flex flex-col pl-4">
              <span className="text-3xl font-semibold">Moana</span>
              <span className="text-3xl font-semibold">John</span>
              <span className="pt-2 text-lg text-gray-500">5mins ago</span>
            </div>
            <div className="absolute -top-4 right-0 flex items-center rounded-3xl bg-black px-4 py-2">
              <img className="size-8" src={Calendar} alt="calender icon" />
            </div>
          </div>
        </div>
        <div className="border border-gray-400" />
        <div className="px-8 pb-4 pt-10">
          <div className="flex rounded-3xl bg-black p-2">
            <div className="flex size-20 flex-col items-center justify-center rounded-3xl bg-teal-100">
              <span className="text-lg font-medium text-gray-500">Feb</span>
              <span className="text-3xl font-semibold">28</span>
            </div>
            <div className="flex flex-col justify-center pl-6">
              <span className="text-2xl font-medium text-white">
                Review sync
              </span>
              <span className="mt-2 text-lg font-medium text-gray-300">
                12:00 - 01:30 PM
              </span>
            </div>
          </div>
          <div className="mt-4 flex rounded-3xl bg-black p-3">
            <div className="flex size-20 flex-col items-center justify-center rounded-3xl bg-purple-300">
              <span className="text-lg font-medium text-gray-500">Mar</span>
              <span className="text-3xl font-semibold">02</span>
            </div>
            <div className="flex flex-col justify-center pl-6">
              <span className="text-2xl font-medium text-white">Marketing</span>
              <span className="mt-2 text-lg font-medium text-gray-300">
                2:00 - 02:30 PM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-[20%] mx-auto flex h-36 w-96 items-center rounded-3xl bg-black p-8">
        <div className="flex size-20 items-center justify-center rounded-2xl bg-gray-100">
          <img className="size-14" src={Notion} alt="notion logo" />
        </div>
        <div className="flex flex-col pl-4">
          <span className="text-2xl font-medium text-white">Clear roadmap</span>
          <a className="text-gray-300" href="/">
            notion.com
          </a>
        </div>
      </div>
      <div className="absolute left-1/2 top-[70%] ml-8 flex size-[300px] flex-col justify-between rounded-3xl border bg-teal-100 p-8">
        <div className="relative flex justify-between">
          <span className="text-4xl font-bold">72K</span>
          <span className="absolute -top-4 right-0 rounded-2xl bg-black px-4 py-2 font-manrope text-sm font-medium text-white">
            VALUE
          </span>
        </div>
        <img src={Chart} alt="chart" />
        <div>
          <span className="text-lg">Product title</span>
          <p className="text-gray-500">Short description goes here</p>
        </div>
      </div>
      <div className="absolute right-0 top-[80%] flex h-[450px] w-[400px] flex-col rounded-3xl bg-stone-200 p-8">
        <div className="relative flex justify-between">
          <span className="rounded-2xl bg-stone-400 px-4 py-2 font-manrope text-sm font-medium text-white">
            VALUE
          </span>
          <span className="rounded-2xl bg-black px-4 py-2 font-manrope text-sm font-medium text-white">
            DAILY VISITS
          </span>
        </div>
        <img
          className="absolute mx-auto mt-4 size-60"
          src={Ellipse}
          alt="ellipse"
        />
        <span className="text-center text-4xl font-bold">$5476</span>
        <span className="mt-4 text-center">Spending This Week</span>
        <span className="text-xl">Work force</span>
        <p className="text-lg">Short description goes here</p>
      </div>
    </div>
  );
};

export default HeroCards;
