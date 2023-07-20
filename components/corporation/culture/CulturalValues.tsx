import Image from "next/image";

const culturalValuesData = [
  {
    imageSrc: "/ThreePeopleOutlineIcon.png",
    imageAlt: "Outline of three people icon",
    title: "Other Centeredness",
    description: "Thinking of others before thinking about yourself.",
  },
  {
    imageSrc: "/OnFireIcon.png",
    imageAlt: "On fire icon",
    title: "Hungry",
    description:
      "Ambitious, resourceful, and never satisfied with the status quo.",
  },
  {
    imageSrc: "/ShinyHeartIcon.png",
    imageAlt: "Shiny heart icon",
    title: "Humble",
    description:
      "Confident in one’s skills, but knowing there’s always room for improvement.",
  },
  {
    imageSrc: "/BrainWithHumanOutlineIcon.png",
    imageAlt: "Brain icon",
    title: "Highly Intelligent",
    description: "Adding value...emotionally and intellectually.",
  },
];

const CulturalValues = () => {
  return (
    <section className="px-5 mt-10 md:flex md:gap-x-5">
      <div className="basis-1/2">
        <h2 className="uppercase text-violet-500 font-bold mb-5 text-lg md:text-xl lg:text-2xl">
          Cultural Values
        </h2>
        <div className="mb-5 md:mb-10">
          <p className="font-medium leading-7 md:text-lg">
            They’re a representation of who we are as individuals and as an
            organization.
          </p>
        </div>
        {culturalValuesData.map((value) => (
          <div className="mb-5 lg:mb-10 md:flex md:gap-x-2">
            <Image
              src={value.imageSrc}
              alt={value.imageAlt}
              width={80}
              height={80}
              className="w-16 h-16 md:w-11 md:h-11 lg:w-16 lg:h-16"
            />
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-violet-500 font-bold">
                {value.title}
              </h3>
              <p className="font-medium leading-7 md:text-lg">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="basis-1/2">
        <Image
          src="/CorporationCultureCulturalValuesImage.jpg"
          alt="Cultural values"
          width={1000}
          height={1000}
          className="w-full lg:h-5/6"
        />
      </div>
    </section>
  );
};

export default CulturalValues;
