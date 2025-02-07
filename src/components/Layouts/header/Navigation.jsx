import {
  Arrow,
  Cart,
  Hamburger,
  HomepageSearch,
  Profile,
  Search,
} from "../../utils/assets";

const Navigation = () => {
  return (
    <>
      <div className="flex items-center justify-between lg:justify-center justify-self-center w-full lg:w-[1240px] h-[100px] md:gap-[40px]">
        {/* Left Section: Logo and Hamburger */}
        <div className="flex items-center gap-2">
          <a className="block md:hidden">
            <img src={Hamburger} alt="hamburger" />
          </a>
          <h1 className="font-heading font-bold text-[25.2px] md:text-[32px]">
            SHOP.CO
          </h1>
        </div>

        {/* Center Section: Navigation */}
        <ul className="hidden md:flex gap-[24px]">
          <li>
            <nav className="flex items-center gap-2">
              Shop{" "}
              <span>
                <img src={Arrow} />
              </span>
            </nav>
          </li>
          <li>
            <nav>On Sale</nav>
          </li>
          <li>
            <nav>New Arrivals</nav>
          </li>
          <li>
            <nav>Brands</nav>
          </li>
        </ul>

        {/* Search Input */}
        <label className="hidden lg:flex input items-center gap-3 px-4 py-3 w-[569px] h-[48px] bg-secondaryHero rounded-[3.875rem]">
          <img src={Search} />
          <input
            type="text"
            className="grow rounded-[3.875rem]"
            placeholder="Search for products..."
          />
        </label>

        {/* Right Section: Icons */}
        <ul className="flex gap-[14px]">
          <li className="block lg:hidden">
            <img src={HomepageSearch} />
          </li>
          <li>
            <img src={Cart} />
          </li>
          <li>
            <img src={Profile} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
