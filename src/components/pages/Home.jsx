import Hero from "../Hero";
import HeaderComponent from "../Header/HeaderComponent";
import Product from "../Products";
import {
  ApplePay,
  ArrowLeft,
  ArrowRight,
  Casual,
  Check,
  Email,
  Facebook,
  Formal,
  Github,
  GooglePay,
  Gym,
  HorizontalLine,
  Instagram,
  MasterCard,
  Party,
  Paypal,
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Rating,
  Twitter,
  Visa,
} from "../assets";

const Home = () => {
  const productList = [
    {
      id: 1,
      productImg: Product1,
      productName: "T-Shirt with Tape Details",
      price: 120,
    },
    {
      id: 2,
      productImg: Product2,
      productName: "T-Shirt with Tape Details",
      price: 120,
      oldPrice: 260,
      discount: -20,
    },
    {
      id: 3,
      productImg: Product3,
      productName: "T-Shirt with Tape Details",
      price: 120,
    },
    {
      id: 4,
      productImg: Product4,
      productName: "T-Shirt with Tape Details",
      price: 120,
      oldPrice: 260,
      discount: -20,
    },
    {
      id: 5,
      productImg: Product5,
      productName: "T-Shirt with Tape Details",
      price: 120,
      oldPrice: 260,
      discount: -20,
    },
    {
      id: 6,
      productImg: Product6,
      productName: "T-Shirt with Tape Details",
      price: 120,
    },
    {
      id: 7,
      productImg: Product7,
      productName: "T-Shirt with Tape Details",
      price: 120,
    },
    {
      id: 8,
      productImg: Product8,
      productName: "T-Shirt with Tape Details",
      price: 120,
    },
  ];
  return (
    <div>
      <HeaderComponent />
      <Hero />

      {/* products here */}
      <div>
        <h2 className="text-5xl font-extrabold text-center mt-20 mb-10">
          NEW ARRIVALS
        </h2>
        <div className="flex flex-row justify-center items-center">
          {/* product cards here */}
          {productList.slice(0, 4).map((items, id) => (
            <Product
              key={id}
              productImage={items.productImg}
              productName={items.productName}
              productPrice={items.price}
              oldPrice={items.oldPrice}
              discount={items.discount}
            />
          ))}
        </div>

        <div className="flex justify-center m-12 ">
          <button className="btn font-light text-black bg-white rounded-full px-[3.375rem] py-[1rem] w-[13.625rem]">
            View All
          </button>
        </div>
      </div>

      {/* horizontal line here */}
      <div className="flex justify-center">
        <img src={HorizontalLine} alt="horizontal line" />
      </div>

      {/* top selling here */}
      <div>
        <h2 className="text-5xl font-extrabold text-center mt-20 mb-10">
          TOP SELLING
        </h2>
        <div className="flex flex-row justify-center items-center">
          {/* product cards here */}
          {productList.slice(-4).map((items, id) => (
            <Product
              key={id}
              productImage={items.productImg}
              productName={items.productName}
              productPrice={items.price}
              oldPrice={items.oldPrice}
              discount={items.discount}
            />
          ))}
        </div>

        <div className="flex justify-center m-12 ">
          <button className="btn font-light text-black bg-white rounded-full px-[3.375rem] py-[1rem] w-[13.625rem]">
            View All
          </button>
        </div>
      </div>

      {/* browse by dress style here */}

      <div className="mx-[45px] bg-whiteHeroBg p-16 rounded-[40px] mb-24">
        <h2 className="font-heading text-5xl text-center mb-20">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="flex rounded-[20px] w-[407px] h-[289px] pt-8 pl-8"
            style={{
              backgroundImage: `url(${Casual})`,
              backgroundSize: "cover",
              backgroundPosition: "",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-4xl font-bold text-left">Casual</h3>
          </div>

          <div
            className="flex rounded-[20px] w-[684px] h-[289px] pt-8 pl-8"
            style={{
              backgroundImage: `url(${Formal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-4xl font-bold text-left">Formal</h3>
          </div>

          <div
            className="flex rounded-[20px] w-[684px] h-[289px] pt-8 pl-8"
            style={{
              backgroundImage: `url(${Party})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-4xl font-bold text-left">Party</h3>
          </div>

          <div
            className="flex rounded-[20px] w-[407px] h-[289px] pt-8 pl-8"
            style={{
              backgroundImage: `url(${Gym})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-4xl font-bold text-left">Gym</h3>
          </div>
        </div>
      </div>

      {/* customers review here */}
      <div className="mb-16">
        <div className="bp flex justify-between">
          <h2 className="font-heading text-5xl my-16 ">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center gap-4">
            <a>
              <img src={ArrowLeft} />
            </a>

            <a>
              <img src={ArrowRight} />
            </a>
          </div>
        </div>

        {/* rating carousels goes here */}
        <div className="carousel carousel-center rounded-box gap-4">
          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[400px] h-[240px] px-[32px] py-[28px] rounded-[20px]">
              <div className="flex gap-[6.49px] mb-[15px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[12px]">
                <h4 className="font-bold text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[16px] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[400px] h-[240px] px-[32px] py-[28px] rounded-[20px]">
              <div className="flex gap-[6.49px] mb-[15px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[12px]">
                <h4 className="font-bold text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[16px] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[400px] h-[240px] px-[32px] py-[28px] rounded-[20px]">
              <div className="flex gap-[6.49px] mb-[15px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[12px]">
                <h4 className="font-bold text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[16px] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[400px] h-[240px] px-[32px] py-[28px] rounded-[20px]">
              <div className="flex gap-[6.49px] mb-[15px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[12px]">
                <h4 className="font-bold text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[16px] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
        </div>

        {/* footer here */}
        <div className="relative">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
