import Image from "next/image";
const Loader = () => {
  return (
    <div className="relative flex justify-center items-center my-44 mx-auto w-44 h-32">
      <span className="absolute top-2 left-20 z-30 animate-bounce delay-75">
        <Image src="/Apple.svg" alt="Apple" width={90} height={90} />
      </span>
      <span className="absolute top-2 left-16 z-30 animate-bounce delay-100">
        <Image src="/Cheese.svg" alt="Cheese" width={70} height={70} />
      </span>
      <span className="absolute top-6 left-3 z-40 animate-bounce delay-300">
        <Image src="/Bread.svg" alt="Bread" width={70} height={70} />
      </span>
      <span className="absolute top-4 left-1 z-50">
        <Image src="/Basket.svg" alt="Basket" width={170} height={170} />
      </span>
    </div>
  );
};

export default Loader;
