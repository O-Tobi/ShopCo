import { Cancel } from "../assets";

const Cta = () => {
    return (
        <>
         <div className="bg-primary flex justify-between items-center text-center w-full h-[38px] px-20">
          <p className="text-whiteFont flex-1 text-[14px]">
            Sign up and get 20% off to your first order.{" "}
            <span className="underline">Sign Up Now</span>
          </p>
          <div>
            <img src={Cancel} />
          </div>
        </div>
        
        </>
    )
};

export default Cta;