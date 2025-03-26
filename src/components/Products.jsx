import PropTypes from "prop-types";
import { Rating } from "./utils/assets";

const Product = ({
  productName,
  productImage,
  productPrice,
  oldPrice,
  discount,
}) => {
  return (
    <div className="carousel-item cursor-pointer">
      <div className="flex flex-col mx-2">
        <div className="mb-4">
          <img src={productImage} alt={productName} className="h-[200px] lg:h-[298px]" />
        </div>
        <div className="mb-4">
          <p className="font-bold text-[16px] lg:text-xl mb-2">{productName}</p>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={Rating} alt="star rating" />
            ))}
            <p className="text-[12px]">
              4.5/<span className="opacity-40">5</span>
            </p>
          </div>
          <div className="flex gap-[10px]">
            <h2 className="font-bold  text-[20px] lg:text-2xl">${productPrice}</h2>
            {oldPrice && (
              <div className="flex justify-center items-center gap-[10px]">
                <h2 className="font-bold text-[20px] lg:text-2xl opacity-40 line-through">
                  ${oldPrice}
                </h2>
                <div className=" bg-discountbg rounded-full px-[14px] py-[6px]">
                  <h2 className="font-light text-[10px] lg:text-xs text-discount">
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

// ✅ Add PropTypes validation
Product.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  oldPrice: PropTypes.number,
  discount: PropTypes.number,
};

export default Product;
