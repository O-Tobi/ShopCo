const Cta = () => {
  return (
    <div className="bg-primary flex justify-between items-center h-[34px] md:h-[38px] px-8">
      <p className="text-white-font font-display text-cta-xs md:text-cta-md text-center flex-1">
        Sign up and get 20% off to your first order.{"  "}
        <span className="font-bold underline">Sign Up Now</span>
      </p>
      <p className="text-white-font hidden md:block">+</p>
      
    </div>
  );
};

export default Cta;
