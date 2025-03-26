import { Cancel } from "../../utils/assets";

const Cta = () => {
    return (
        <>
         <div className="bg-primary flex justify-between items-center text-center w-full h-[2.125rem] md:h-[2.375rem] py-[9px] md:px-20">
          <p className="text-whiteFont flex-1 text-[.75rem] md:text-[.875rem]">
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