import {
  Arrow,
  BigHero,
  BigStar,
  CalvinKlein,
  Cancel,
  Cart,
  Gucci,
  HeroImg,
  Line,
  Prada,
  Profile,
  Search,
  SmallStar,
  Versace,
  Zara,
} from "./assets";

const Home = () => {
  return (
    <div>
      {/* header starts here */}
      <div>
        {/* cta here */}
        <div className="bg-primary flex justify-between items-center text-center w-full h-[38px] px-20">
          <p className="text-whiteFont flex-1 text-[14px]">
            Sign up and get 20% off to your first order.{" "}
            <span className="underline">Sign Up Now</span>
          </p>
          <div>
            <img src={Cancel} />
          </div>
        </div>

        {/* nav here */}
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

          <label className="input h-[48px] bg-secondaryHero rounded-3xl flex items-center gap-3 px-4 py-3 w-[569px]">
            <img src={Search} />
            <input
              type="text"
              className="grow rounded-3xl"
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
      </div>

      {/* hero starts here */}
      <div className="flex h-[663px]" style={{ backgroundImage: `url(${BigHero})` }}>
        {/* the right section starts here */}
        <div className="bp my-12">
          <h1 className="font-heading text-[64px] leading-none">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-primary opacity-[60%] leading-5 py-6">
            Browse through our diverse range of meticulously crafted garments,
            designed <br /> to bring out your individuality and cater to your
            sense of style.
          </p>
          <button className="btn font-light text-whiteFont bg-black rounded-full px-[54px] py-[16px]">
            Shop Now
          </button>{" "}
          <div className="py-6 z-8">
            <ul className="flex gap-8 heroList">
              <li>
                <h2>200+</h2>
                <p>International Brands</p>
              </li>
              <img src={Line} />
              <li>
                <h2>2,000+</h2>
                <p>High-Quality Products</p>
              </li>
              <img src={Line} />
              <li>
                <h2>30,000+</h2>
                <p>Happy Customers</p>
              </li>
            </ul>
          </div>
        </div>

        {/* the left section starts here */}
        <div>
          <div className="flex">
            <img src={SmallStar} className="mb-[-580px] ml-[80px] z-2"/>
            <img src={BigStar} className="mb-[-280px] ml-[460px]"/>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <ul>
          <li>
            <img src={Versace} />
          </li>

          <li>
            <img src={Zara} />
          </li>

          <li>
            <img src={Gucci} />
          </li>

          <li>
            <img src={Prada} />
          </li>

          <li>
            <img src={CalvinKlein} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
