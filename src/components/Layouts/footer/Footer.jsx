import { ApplePay, Email, Facebook, Github, GooglePay, HorizontalLine, Instagram, MasterCard, Paypal, Twitter, Visa } from "../../utils/assets";

const Footer = () => {
    return (
        <footer className="relative">
          {/* black background starts here */}
          <div className="absolute top-[-5.3125rem] left-0 right-0 z-50 flex items-center justify-between mx-[2.8125rem] rounded-[1.25rem] px-16 py-[2.25rem] bg-black">
            <h2 className="font-heading text-[2.5rem] leading-[2.8125rem] w-[34.4375rem] text-white text-wrap">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="flex flex-col gap-[.875rem]">
              <label className="input h-[3rem] bg-secondaryHero rounded-[3.875rem] flex items-center gap-3 px-4 py-3 w-[21.8125rem]">
                <img src={Email} />
                <input
                  type="text"
                  className="grow rounded-[3.875rem]"
                  placeholder="Enter your email address"
                />
              </label>
              <button className="btn font-medium text-[1rem] text-black bg-whiteFont rounded-full px-[1rem] py-[.75rem] w-[21.8125rem]">
                Subscribe to Newsletter
              </button>
            </div>
          </div>

          {/* footer starts here */}
          <div className="bg-whiteHeroBg pt-[150px] px-[45px]">
            {/* footer content here */}
            <div className="flex justify-between mb-[100px] items-center">
              <div className="flex flex-col gap-[2.1875rem] w-[15.5rem]">
                <div className="flex flex-col  gap-[1.5625rem]">
                  <h2 className="text-[2.0906rem] font-heading">SHOP.CO</h2>
                  <p className="text-black/60 text-[.875rem] leading-[1.375rem]">
                    We have clothes that suit your style and which you’re proud
                    to wear. From women to men.
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

              <div className="flex flex-col gap-[1.625rem]">
                <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
                  COMPANY
                </h3>
                <ul className="flex flex-col text-black/60 leading-[1.1875rem] gap-6">
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

              <div className="flex flex-col gap-[1.625rem]">
                <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
                  HELP
                </h3>
                <ul className="flex flex-col text-black/60 leading-[1.1875rem] gap-6">
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

              <div className="flex flex-col gap-[1.625rem]">
                <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
                  FAQ
                </h3>
                <ul className="flex flex-col text-black/60 leading-[1.1875rem] gap-6">
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

              <div className="flex flex-col gap-[1.625rem]">
                <h3 className="font-medium leading-[1.125rem] tracking-[.1875rem]">
                  RESOURCES
                </h3>
                <ul className="flex flex-col text-black/60 leading-[1.1875rem] gap-6">
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

            <div className="mt-12 mb-6">
              <img src={HorizontalLine} alt="horizontal line" />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[.875rem] text-black/60">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div className="flex">
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
    )
};

export default Footer;