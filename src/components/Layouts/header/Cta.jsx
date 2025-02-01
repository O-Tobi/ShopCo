import { Cancel } from "../../utils/assets";

const Cta = () => {
    return (
        <>
         <div className="bg-primary flex justify-between items-center text-center w-full h-[34px] md:h-[38px] py-[.5625rem] md:px-20">
          <p className="text-whiteFont flex-1 text-[12px] md:text-[14px]">
            Sign up and get 20% off to your first order.{" "}
            <span className="underline">Sign Up Now</span>
          </p>
          <div className="hidden md:block">
            <img src={Cancel} />
          </div>
        </div>
        
        </>
    )
};

export default Cta;