import Link from "next/link";
const BottomBanner = () => {
  return (
    <section className="w-full bg-sky-700 flex flex-col items-center justify-center p-2.5 my-24">
      <h2 className="text-white text-2xl lg:text-4xl text-center leading-tight font-extrabold my-5">
        Learn how to transform your merchandising promotion strategy with Flipp
        today.
      </h2>
      <button className="bg-white text-sky-900 text-base lg:text-lg px-8 py-3 rounded-full font-medium mb-5">
        <Link href="/corporation/contact_us">Request a Demo</Link>
      </button>
    </section>
  );
};

export default BottomBanner;
