// @TODO: Shared with "news" page - could be refactored
import Image from "next/image";
const VisitOurBlog = () => {
  return (
    <section className="p-5 my-24 lg:flex">
      <div className="lg:basis-1/2">
        <Image
          src="/CorporationPartnersVisitOurBlogImage.jpg"
          alt="Visit our blog"
          width={80}
          height={80}
          style={{ width: "auto", height: "auto" }}
          unoptimized
        />
      </div>
      <div className="p-14 lg:basis-1/2">
        <h2 className="text-sky-800 text-xl md:text-2xl lg:text-4xl font-bold mb-5">
          Find all the latest shopper and merchant insights from Flipp
        </h2>
        <button className="bg-sky-700 text-white md:text-lg font-medium px-8 py-3 rounded-full">
          Visit our Blog
        </button>
      </div>
    </section>
  );
};

export default VisitOurBlog;
