import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="mt-20 w-full bg-gray/10">
      <div className="flex flex-col justify-between gap-8 px-6 py-12 md:flex-row md:px-20 md:py-24">
        <div className="flex flex-col items-center md:flex-auto md:items-start">
          <a className="flex items-center" href="/">
            <img className="h-10" src={Logo} alt="logo" />
            <span className="pl-2 text-2xl font-bold">Squaree</span>
          </a>
          <p className="mt-4 text-center text-gray md:text-left">
            What matters is productivity with fun culture
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-auto md:gap-8">
          <span className="font-manrope text-lg font-bold">About</span>
          <a className="text-gray" href="/">
            Contact
          </a>
          <a className="text-gray" href="/">
            Blog
          </a>
          <a className="text-gray" href="/">
            Story
          </a>
        </div>

        <div className="flex flex-col gap-4 md:flex-auto md:gap-8">
          <span className="font-manrope text-lg font-bold">Company</span>
          <a className="text-gray" href="/">
            Product
          </a>
          <a className="text-gray" href="/">
            Press
          </a>
          <a className="text-gray" href="/">
            More
          </a>
        </div>

        <div className="flex h-fit justify-center md:justify-start">
          <div className="flex items-center justify-center gap-6 rounded-2xl border border-gray/10 bg-white px-6 py-4 md:px-8 md:py-6">
            <div className="flex flex-col gap-2">
              <p className="whitespace-nowrap text-center text-xl font-bold md:text-left">
                Follow us on twitter
              </p>
              <p className="text-center md:text-left">notion.com</p>
            </div>
            <button className="rounded-2xl border bg-orange px-6 py-3 text-white transition-all hover:border-orange hover:bg-white hover:text-orange">
              Follow
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
