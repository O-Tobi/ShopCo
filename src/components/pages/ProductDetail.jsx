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
    <div className="mb-[100px]">
      <div>
        <img src={HorizontalLine} />
      </div>
      <div className="breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>T-Shirts</a>
          </li>
        </ul>
      </div>

      {/* product details starts here */}
      <div>
        {/* left side for images here */}
        <div className="product images">
          <div className="small-img">
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
          <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex gap-[6.49px] mb-[15px]">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={Rating} alt="star rating" />
            ))}
          </div>
          <div className="price">
            <h2>$260</h2>
            <h2>$300</h2>
            <h2 className="discount">-40%</h2>
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
