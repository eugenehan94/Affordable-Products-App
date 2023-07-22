import Image from "next/image";
const LearnMore = () => {
  return (
    <section className="px-5 mt-10 md:flex">
      <div className="md:basis-1/2">
        <Image
          src="/CorporationCultureLearnMoreImage.jpg"
          alt="Culture learn more"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="p-5 md:basis-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-violet-500 font-bold mb-5">
          Want to learn more about the Flipp way of doing things?
        </h2>
        <button className="bg-teal-400 text-violet-950 px-6 py-2 rounded-full font-medium text-lg">
          <a
            href="https://corp.flipp.com/wp-content/uploads/2021/10/Flipp-Culture-Playbook.pdf"
            target="_blank"
          >
            View our Culture Playbook
          </a>
        </button>
      </div>
    </section>
  );
};

export default LearnMore;
