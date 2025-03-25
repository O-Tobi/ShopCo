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
    <div className="mb-[100px]  px-[16px] md:px-[45px]">
      <div className="mb-[20px] md:mb-4">
        <img src={HorizontalLine} />
      </div>
      <div className="breadcrumbs md:mb-6">
        <ul className=" text-[14px] md:text-[16px] text-black/60">
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
          <div className="flex lg:flex-col justify-between gap-[4px] lg:gap-7 order-2 lg:order-1">
            <img src={SmallProduct1} className="w-[111px] h-[106px] lg:w-[152px] lg:h-[158px]"/>
            <img src={SmallProduct2} className="w-[111px] h-[106px] lg:w-[152px] lg:h-[158px]"/>
            <img src={SmallProduct3} className="w-[111px] h-[106px] lg:w-[152px] lg:h-[158px]"/>
          </div>

          <div className="big-img order-1 lg:order-2">
            <img src={BigProduct} className="w-[356px] h-[370px] lg:w-[444px] lg:h-[530px]" />
          </div>
        </div>

        {/* right side for product description starts here */}
        <div className=" mt-4 md:mt-0">
          <div className="flex flex-col justify-center px-2 md:px-0 gap-[12px] my-0">
            <h1 className="font-heading text-[24px] md:text-[40px] text-wrap">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center gap-[16px] lg:gap-3 text-[16px]">
              <div className="flex gap-[5.36px] md:gap-[6.49px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <p>
                4.5/<span className="text-black/60">5</span>
              </p>
            </div>

            <div className="flex items-center gap-[10px]">
              <h2 className="font-bold  text-[24px] md:text-[32px]">$260</h2>
              <h2 className="font-bold  text-[24px] md:text-[32px] opacity-40 line-through">
                $300
              </h2>
              <div className="flex justify-center items-center bg-discountbg rounded-full px-[14px] py-[6px] h-[34px] w-[72px]">
                <h2 className="font-light text-[14px] md:text-[16px] text-discount">
                  -40%
                </h2>
              </div>
            </div>
          </div>

          <p className="opacity-60 text-[14px] px-2 md:text-[16px] w-full md:w-[590px] leading-[20px] md:leading-[22px] my-[20px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="line w-[358px] md:w-[590px] my-[24px] md:my-[20px]">
            <hr />
          </div>

          <p className=" mb-[16px] text-[14px] md:text-[16px] px-2 opacity-60">Select Colors</p>
          <div className="colors flex gap-[12px] px-2 md:gap-[16px] m-0">
            <div className="brown flex justify-center items-center w-[39px] h-[39px] md:w-[37px] md:h-[37px] rounded-full bg-[#4F4631]">
              {" "}
              <img src={ProductCheck} alt="" />{" "}
            </div>
            <div className="green flex justify-center items-center w-[39px] h-[39px] md:w-[37px] md:h-[37px] rounded-full bg-[#314F4A]"></div>
            <div className="purple flex justify-center items-center w-[39px] h-[39px] md:w-[37px] md:h-[37px] rounded-full bg-[#31344F]"></div>
          </div>

          <div className="line w-[358px] md:w-[590px] my-[20px]">
            <hr />
          </div>

          <p className=" mb-[16px] px-2 text-[14px] md:text-[16px] opacity-60">Choose Size</p>
          <div className="size flex gap-[2px] md:gap-[12px] m-0 px-2">
            <button className="small  h-[39px] md:h-[46px] gap-[12px] px-[20px] py-[10px] md:px-[24px] md:py-[12px] rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] opacity-60">
              Small
            </button>
            <button className="medium h-[39px] md:h-[46px] gap-[12px] px-[20px] py-[10px] md:px-[24px] md:py-[12px] rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] opacity-60">
              Medium
            </button>
            <button className="large h-[39px] md:h-[46px] gap-[12px] px-[20px] py-[10px] md:px-[24px] md:py-[12px] rounded-[62px] bg-primary text-[14px] md:text-[16px] text-white">
              Large
            </button>
            <button className="x-large h-[39px] md:h-[46px] gap-[12px] px-[20px] py-[10px] md:px-[24px] md:py-[12px] rounded-[62px] bg-[#F0F0F0] text-[14px] md:text-[16px] opacity-60">
              X-Large
            </button>
          </div>

          <div className="line w-[358px] md:w-[590px] my-[20px]">
            <hr />
          </div>

          <div className="flex gap-[12px] lg:gap-[20px]">
            <div className="add flex justify-between w-[110px] h-[44px] lg:w-[170px] lg:h-[52px] px-[16px] md:px-[20px] py-[12px] md:py-[16px] bg-whiteHeroBg rounded-[62px]">
              <div className="minus">
                {" "}
                <img src={Minus} alt="" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />{" "}
              </div>
              <div className="number text-[14px] lg:text-[16px]">1</div>
              <div className="plus">
                {" "}
                <img src={Add} alt="" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]" />{" "}
              </div>
            </div>

            <div>
              <button className="btn  h-[44px] w-[236px] md:h-[52px]  md:w-[400px] gap-[12px] px-[54px] py-[16px] rounded-[62px] bg-primary text-white text-[16px] font-light">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Rating, Rating & Reviews and FAQs starts here */}

      <div className="parent mt-[80px] w-full">
        <div className="topnav flex justify-between items-center w-full">
          <div className="productdetails w-1/3 md:w-[513px] flex flex-col justify-center items-center gap-[24px]">
            <p className="opacity-60 text-[14px] md:text-[16px]">Product Details</p>
            <hr className="border-1 border-primary opacity-10 w-full" />
          </div>

          <div className="ratingsnreview w-1/3 md:w-[414px] flex flex-col justify-center items-center gap-[24px]">
            <p className="text-[14px] md:text-[16px]">Reviews</p>
            <hr className="border-2 border-primary w-full" />
          </div>

          <div className="faq w-1/3 md:w-[513px] flex flex-col justify-center items-center gap-[24px]">
            <p className="opacity-60 text-[14px] md:text-[16px]">FAQs</p>
            <hr className="border-1 border-primary opacity-10 w-full" />
          </div>
        </div>

        {/* all reviews and filter here */}
        <div className="review flex  justify-between mt-[32px] w-full">
          <div className="allReviews flex items-center gap-(8px)">
            <h2 className="text-[24px] font-bold">All Reviews</h2>
            <p className="opacity-60">(451)</p>
          </div>

          <div className="filterButtons flex gap-[10px]">
            <btn className="filter bg-whiteHeroBg px-[20px] h-[48px] flex items-center justify-center py-[16px]  rounded-[62px]">
              <img src={Filter} alt="" />
            </btn>
            <btn className="latest btn bg-whiteHeroBg flex justify-between  items-center px-[20px] py-[16px] h-[48px] w-[120px] rounded-[62px] font-medium">
              Latest <img src={Arrow} alt="" />{" "}
            </btn>
            <button className="writeAReview btn bg-primary flex justify-center  items-center px-[20px] py-[16px] h-[48px] w-[166px] rounded-[62px] font-medium text-white">
              Write a Review
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-[20px]">
          {RatingList.map((rl, index) => (
            <div
              key={index}
              className="container w-[48%] rounded-[20px] px-[32px] py-[28px] border-[1px] border-primary/10"
            >
              <div className="mb-[24px]">
                <div className="stars flex justify-between">
                  <div className="flex gap-[7px]">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={Rating} alt="star rating" />
                    ))}
                  </div>
                  <img src={Options} alt="" />
                </div>
                <div className="flex items-center gap-[4px] mt-[15px] mb-[12px]">
                  <h2 className="font-bold text-[20px]">{rl.name}</h2>
                  <img src={Check} alt="" />
                </div>

                <p className="text-[16px] opacity-60">
                  &ldquo;{rl.comment}&rdquo;
                </p>
              </div>

              <p className="date text-[16px] opacity-60">Posted on {rl.date}</p>
            </div>
          ))}
        </div>

        {/* top selling here */}
        <div>
          <h2 className="text-[32px] lg:text-5xl font-extrabold text-center mt-14 lg:mt-20 mb-10">
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
