import Image from "next/image";

const tilesData = [
  {
    imageSrc: "/PinkBusinessIcon.png",
    imageAlt: "Business Icon",
    title: "Business Development",
    description:
      "Our business development team helps retailers thrive in the digital age by acting as trusted advisors to each and every one of our partners.",
  },
  {
    imageSrc: "/PinkDocumentIcon.png",
    imageAlt: "Pink document icon",
    title: "Content",
    description:
      "Our content team processes and digitizes all of the publications that are seen across the Flipp platforms and hosted experiences.",
  },
  {
    imageSrc: "/PinkCodingIcon.png",
    imageAlt: "Pink coding icon",
    title: "Engineering & Product",
    description:
      "Our engineering and product teams build the tools, systems and products for our users and retailers.",
  },
  {
    imageSrc: "/PinkMegaphoneIcon.png",
    imageAlt: "Pink megaphone icon",
    title: "Marketing",
    description:
      "Our marketing team focuses on understanding our users to acquire and retain shoppers on the app, while building brand awareness.",
  },
  {
    imageSrc: "/PinkGearIcon.png",
    imageAlt: "Pink gear icon",
    title: "Strategic Support",
    description: "Our strategic support teams keep Flipp running smoothly.",
  },
  {
    imageSrc: "/PinkThreePeopleOutlineIcon.png",
    imageAlt: "Pink three people outline icon",
    title: "People & Culture",
    description:
      "Our people and culture teams look after our most important assets: our Flipp employees.",
  },
];

const Tiles = () => {
  return (
    <section className="mt-5">
      <div className="p-5 md:flex md:flex-wrap">
        {tilesData.map((tile) => (
          <div className="md:basis-1/3 px-5 pb-5">
            <div className="bg-teal-100/40 p-6 h-full">
              <Image
                src={tile.imageSrc}
                alt={tile.imageAlt}
                width={200}
                height={200}
                className="w-16 h-16 md:w-11 md:h-11 lg:w-16 lg:h-16"
              />
              <div className="mt-2">
                <h3 className=" text-violet-500 font-bold mb-5 text-xl md:text-2xl lg:text-3xl">
                  {tile.title}
                </h3>
                <p className="font-medium leading-7 md:text-lg">
                  {tile.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tiles;
