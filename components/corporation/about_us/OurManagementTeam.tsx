import Image from "next/image";

const OurManagementTeam = () => {
  return (
    <section className="p-5 mt-16">
      <h2 className="text-sky-800 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-5 mb-16">
        Our Management Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-2">
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/WehunsTan.png"
              alt="Wehuns Tan"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Wehuns Tan
          </h2>
          <h2 className="text-center font-medium">
            Executive Chairman and Managing Director
          </h2>
        </div>
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/MichaelSilverman.png"
              alt="Michael Silverman"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Michael Silverman
          </h2>
          <h2 className="text-center font-medium">Chief Executive Officer​</h2>
        </div>
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/ChristineHernandez.jpg"
              alt="Christine Hernandez"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Christine Hernandez
          </h2>
          <h2 className="text-center font-medium">Chief Financial Officer​</h2>
        </div>
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/StellaFong.png"
              alt="Stella Fong"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Stella Fong
          </h2>
          <h2 className="text-center font-medium">
            Vice President, People and Culture​
          </h2>
        </div>
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/MandeepDhother.png"
              alt="Mandeep Dhother"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Mandeep Dhother
          </h2>
          <h2 className="text-center font-medium">
            Vice President, Engineering
          </h2>
        </div>
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/AdamHalim​.png"
              alt="Adam Halim"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Adam Halim
          </h2>
          <h2 className="text-center font-medium">
            Sr. Vice President, Product and Marketing
          </h2>
        </div>
        <div className="flex justify-center md:justify-normal flex-col mb-10">
          <div className="flex justify-center">
            <Image
              src="/GarrettRoyds.png"
              alt="Garrett Royds"
              width={80}
              height={80}
              unoptimized
              style={{ width: "auto", height: "auto" }}
              className="mb-5"
            />
          </div>
          <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
            Garrett Royds
          </h2>
          <h2 className="text-center font-medium">
            Sr. Vice President, Product and Marketing
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurManagementTeam;
