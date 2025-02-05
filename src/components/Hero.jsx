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
      <div className="flex flex-wrap justify-center items-center gap-0 lg:gap-[4rem] pt-8  bg-whiteHeroBg w-screen">
        {/* the right section starts here */}
        <div className="flex flex-col items-center md:items-start md:w-6/12 px-[10px] lg:px-[20px] lg:bp lg:my-12">
          <div>
            <h1 className="font-heading text-[2rem] lg:text-[4rem] leading-none text-left">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-primary opacity-[60%] leading-5 py-6 text-[.875rem] lg:text-[1rem] ">
              Browse through our diverse range of meticulously crafted garments,
              designed <br /> to bring out your individuality and cater to your
              sense of style.
            </p>
          </div>
          <button className="btn font-light text-whiteFont bg-black rounded-full px-[54px] py-[16px] w-[300px] md:w-[210px]">
            Shop Now
          </button>{" "}
          <div className="py-6 z-8">
            <ul className="flex flex-wrap justify-center items-center gap-7 md:gap-2 lg:gap-8">
              <li>
                <h2 className="text-[24px] font-bold leading-8 lg:text-[40px] lg:font-bold lg:leading-10">
                  200+
                </h2>
                <p className="text-[12px] text-black/60 lg:text-[16px]">
                  International Brands
                </p>
              </li>
              <img src={Line} />
              <li>
                <h2 className="text-[24px] font-bold leading-8 lg:text-[40px] lg:font-bold lg:leading-10">
                  2,000+
                </h2>
                <p className="text-[12px] text-black/60 lg:text-[16px]">
                  High-Quality Products
                </p>
              </li>
              <img src={Line} className="hidden md:block" />
              <li>
                <h2 className="text-[24px] font-bold leading-8 lg:text-[40px] lg:font-bold lg:leading-10">
                  30,000+
                </h2>
                <p className="text-[12px] text-black/60 lg:text-[16px]">
                  Happy Customers
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* the left section starts here */}
        <div className="">
          <div className="flex justify-center items-center relative">
            <img
              src={SmallStar}
              className="w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] absolute left-1 lg:left-2 z-10"
            />

            <img src={HeroImg} className="h-[400px] lg:h-[663px]  z-0" />

            <img
              src={BigStar}
              className="w-[60px] h-[60px] lg:w-[104px] lg:h-[104px] absolute bottom-0 right-3 top-[40px] lg:right-6 lg:top-[100px] z-10"
            />
          </div>
        </div>
      </div>

      <div className="px-[18px] lg:px-[45px] flex justify-center items-center bg-black h-[146px] lg:h-[122px]">
        <ul className="flex flex-wrap justify-center md:justify-between w-full max-w-[400px] md:max-w-full">
          {/* Top row on small screens, all in one row on md and lg */}
          <li className="w-1/3 md:w-auto flex justify-center">
            <img src={Versace} className="h-[18px] lg:h-[38px]" />
          </li>
          <li className="w-1/3 md:w-auto flex justify-center">
            <img src={Zara} className="h-[18px] lg:h-[38px]" />
          </li>
          <li className="w-1/3 md:w-auto flex justify-center">
            <img src={Gucci} className="h-[18px] lg:h-[38px]" />
          </li>

          {/* Bottom row on small screens, merged into same row in md+ */}
          <li className="mx-2 md:mx-0 md:w-auto flex justify-center mt-4 md:mt-0">
            <img src={Prada} className="h-[18px] lg:h-[38px]" />
          </li>

          <li className="mx-2 md:w-auto flex justify-center mt-4 md:mt-0">
            <img src={CalvinKlein} className="h-[18px] lg:h-[38px]" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hero;
