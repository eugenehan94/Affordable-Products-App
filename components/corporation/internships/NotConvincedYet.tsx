import Image from "next/image";

const notConvincedYetData = [
  {
    imageSrc: "/CorporationInternshipsConvincedFirstImage.jpg",
    imageAlt: "Life as a Co-op Student at Flipp",
    title: "Life as a Co-op Student at Flipp",
    link: "https://medium.com/insideflipp/life-at-flipp-in-the-eyes-of-a-co-op-student-bdd1694783e4",
  },
  {
    imageSrc: "/CorporationInternshipsConvincedSecondImage.jpg",
    imageAlt: "10 Reasons Why You Should Intern at Flipp",
    title: "10 Reasons Why You Should Intern at Flipp",
    link: "https://blog.flipp.com/10-reasons-why-you-should-intern-at-flipp/",
  },
  {
    imageSrc: "/CorporationInternshipsConvincedThirdImage.jpg",
    imageAlt: "A Look Inside the Co-op Experience at Flipp",
    title: "A Look Inside the Co-op Experience at Flipp",
    link: "https://medium.com/insideflipp/a-look-inside-the-co-op-experience-at-flipp-ab77f1d582a1",
  },
];

const NotConvincedYet = () => {
  return (
    <section className="p-5">
      <div>
        <div className="md:w-1/2">
          <h2 className="text-lg md:text-xl lg:text-2xl text-violet-700 font-bold mb-5">
            NOT CONVINCED YET?
          </h2>
          <p className="mb-5 font-medium leading-7 md:text-lg">
            Don’t take our word for it, read on as some co-ops share their
            experiences about what it’s like to work at Flipp.
          </p>
        </div>
        <div className="flex flex-col gap-y-5 md:flex-row">
          {notConvincedYetData.map((data) => (
            <div className="md:basis-1/3 md:p-2 hover:cursor-pointer">
              <a href={data.link} target="_blank">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  width={1000}
                  height={1000}
                  className="mb-3"
                />
              </a>
              <a
                className="text-violet-600 font-medium md:font-bold md:text-xl"
                href={data.link}
                target="_blank"
              >
                {data.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotConvincedYet;
