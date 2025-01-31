import Hero from "../Hero";
import HeaderComponent from "../Header/HeaderComponent";
import Product from "../Products";
import {
  HorizontalLine,
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
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
      discount: -20
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
      discount: -20
    },
    {
      id: 5,
      productImg: Product5,
      productName: "T-Shirt with Tape Details",
      price: 120,
      oldPrice: 260,
      discount: -20
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

        <div className="flex justify-center m-12">
          <button className="btn font-light text-black bg-white rounded-full px-[54px] py-[16px]">
            View All
          </button>
        </div>
      </div>

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

        <div className="flex justify-center m-12">
          <button className="btn font-light text-black bg-white rounded-full px-[54px] py-[16px]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
