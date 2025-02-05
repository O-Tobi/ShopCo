import Hero from "../Hero";
import HeaderComponent from "../Layouts/header/HeaderComponent";
import Product from "../Products";
import { productList } from "../utils/constants";

import {
  ArrowLeft,
  ArrowRight,
  Casual,
  Check,
  Formal,
  Gym,
  HorizontalLine,
  Party,
  Rating,
  SmLine,
} from "../utils/assets";
import Footer from "../Layouts/footer/Footer";

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <Hero />

      {/* products here */}
      <div>
        <h2 className="text-[32px] lg:text-5xl font-extrabold text-center mt-14 lg:mt-20 mb-10">
          NEW ARRIVALS
        </h2>
        <div className="flex flex-row justify-center items-center carousel">
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

        <div className="flex justify-center p-4 my-4 lg:m-12 ">
          <button className="btn font-light text-black bg-white rounded-full lg:px-[3.375rem] lg:py-[1rem] w-full md:w-[13.625rem]">
            View All
          </button>
        </div>
      </div>

      {/* horizontal line here */}
      <div className="flex justify-center md:hidden p-4">
        <img src={SmLine} alt="horizontal line" />
      </div>

      <div className="flex justify-center md:block">
        <img src={HorizontalLine} alt="horizontal line" />
      </div>

      {/* top selling here */}
      <div>
        <h2 className="text-[32px] lg:text-5xl font-extrabold text-center mt-14 lg:mt-20 mb-10">
          TOP SELLING
        </h2>
        <div className="flex flex-row justify-center items-center carousel">
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

        <div className="flex justify-center p-4 my-4 lg:m-12 ">
          <button className="btn font-light text-black bg-white rounded-full lg:px-[3.375rem] lg:py-[1rem] w-full md:w-[13.625rem]">
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
          <h2 className="font-heading text-5xl my-16 ">OUR HAPPY CUSTOMERS</h2>
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
