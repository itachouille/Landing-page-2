import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="mt-40 bg-gray-100">
      <div className="mx-auto flex max-w-6xl justify-between px-12 py-24">
        <div className="max-w-64">
          <a className="flex items-center" href="/">
            <img className="size-10" src={Logo} alt="logo" />
            <span className="pl-1 font-bold">Squaree</span>
          </a>
          <p className="mt-4 text-gray-500">
            What matters is productivity with fun culture
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <span className="font-manrope font-bold">About</span>
          <a className="text-gray-500" href="/">
            Contact
          </a>
          <a className="text-gray-500" href="/">
            Blog
          </a>
          <a className="text-gray-500" href="/">
            Story
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <span className="font-manrope font-bold">Company</span>
          <a className="text-gray-500" href="/">
            Product
          </a>
          <a className="text-gray-500" href="/">
            Press
          </a>
          <a className="text-gray-500" href="/">
            More
          </a>
        </div>
        <div className="mt-14 flex h-full rounded-2xl border bg-white p-4">
          <div className="flex flex-1 flex-col">
            <span className="font-manrope text-lg font-bold">
              Follow us on twitter
            </span>
            <a className="text-gray-500" href="/">
              notion.com
            </a>
          </div>
          <button className="ml-4 rounded-xl bg-yellow-500 px-4 text-white">
            Follow
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
