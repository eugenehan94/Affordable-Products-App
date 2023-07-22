import Image from "next/image";

const perksAndBenefitsData = [
  {
    imageSrc: "/TealHeartPlusIcon.png",
    imageAlt: "Teal heart plus icon",
    title: "Extended Health Benefits",
  },
  {
    imageSrc: "/TealDumbbellIcon.png",
    imageAlt: "Teal dumbbell icon",
    title: "Fitness/Wellness Account",
  },
  {
    imageSrc: "/TealPacifierIcon.png",
    imageAlt: "Teal pacifier icon",
    title: "Parental Leave",
  },
  {
    imageSrc: "/TealPiggyBankIcon.png",
    imageAlt: "Teal piggy bank icon",
    title: "RRSP Matching Program",
  },
  {
    imageSrc: "/TealMoneyBillsIcon.png",
    imageAlt: "Teal money bills icon",
    title: "Equity Options",
  },
  {
    imageSrc: "/TealBookIcon.png",
    imageAlt: "Teal book icon",
    title: "Learning & Growth",
  },
  {
    imageSrc: "/TealAlarmClockIcon.png",
    imageAlt: "Teal alarm clock icon",
    title: "Flipp Flex Program",
  },
  {
    imageSrc: "/TealHouseIcon.png",
    imageAlt: "Teal house icon",
    title: "WFH Expense Account",
  },
  {
    imageSrc: "/TealSuitcaseIcon.png",
    imageAlt: "Teal suitcase icon",
    title: "Flexible Vacation Policy",
  },
  {
    imageSrc: "/TealGlobeIcon.png",
    imageAlt: "Teal globe icon",
    title: "Work from Anywhere Program",
  },
  {
    imageSrc: "/TealHandAndHeartIcon.png",
    imageAlt: "Teal hand and heart icon",
    title: "Volunteer Program",
  },
  {
    imageSrc: "/TealSmartphoneIcon.png",
    imageAlt: "Teal smartphone icon",
    title: "Company Phone & Laptop",
  },
  {
    imageSrc: "/TealScheduleIcon.png",
    imageAlt: "Teal schedule icon",
    title: "Extended Long Weekend",
  },
  {
    imageSrc: "/TealTwoLeafIcon.png",
    imageAlt: "Teal two leaf icon",
    title: "Flipp Funded Life Coach",
  },
  {
    imageSrc: "/TealBasketballIcon.png",
    imageAlt: "Teal basketball icon",
    title: "Team Events",
  },
];
const PerksAndBenefits = () => {
  return (
    <section className="p-5 mt-16">
      <div className="mb-10">
        <h2 className="uppercase text-lg md:text-xl lg:text-2xl text-violet-500 font-bold mb-5">
          PERKS & BENEFITS
        </h2>
        <p className="font-medium leading-7 md:text-lg">
          There are so many great reasons to join Flipp. Here are a few!
        </p>
      </div>
      <div className="px-3 md:flex md:flex-wrap">
        {perksAndBenefitsData.map((data) => (
          <div className="mb-10 md:basis-1/5 md:p-5">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={80}
              height={80}
              className="w-14 h-14"
            />
            <p className="text-lg font-bold">{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerksAndBenefits;
