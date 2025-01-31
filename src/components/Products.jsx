import { Rating } from "./assets";

const Product = ({
  productName,
  productImage,
  productPrice,
  oldPrice,
  discount,
}) => {
  return (
    <div>
      <div className="flex flex-col mx-2">
        <div className="mb-4">
          <img src={productImage} alt="product1" className="h-[298px]" />
        </div>
        <div className="mb-4">
          <p className="font-bold text-xl mb-2">{productName}</p>
          <div className="flex mb-2">
            <img src={Rating} />
            <img src={Rating} />
            <img src={Rating} />
            <img src={Rating} />
            <img src={Rating} />
            <p>4.5/5</p>
          </div>
          <div className="flex gap-[10px]">
            <h2 className="font-bold text-2xl">${productPrice}</h2>
            {oldPrice && (
              <div className="flex justify-center items-center gap-[10px]">
                <h2 className="font-bold text-2xl opacity-40 line-through">
                  ${oldPrice}
                </h2>
                <div className=" bg-discountbg rounded-full px-[14px] py-[6px]">
                  <h2 className="font-light text-xs text-discount">
                    {discount}%
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
