import {
  ApplePay,
  Email,
  Facebook,
  Github,
  GooglePay,
  HorizontalLine,
  Instagram,
  MasterCard,
  Paypal,
  SmLine,
  Twitter,
  Visa,
} from "../../utils/assets";

const Footer = () => {
  return (
    <footer className="relative">
      {/* black background starts here */}
      <div className="absolute top-[-5.3125rem] left-0 right-0 z-50 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between  mx-4 lg:mx-[2.8125rem] rounded-[1.25rem] px-4 md:px-16 md:py-[2.25rem] bg-black">
        <h2 className="font-heading leading-tight text-[25px] md:text-[30px] mx-2 my-4 md:m-0 lg:text-[2.5rem] lg:leading-[2.8125rem] w-full lg:w-[34.4375rem] text-white text-wrap">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col  justify-center items-center my-6 md:my-0 gap-3 md:gap-[.875rem] w-full md:w-[280px] lg:w-[349px]">
          <label className="input h-[48px] lg:h-[3rem] bg-secondaryHero rounded-full flex items-center gap-3 px-4 py-3 w-[250px] lg:w-[21.8125rem]">
            <img src={Email} />
            <input
              type="text"
              className="grow rounded-[3.875rem] text-[14px] lg:text-[16px]"
              placeholder="Enter your email address"
            />
          </label>
          <button className="btn font-medium h-[40px] lg:h-[3rem] text-[14px] lg:text-[1rem] text-black bg-whiteFont rounded-full px-4 py-3 w-[250px] lg:w-[21.8125rem]">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* footer starts here */}
      <div className="bg-whiteHeroBg pt-[200px] px-[10px] md:pt-[150px] md:px-[45px]">
        {/* footer content here */}
        <div className="flex flex-wrap justify-between  items-center">
          <div className="flex flex-col gap-2 md:gap-[2.1875rem] w-[15.5rem] my-6 md:my-0">
            <div className="flex flex-col  gap-2 md:gap-[1.5625rem] md:w-full">
              <h2 className="text-[2.0906rem] font-heading">SHOP.CO</h2>
              <p className="text-black/60 text-[.875rem] leading-[1.375rem]">
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </p>
            </div>

            <div className="flex gap-[.75rem]">
              <a>
                <img src={Twitter} alt="Twitter" />
              </a>
              <a>
                <img src={Facebook} alt="Facebook" />
              </a>
              <a>
                <img src={Instagram} alt="Instagram" />
              </a>
              <a>
                <img src={Github} alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="m-3 flex flex-col gap-[16px] md:gap-[1.625rem]">
            <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
              COMPANY
            </h3>
            <ul className="flex flex-col text-black/60 text-[14px] lg:text-[16px] leading-[1.1875rem] gap-4 md:gap-6 mb-6 md:mb-0">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="m-3 flex flex-col gap-[16px] md:gap-[1.625rem]">
            <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
              HELP
            </h3>
            <ul className="flex flex-col text-black/60 text-[14px] lg:text-[16px] leading-[1.1875rem] gap-4 md:gap-6 mb-6 md:mb-0">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="m-3 flex flex-col gap-[16px] md:gap-[1.625rem]">
            <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
              FAQ
            </h3>
            <ul className="flex flex-col text-black/60 text-[14px] lg:text-[16px] leading-[1.1875rem] gap-4 md:gap-6 mb-6 md:mb-0">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>

          <div className="m-3 flex flex-col gap-[16px] md:gap-[1.625rem]">
            <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
              RESOURCES
            </h3>
            <ul className="flex flex-col text-black/60 text-[14px] lg:text-[16px] leading-[1.1875rem] gap-4 md:gap-6 mb-6 md:mb-0">
              <li>
                <a href="#">Free e-Books</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

        {/* horizontal line here */}
        <div className="flex justify-center  md:hidden p-4">
          <img src={SmLine} alt="horizontal line" />
        </div>

        <div className="flex justify-center my-8 md:block">
          <img src={HorizontalLine} alt="horizontal line" />
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3 my-[-40px] md:m-0">
          <p className="text-[.875rem] text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-[0px]">
            <a>
              <img src={Visa} alt="Visa" />
            </a>
            <a>
              <img src={MasterCard} alt="MasterCard" />
            </a>
            <a>
              <img src={Paypal} alt="Paypal" />
            </a>
            <a>
              <img src={ApplePay} alt="ApplePay" />
            </a>
            <a>
              <img src={GooglePay} alt="GooglePay" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
