import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const sliderData = [
  {
    comment:
      '"Flipp has made it easy for us to scale the Weekly Ad to digital consumers using their Shopper Consideration Platform. It’s great being able to optimize mix across the Flipp app and off-app channels, so we can count on strong performance and engagement each week."',
    author: "Promotions Team",
    companyName: "Kroger",
    avatarLink: "/KrogerAvatar.png",
    alt: "Kroger avatar",
  },
  {
    comment:
      '"Working with Flipp has been a fabulous experience. They are always there to provide extra support and timely, insightful feedback to ensure our initiatives are performing at optimum levels."',
    author: "Jodi",
    companyName: " Giant Tiger",
    avatarLink: "/GiantTigerAvatar.png",
    alt: " Giant Tiger avatar",
  },
  {
    comment:
      '"The team at Flipp has always been a pleasure to work with, and consistently is able to pivot and adjust as the needs of our business continually change and grow."​',
    author: "Jennifer",
    companyName: " Giant Tiger",
    avatarLink: "/GiantTigerAvatar.png",
    alt: " Giant Tiger avatar",
  },
];

const TestimonialSlider = () => {
  return (
    <Carousel
      infiniteLoop
      showArrows={false}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      className="pt-20 pb-10 px-10 bg-sky-100"
    >
      {sliderData.map((slide) => (
        <div className="hover:cursor-grab">
          <h3 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold text-left leading-8 md:leading-10 lg:leading-relaxed mb-5">
            {slide.comment}
          </h3>
          <div className="mb-20">
            <div className="flex gap-x-5">
              <div className="flex-nowrap">
                <Image
                  src={slide.avatarLink}
                  alt={slide.alt}
                  width={100}
                  height={100}
                  className="w-12 h-12"
                />
              </div>
              <cite className="flex flex-col">
                <span className="font-medium text-left">{slide.author}</span>
                <span className="text-left uppercase text-lg font-bold">
                  {slide.companyName}
                </span>
              </cite>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
export default TestimonialSlider;
