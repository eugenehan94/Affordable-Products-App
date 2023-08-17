import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-sky-700 mt-24 w-full p-5 md:flex gap-x-2">
      <div className="hidden md:flex md:basis-1/2 md:items-center">
        <h2 className="text-white text-4xl font-bold">Contact Us</h2>
      </div>
      <div className="md:basis-1/2">
        <h2 className="md:hidden text-white text-2xl font-bold translate-y-5">
          Contact Us
        </h2>
        <Image
          src="/CorporationContactUsImage.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className="translate-y-12 md:translate-y-0"
        />
      </div>
    </section>
  );
};
export default Hero;
