import Image from "next/image";

const VisitOurBlog = () => {
  return (
    <section className="p-5 my-24 lg:flex">
      <div className="lg:basis-1/2">
        <Image
          src="/CorporationPartnersVisitOurBlogImage.jpg"
          alt="Visit our blog"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="p-14 lg:basis-1/2">
        <h2 className="text-sky-800 text-xl md:text-2xl lg:text-4xl font-bold mb-5">
          Find all the latest shopper and merchant insights from Flipp
        </h2>
        <button className="bg-sky-700 text-white md:text-lg font-medium px-8 py-3 rounded-full">
          <a href="https://blog.flipp.com/category/insights/" target="_blank">
            Visit our Blog
          </a>
        </button>
      </div>
    </section>
  );
};

export default VisitOurBlog;
