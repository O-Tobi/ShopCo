import {
  BigStar,
  CalvinKlein,
  Gucci,
  HeroImg,
  Line,
  Prada,
  SmallStar,
  Versace,
  Zara,
} from "./utils/assets";

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap lg:justify-center items-center gap-[4rem] lg:h-[663px] bg-whiteHeroBg w-screen">
        {/* the right section starts here */}
        <div className="flex flex-col items-center md:items-start px-[20px] md:bp my-12">
          <div>
            <h1 className="font-heading text-[2.25rem] lg:text-[4rem] leading-none text-left">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-primary opacity-[60%] leading-5 py-6 text-[.875rem] md:text-[1rem] ">
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
          </div>
          <button className="btn font-light text-whiteFont bg-black rounded-full px-[54px] py-[16px] w-[300px] md:w-[210px]">
            Shop Now
          </button>{" "}
          <div className="py-6 z-8">
            <ul className="flex flex-wrap justify-center gap-8 heroList">
              <li>
                <h2 className="text-[24px] font-bold leading-8 md:text-[40px] md:font-bold md:leading-10">200+</h2>
                <p>International Brands</p>
              </li>
              <img src={Line} />
              <li>
                <h2 className="text-[24px] font-bold leading-8 md:text-[40px] md:font-bold md:leading-10">2,000+</h2>
                <p>High-Quality Products</p>
              </li>
              <img src={Line} />
              <li>
                <h2 className="text-[24px] font-bold leading-8 md:text-[40px] md:font-bold md:leading-10">30,000+</h2>
                <p>Happy Customers</p>
              </li>
            </ul>
          </div>
        </div>

        {/* the left section starts here */}
        <div className="">
          <div className="flex justify-center items-center relative">
            <img src={SmallStar} className="absolute left-2 z-10" />

            <img src={HeroImg} className="h-[663px]  z-0" />

            <img
              src={BigStar}
              className="absolute bottom-0 right-6 top-[100px] z-10"
            />
          </div>
        </div>
      </div>

      <div className="bp flex justify-center items-center bg-black h-[122px]">
        <ul className="flex justify-between w-full">
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
    </>
  );
};

export default Hero;
