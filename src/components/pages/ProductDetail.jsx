import Product from "../Products";
import {
  BigProduct,
  SmallProduct1,
  SmallProduct2,
  SmallProduct3,
  Rating,
  HorizontalLine,
  ProductCheck,
  Minus,
  Add,
  Filter,
  Arrow,
  Options,
  Check,
} from "../utils/assets";
import { extraProductList, RatingList } from "../utils/constants";

const ProductDetail = () => {
  return (
    <div className="mb-[6.25rem]  px-[1rem] md:px-[2.8125rem]">
      <div className="mb-[1.25rem] md:mb-4">
        <img src={HorizontalLine} />
      </div>
      <div className="breadcrumbs md:mb-6">
        <ul className=" text-[.875rem] md:text-[1rem] text-black/60">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Men</a>
          </li>
          <li className="text-black">
            <a>T-Shirts</a>
          </li>
        </ul>
      </div>

      {/* product details starts here */}
      <div className="flex flex-col lg:flex-row items-center justify-center md:gap-8">
        {/* left side for images here */}
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex lg:flex-col justify-between gap-[.25rem] lg:gap-7 order-2 lg:order-1">
            <img
              src={SmallProduct1}
              className="w-[6.9375rem] h-[6.625rem] lg:w-[9.5rem] lg:h-[9.875rem]"
            />
            <img
              src={SmallProduct2}
              className="w-[6.9375rem] h-[6.625rem] lg:w-[9.5rem] lg:h-[9.875rem]"
            />
            <img
              src={SmallProduct3}
              className="w-[6.9375rem] h-[6.625rem] lg:w-[9.5rem] lg:h-[9.875rem]"
            />
          </div>

          <div className="big-img order-1 lg:order-2">
            <img
              src={BigProduct}
              className="w-[22.25rem] h-[23.125rem] lg:w-[27.75rem] lg:h-[33.125rem]"
            />
          </div>
        </div>

        {/* right side for product description starts here */}
        <div className=" mt-4 md:mt-0">
          <div className="flex flex-col justify-center px-2 md:px-0 gap-[.75rem] my-0">
            <h1 className="font-heading text-[1.5rem] md:text-[2.5rem] text-wrap">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center gap-[1rem] lg:gap-3 text-[1rem]">
              <div className="flex gap-[.335rem] md:gap-[.4056rem]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <p>
                4.5/<span className="text-black/60">5</span>
              </p>
            </div>

            <div className="flex items-center gap-[.625rem]">
              <h2 className="font-bold  text-[1.5rem] md:text-[2rem]">$260</h2>
              <h2 className="font-bold  text-[1.5rem] md:text-[2rem] opacity-40 line-through">
                $300
              </h2>
              <div className="flex justify-center items-center bg-discountbg rounded-full px-[.875rem] py-[.375rem] h-[2.125rem] w-[4.5rem]">
                <h2 className="font-light text-[.875rem] md:text-[1rem] text-discount">
                  -40%
                </h2>
              </div>
            </div>
          </div>

          <p className="opacity-60 text-[.875rem] px-2 md:text-[1rem] w-full md:w-[36.875rem] leading-[1.25rem] md:leading-[1.375rem] my-[1.25rem]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="line w-[22.375rem] md:w-[36.875rem] my-[1.5rem] md:my-[1.25rem]">
            <hr />
          </div>

          <p className=" mb-[1rem] text-[.875rem] md:text-[1rem] px-2 opacity-60">
            Select Colors
          </p>
          <div className="colors flex gap-[.75rem] px-2 md:gap-[1rem] m-0">
            <div className="brown flex justify-center items-center w-[2.4375rem] h-[2.4375rem] md:w-[2.3125rem] md:h-[2.3125rem] rounded-full bg-[#4F4631]">
              {" "}
              <img src={ProductCheck} alt="" />{" "}
            </div>
            <div className="green flex justify-center items-center w-[2.4375rem] h-[2.4375rem] md:w-[2.3125rem] md:h-[2.3125rem] rounded-full bg-[#314F4A]"></div>
            <div className="purple flex justify-center items-center w-[2.4375rem] h-[2.4375rem] md:w-[2.3125rem] md:h-[2.3125rem] rounded-full bg-[#31344F]"></div>
          </div>

          <div className="line w-[22.375rem] md:w-[36.875rem] my-[1.25rem]">
            <hr />
          </div>

          <p className=" mb-[1rem] px-2 text-[.875rem] md:text-[1rem] opacity-60">
            Choose Size
          </p>
          <div className="size flex gap-[.125rem] md:gap-[.75rem] m-0 px-2">
            <button className="small  h-[2.4375rem] md:h-[2.875rem] gap-[.75rem] px-[1.25rem] py-[.625rem] md:px-[1.5rem] md:py-[.75rem] rounded-[3.875rem] bg-[#F0F0F0] text-[.875rem] md:text-[1rem] opacity-60">
              Small
            </button>
            <button className="medium h-[2.4375rem] md:h-[2.875rem] gap-[.75rem] px-[1.25rem] py-[.625rem] md:px-[1.5rem] md:py-[.75rem] rounded-[3.875rem] bg-[#F0F0F0] text-[.875rem] md:text-[1rem] opacity-60">
              Medium
            </button>
            <button className="large h-[2.4375rem] md:h-[2.875rem] gap-[.75rem] px-[1.25rem] py-[.625rem] md:px-[1.5rem] md:py-[.75rem] rounded-[3.875rem] bg-primary text-[.875rem] md:text-[1rem] text-white">
              Large
            </button>
            <button className="x-large h-[2.4375rem] md:h-[2.875rem] gap-[.75rem] px-[1.25rem] py-[.625rem] md:px-[1.5rem] md:py-[.75rem] rounded-[3.875rem] bg-[#F0F0F0] text-[.875rem] md:text-[1rem] opacity-60">
              X-Large
            </button>
          </div>

          <div className="line w-[22.375rem] md:w-[36.875rem] my-[1.25rem]">
            <hr />
          </div>

          <div className="flex gap-[.75rem] lg:gap-[1.25rem]">
            <div className="add flex justify-between w-[6.875rem] h-[2.75rem] lg:w-[10.625rem] lg:h-[3.25rem] px-[1rem] md:px-[1.25rem] py-[.75rem] md:py-[1rem] bg-whiteHeroBg rounded-[3.875rem]">
              <div className="minus">
                {" "}
                <img
                  src={Minus}
                  alt=""
                  className="w-[1.25rem] h-[1.25rem] lg:w-[1.5rem] lg:h-[1.5rem]"
                />{" "}
              </div>
              <div className="number text-[.875rem] lg:text-[1rem]">1</div>
              <div className="plus">
                {" "}
                <img
                  src={Add}
                  alt=""
                  className="w-[1.25rem] h-[1.25rem] lg:w-[1.5rem] lg:h-[1.5rem]"
                />{" "}
              </div>
            </div>

            <div>
              <button className="btn  h-[2.75rem] w-[14.75rem] md:h-[3.25rem]  md:w-[25rem] gap-[.75rem] px-[3.375rem] py-[1rem] rounded-[3.875rem] bg-primary text-white text-[1rem] font-light">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Rating, Rating & Reviews and FAQs starts here */}

      <div className="parent mt-[5rem] w-full">
        <div className="topnav flex justify-between items-center w-full">
          <div className="productdetails w-1/3 md:w-[32.0625rem] flex flex-col justify-center items-center gap-[1.5rem]">
            <p className="opacity-60 text-[.875rem] md:text-[1rem]">
              Product Details
            </p>
            <hr className="border-1 border-primary opacity-10 w-full" />
          </div>

          <div className="ratingsnreview w-1/3 md:w-[25.875rem] flex flex-col justify-center items-center gap-[1.5rem]">
            <p className="text-[.875rem] md:text-[1rem]">Reviews</p>
            <hr className="border-2 border-primary w-full" />
          </div>

          <div className="faq w-1/3 md:w-[32.0625rem] flex flex-col justify-center items-center gap-[1.5rem]">
            <p className="opacity-60 text-[.875rem] md:text-[1rem]">FAQs</p>
            <hr className="border-1 border-primary opacity-10 w-full" />
          </div>
        </div>

        {/* all reviews and filter here */}
        <div className="review flex  justify-between mt-[2rem] mb-[1.6875rem] w-full">
          <div className="allReviews flex items-center gap-(.5rem)">
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold">
              All Reviews
            </h2>
            <p className="opacity-60 text-[.875rem] md:text-[1rem]">(451)</p>
          </div>

          <div className="filterButtons  flex items-center justify-end gap-[.5rem] md:gap-[.625rem]">
            <btn className="filter bg-whiteHeroBg md:px-[1.25rem] md:py-[1rem] px-[.625rem] py-[.5rem] h-[2.5rem] md:h-[3rem] flex items-center justify-center rounded-[3.875rem]">
              <img src={Filter} alt="" />
            </btn>
            <btn className="latest hidden btn bg-whiteHeroBg md:flex justify-between  items-center px-[1.25rem] py-[1rem] h-[3rem] w-[7.5rem] rounded-[3.875rem] font-medium">
              Latest <img src={Arrow} alt="" />{" "}
            </btn>
            <button className="writeAReview btn bg-primary flex justify-center  items-center px-[1rem] py-[.75rem] md:px-[1.25rem] md:py-[1rem] h-[2.5rem]  md:h-[3rem] md:w-[10.375rem] rounded-[3.875rem] font-medium text-white">
              Write a Review
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-[1.25rem]">
          {RatingList.map((rl, index) => (
            <div
              key={index}
              className="container w-full md:w-[48%] rounded-[1.25rem] p-[1rem]  md:px-[2rem] md:py-[1.75rem] border-[.0625rem] border-primary/10"
            >
              <div className="mb-[1rem] md:mb-[1.5rem] p-[.625rem] md:p-0">
                <div className="stars flex justify-between">
                  <div className="flex gap-[.3125rem] md:gap-[.4375rem]">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={Rating} alt="star rating" />
                    ))}
                  </div>
                  <img src={Options} alt="" className="hidden md:block" />
                </div>
                <div className="flex items-center gap-[.25rem] mt-[.9375rem] mb-[.5rem] md:mb-[.75rem]">
                  <h2 className="font-bold text-[1.25rem]">{rl.name}</h2>
                  <img src={Check} alt="" />
                </div>

                <p className="text-[.875rem] md:text-[1rem] opacity-60 ">
                  &ldquo;{rl.comment}&rdquo;
                </p>
              </div>

              <p className="date text-[.875rem] md:text-[1rem] opacity-60 p-2 md:p-0">
                Posted on {rl.date}
              </p>
            </div>
          ))}
        </div>

        {/* top selling here */}
        <div>
          <h2 className="text-[2rem] lg:text-5xl font-extrabold text-center mt-14 lg:mt-20 mb-10">
            YOU MIGHT ALSO LIKE
          </h2>
          <div className="flex flex-row justify-center items-center carousel">
            {/* product cards here */}
            {extraProductList.slice(-4).map((items, id) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
