import { Arrow, BigStar, CalvinKlein, Cancel, Cart, Gucci, HeroImg, Prada, Profile, Search, SmallStar, Versace, Zara } from "./assets";

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
              <na className="flex items-center gap-2">Shop <span><img src={Arrow}/></span></na>
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
            <img src={Search}/>
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
      <div>
        {/* the right section starts here */}
        <div>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button>Shop Now</button>
          <ul>
            <li>
              <h2>200+</h2>
              <p>International Brands</p>
            </li>

            <li>
              <h2>2,000+</h2>
              <p>High-Quality Products</p>
            </li>

            <li>
              <h2>30,000+</h2>
              <p>Happy Customers</p>
            </li>
          </ul>
        </div>

        {/* the left section starts here */}
        <div>
          <div>
            <img src={HeroImg} />
            <img src={BigStar} />
            <img src={SmallStar} />
          </div>

          <div>
            <ul>
                <li>
                    <img src={Versace}/>
                </li>

                <li>
                    <img src={Zara}/>
                </li>

                <li>
                    <img src={Gucci}/>
                </li>

                <li>
                    <img src={Prada}/>
                </li>

                <li>
                    <img src={CalvinKlein}/>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
