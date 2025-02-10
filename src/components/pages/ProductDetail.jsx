import {
  BigProduct,
  SmallProduct1,
  SmallProduct2,
  SmallProduct3,
  Rating,
  SmLine,
  HorizontalLine,
} from "../utils/assets";

const ProductDetail = () => {
  return (
    <div className="mb-[100px] container px-[45px]">
      <div className="mb-4">
        <img src={HorizontalLine} />
      </div>
      <div className="breadcrumbs mb-6">
        <ul className=" text-[16px] text-black/60">
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
      <div className="flex gap-8">
        {/* left side for images here */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <img src={SmallProduct1} />
            <img src={SmallProduct2} />
            <img src={SmallProduct3} />
          </div>

          <div className="big-img">
            <img src={BigProduct} />
          </div>
        </div>

        {/* right side for product description starts here */}
        <div>
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-[40px] ">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center gap-3 text-[16px]">
              <div className="flex gap-[6.49px]">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Rating} alt="star rating" />
                ))}
              </div>
              <p>4.5/<span className="text-black/60">5</span></p>
            </div>

            <div className="flex items-center gap-[10px]">
              <h2 className="font-bold  text-[20px] lg:text-[32px]">$260</h2>
              <h2 className="font-bold  text-[20px] lg:text-[32px] opacity-40 line-through">$300</h2>
              <div className="flex justify-center items-center bg-discountbg rounded-full px-[14px] py-[6px] h-[34px] w-[72px]">
                  <h2 className="font-light text-[10px] lg:text-[16px] text-discount">
                    -40%
                  </h2>
                </div>
            </div>
          </div>

          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="line">
            <img src={SmLine} />
          </div>

          <p>Select Colors</p>
          <div className="colors">
            <div className="brown">brown</div>
            <div className="green">green</div>
            <div className="purple">purple</div>
          </div>

          <div className="line">
            <img src={SmLine} />
          </div>

          <p>Choose Size</p>
          <div className="size">
            <button className="small">Small</button>
            <button className="medium">Medium</button>
            <button className="large">Large</button>
            <button className="x-large">X-Large</button>
          </div>

          <div className="line">
            <img src={SmLine} />
          </div>

          <div>
            <div className="add">
              <div className="minus">-</div>
              <div className="number">1</div>
              <div className="plus">+</div>
            </div>

            <div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
