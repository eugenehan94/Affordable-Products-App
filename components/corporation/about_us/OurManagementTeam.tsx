import Image from "next/image";

const managementTeamData = [
  {
    name: "Wehuns Tan",
    position: "Executive Chairman and Managing Director",
    imageLink: "/WehunsTan.png",
  },
  {
    name: "Michael Silverman",
    position: "Chief Executive Officer",
    imageLink: "/MichaelSilverman.png",
  },
  {
    name: "Christine Hernandez",
    position: "Chief Financial Officer",
    imageLink: "/ChristineHernandez.jpg",
  },
  {
    name: "Stella Fong",
    position: "Vice President, People and Culture​",
    imageLink: "/StellaFong.png",
  },
  {
    name: "Mandeep Dhother",
    position: "Vice President, Engineering​",
    imageLink: "/MandeepDhother.png",
  },
  {
    name: "Adam Halim",
    position: "Sr. Vice President, Product and Marketing​",
    imageLink: "/AdamHalim​.png",
  },
  {
    name: "Garrett Royds",
    position: "Sr. Vice President, Product and Marketing​",
    imageLink: "/GarrettRoyds.png",
  },
];

const OurManagementTeam = () => {
  return (
    <section className="p-5 mt-16">
      <h2 className="text-sky-800 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-5 mb-16">
        Our Management Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-2">
        {managementTeamData.map((member) => (
          <div className="flex justify-center md:justify-normal flex-col mb-10">
            <div className="flex justify-center mb-4">
              <Image
                src={member.imageLink}
                alt={member.name}
                className="w-96"
                width={1000}
                height={1000}
              />
            </div>
            <h2 className="text-sky-800 text-center uppercase text-lg leading-5 font-bold mb-5">
              {member.name}
            </h2>
            <h2 className="text-center font-medium">{member.position}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurManagementTeam;
