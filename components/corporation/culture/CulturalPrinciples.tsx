import Image from "next/image";

const culturalPrinciplesData = [
  {
    imageSrc: "/FlowerWithDropletIcon.png",
    imageAlt: "Flower with water droplet icon",
    title: "Help Each Other be Great",
    description:
      "Dedicating energy and focus on leveling up fellow teammates, regardless of their seniority, function, or role. Ensuring that all teammates share and receive honest feedback with the intent of growing each other.",
  },
  {
    imageSrc: "/PartyIcon.png",
    imageAlt: "Party icon",
    title: "Work Hard, Celebrate Harder",
    description:
      "Recognizing and rewarding team members based on demonstrated results and positive impact to Flipp’s success and culture, in all forms.",
  },
  {
    imageSrc: "/TwoPeopleTalkingIcon.png",
    imageAlt: "Two people talking",
    title: "Have Each Other’s Back",
    description:
      "Creating high trust relationships between team members to drive high performance, ensuring Flipp, and individual Flippers, achieve their objectives and are supported when doing so.",
  },
  {
    imageSrc: "/LightBulbIcon.png",
    imageAlt: "Lightbulb",
    title: "Act With an Entrepreneurial Spirit",
    description:
      "Acting with a relentless drive and hustle to ensure objectives are achieved, regardless of barriers. Having the autonomy and freedom to operate independently with the responsibility and ownership of delivering results.",
  },
  {
    imageSrc: "/WeightsWithUpArrowIcon.png",
    imageAlt: "Weights",
    title: "Raise the Bar",
    description:
      "Relentlessly driving towards the best outcome in all situations, allowing healthy conflict to occur in discussions to deliver win-win scenarios wherever possible. Thinking big and taking calculated risks to ensure when we win, we win big.",
  },
];

const CulturalPrinciples = () => {
  return (
    <section className="bg-teal-100/30">
      <div className="px-5 mt-10 md:mt-0">
        <div className="mb-10">
          <h2 className="uppercase text-violet-500 font-bold mb-5 text-lg md:text-xl lg:text-2xl">
            Cultural Principles
          </h2>
          <p className="font-medium leading-7 md:text-lg">
            Our cultural principles outline the behaviors we exhibit. While
            working together as one Flipp team, we achieve our objectives and
            ensure all team members are fulfilled while doing so.
          </p>
        </div>
        <div className="md:flex md:flex-wrap">
          {culturalPrinciplesData.map((principle) => (
            <div className="md:basis-1/2 mb-5 lg:mb-10 md:flex md:gap-x-2 md:px-1">
              <Image
                src={principle.imageSrc}
                alt={principle.imageAlt}
                width={80}
                height={80}
                className="w-16 h-16 md:w-11 md:h-11 lg:w-16 lg:h-16"
              />
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-violet-500 font-bold">
                  {principle.title}
                </h3>
                <p className="font-medium leading-7 md:text-lg">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalPrinciples;
