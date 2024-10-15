import HeroCard1 from "../assets/heroCards/heroCard-1.png";
import HeroCard2 from "../assets/heroCards/heroCard-2.png";
import calendar from "../assets/heroCards/Calendar.svg";

const HeroCards = () => {
  return (
    <div className="relative pt-24">
      <div className="relative size-96">
        <span className="font-manrope absolute left-8 top-8 rounded-2xl bg-black px-4 py-2 font-semibold text-white">
          PROFILE
        </span>
        <img
          className="h-auto max-w-full rounded-3xl border border-[#EDEDED] object-cover"
          src={HeroCard1}
          alt="card"
        />
      </div>
      <div className="absolute left-[500px] top-40 size-96 rounded-2xl bg-[#C8A2D6]">
        <div className="relative p-6">
          <div className="flex justify-between">
            <img src={HeroCard2} alt="profile picture" />
            <div className="flex flex-col">
              <span>Moana</span>
              <span>John</span>
              <span>5mins ago</span>
            </div>
            <div className="size-6 bg-black">
              <img src={calendar} alt="calender icon" />
            </div>
          </div>
          <div className="border border-[#808080]/50" />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
