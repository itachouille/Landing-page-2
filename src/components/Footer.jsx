import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="mt-48">
      <div className="flex justify-around bg-gray-100 px-12 py-24">
        <div className="">
          <a className="flex items-center" href="/">
            <img className="size-10" src={Logo} alt="logo" />
            <span className="pl-1 font-bold">Squaree</span>
          </a>
          <p className="mt-4">What matters is productivity with fun culture</p>
        </div>
        <div className="flex flex-col gap-8">
          <span className="font-manrope font-bold">About</span>
          <a href="">Contact</a>
          <a href="">Blog</a>
          <a href="">Story</a>
        </div>
        <div className="flex flex-col gap-8">
          <span className="font-manrope font-bold">Company</span>
          <a href="">Product</a>
          <a href="">Press</a>
          <a href="">More</a>
        </div>
        <div className="flex h-full rounded-3xl border bg-white p-4">
          <div className="flex flex-1 flex-col">
            <span>Follow us on twitter</span>
            <a href="/">notion.com</a>
          </div>
          <button className="rounded-xl bg-yellow-400 text-white">
            Follow
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
