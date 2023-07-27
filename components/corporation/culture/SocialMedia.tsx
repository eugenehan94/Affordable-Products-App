import Image from "next/image";

const socialMediaData = [
  {
    imageSrc: "/FlippAvatar.png",
    imageAlt: "Flipp avatar",
    name: "Flipp Blog",
    link: "https://blog.flipp.com/",
  },
  {
    imageSrc: "/LinkedinAvatar.png",
    imageAlt: "Linkedin avatar",
    name: "Linkedin",
    link: "https://www.linkedin.com/company/flipp/mycompany/",
  },
  {
    imageSrc: "/InstagramAvatar.png",
    imageAlt: "Instagram avatar",
    name: "Instagram",
    link: "https://www.instagram.com/getflipp/?hl=en",
  },
  {
    imageSrc: "/GlassdoorAvatar.png",
    imageAlt: "Glassdoor avatar",
    name: "Glassdoor",
    link: "https://www.glassdoor.ca/Overview/Working-at-Flipp-EI_IE970799.11,16.htm",
  },
  {
    imageSrc: "/FacebookAvatar.png",
    imageAlt: "Facebook avatar",
    name: "Facebook",
    link: "https://www.facebook.com/getflipp",
  },
];

const SocialMedia = () => {
  return (
    <section className="px-5 mt-20 md:flex">
      <div className="md:basis-1/2">
        <Image
          src="/CorporationCultureSocialMediaImage.png"
          alt="Social media image"
          width={1000}
          height={1000}
          className="w-full md:h-5/6 "
        />
      </div>
      <div className="p-6 md:basis-1/2">
        <h2 className="text-violet-500 font-bold my-5 text-2xl md:text-3xl lg:text-5xl">
          Don't forget to follow our social channels to learn more about Flipp
          and our great culture.
        </h2>
        <div className="flex flex-wrap gap-y-5">
          {socialMediaData.map((socialMedia) => (
            <div className="basis-1/2 md:flex md:items-center gap-x-2">
              <a href={socialMedia.link} target="_blank">
                <Image
                  src={socialMedia.imageSrc}
                  alt={socialMedia.imageAlt}
                  width={80}
                  height={80}
                  className="w-11 md:w-9 md:h-9"
                />
              </a>
              <p className="font-medium lg:text-xl">{socialMedia.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
