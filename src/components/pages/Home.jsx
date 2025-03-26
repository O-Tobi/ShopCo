import Hero from "../Hero";
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
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigateTo = useNavigate();

  const handleProductDetails = () => {
    navigateTo("/product-details")
  };

 
  return (
    <div>
      <Hero />

      {/* products here */}
      <div>
        <h2 className="text-[2rem] lg:text-5xl font-extrabold text-center mt-14 lg:mt-20 mb-10">
          NEW ARRIVALS
        </h2>
        <div onClick={handleProductDetails} className="flex flex-row justify-center items-center carousel">
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
          <button className="btn font-light text-black bg-white rounded-full lg:px-[54px] lg:py-[16px] w-full md:w-[218px]">
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
        <h2 className="text-[2rem] lg:text-5xl font-extrabold text-center mt-14 lg:mt-20 mb-10">
          TOP SELLING
        </h2>
        <div onClick={handleProductDetails} className="flex flex-row justify-center items-center carousel">
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
          <button className="btn font-light text-black bg-white rounded-full lg:px-[54px] lg:py-[16px] w-full md:w-[218px]">
            View All
          </button>
        </div>
      </div>

      {/* browse by dress style here */}

      <div className="mx-[.3125rem] lg:mx-[2.8125rem] bg-whiteHeroBg p-4 lg:p-16 rounded-[2.5rem] mb-12 lg:mb-24">
        <h2 className="font-heading text-[1.875rem] lg:text-5xl text-center  mb-[.625rem] lg:mb-20">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div
            className="flex rounded-[1.25rem] w-[19.375rem] h-[11.875rem]  lg:w-[25.4375rem] lg:h-[18.0625rem] pt-6 pl-6 lg:pt-8 lg:pl-8"
            style={{
              backgroundImage: `url(${Casual})`,
              backgroundSize: "cover",
              backgroundPosition: "",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-[1.5rem] lg:text-4xl font-bold text-left">
              Casual
            </h3>
          </div>

          <div
            className="flex rounded-[1.25rem] w-[19.375rem] h-[11.875rem] md:w-[25rem] lg:w-[42.75rem] lg:h-[18.0625rem] pt-8 pl-8"
            style={{
              backgroundImage: `url(${Formal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-[1.5rem] lg:text-4xl font-bold text-left">
              Formal
            </h3>
          </div>

          <div
            className="flex rounded-[1.25rem] w-[19.375rem] h-[11.875rem] md:w-[25rem] lg:w-[42.75rem] lg:h-[18.0625rem] pt-8 pl-8"
            style={{
              backgroundImage: `url(${Party})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-[1.5rem] lg:text-4xl font-bold text-left">
              Party
            </h3>
          </div>

          <div
            className="flex rounded-[1.25rem] w-[19.375rem] h-[11.875rem] lg:w-[25.4375rem] lg:h-[18.0625rem] pt-6 pl-6 lg:pt-8 lg:pl-8"
            style={{
              backgroundImage: `url(${Gym})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="text-[1.5rem] lg:text-4xl font-bold text-left">Gym</h3>
          </div>
        </div>
      </div>

      {/* customers review here */}
      <div className="mb-16">
        <div className="px-[.625rem] lg:px-[2.8125rem] flex justify-between mb-6 lg:my-16">
          <h2 className="font-heading text-[1.75rem] lg:text-5xl flex-1">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex pb-2 items-end gap-2 lg:gap-4">
            <a>
              <img src={ArrowLeft} />
            </a>

            <a>
              <img src={ArrowRight} />
            </a>
          </div>
        </div>

        {/* rating carousels goes here */}
        <div className="carousel  rounded-box gap-4">
          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[22.375rem] h-[11.625rem] lg:w-[25rem] lg:h-[15rem] p-[1.5rem] lg:px-[2rem] lg:py-[1.75rem] rounded-[1.25rem]">
              <div className="flex gap-[.4056rem] mb-[.9375rem]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[.75rem]">
                <h4 className="font-bold text-[1rem] lg:text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[.875rem] lg:text-[1rem] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[22.375rem] h-[11.625rem] lg:w-[25rem] lg:h-[15rem] p-[1.5rem] lg:px-[2rem] lg:py-[1.75rem] rounded-[1.25rem]">
              <div className="flex gap-[.4056rem] mb-[.9375rem]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[.75rem]">
                <h4 className="font-bold text-[1rem] lg:text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[.875rem] lg:text-[1rem] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[22.375rem] h-[11.625rem] lg:w-[25rem] lg:h-[15rem] p-[1.5rem] lg:px-[2rem] lg:py-[1.75rem] rounded-[1.25rem]">
              <div className="flex gap-[.4056rem] mb-[.9375rem]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[.75rem]">
                <h4 className="font-bold text-[1rem] lg:text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[.875rem] lg:text-[1rem] opacity-60">
                &ldquo;I&rsquo;m blown away by the quality and style of the
                clothes I received from Shop.co. From casual wear to elegant
                dresses, every piece I&rsquo;ve bought has exceeded my
                expectations.&rdquo;
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="flex-wrap border-2 w-[22.375rem] h-[11.625rem] lg:w-[25rem] lg:h-[15rem] p-[1.5rem] lg:px-[2rem] lg:py-[1.75rem] rounded-[1.25rem]">
              <div className="flex gap-[.4056rem] mb-[.9375rem]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <div className="flex gap-1 mb-[.75rem]">
                <h4 className="font-bold text-[1rem] lg:text-xl">Sarah M.</h4>
                <img src={Check} alt="check" />
              </div>

              <p className="text-[.875rem] lg:text-[1rem] opacity-60">
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
      </div>
    </div>
  );
};

export default Home;
