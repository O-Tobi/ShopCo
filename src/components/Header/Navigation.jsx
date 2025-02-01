import { Arrow, Cart, Profile, Search } from "../assets";

const Navigation = () => {
  return (
    <>
      <div className="flex items-center justify-center justify-self-center gap-[40px] h-[100px] w-[1240px]">
        <h1 className="font-heading font-bold text-[32px] ">SHOP.CO</h1>
        <ul className="flex gap-[24px]">
          <li>
            <na className="flex items-center gap-2">
              Shop{" "}
              <span>
                <img src={Arrow} />
              </span>
            </na>
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

        <label className="input h-[48px] bg-secondaryHero rounded-[3.875rem] flex items-center gap-3 px-4 py-3 w-[569px]">
          <img src={Search} />
          <input
            type="text"
            className="grow rounded-[3.875rem]"
            placeholder="Search for products..."
          />
        </label>

        <ul className="flex gap-[14px]">
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
