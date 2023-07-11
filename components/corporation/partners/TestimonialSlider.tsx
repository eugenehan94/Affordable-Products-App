import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
      <div className="hover:cursor-grab">
        <h3 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold text-left leading-8 md:leading-10 lg:leading-relaxed mb-5">
          "Flipp has made it easy for us to scale the Weekly Ad to digital
          consumers using their Shopper Consideration Platform. It’s great being
          able to optimize mix across the Flipp app and off-app channels, so we
          can count on strong performance and engagement each week."
        </h3>
        <div className="mb-20">
          <div className="flex gap-x-5">
            <Image
              src="/KrogerAvatar.png"
              alt="Kroger avatar"
              width={80}
              height={80}
              style={{ width: "50px", height: "50px" }}
              unoptimized
            />
            <cite className="flex flex-col">
              <span className="font-medium">Promotions Team</span>
              <span className="text-left uppercase text-lg font-bold">
                Kroger
              </span>
            </cite>
          </div>
        </div>
      </div>
      <div className="hover:cursor-grab">
        <h3 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold text-left leading-8 md:leading-10 lg:leading-relaxed mb-5">
          "Working with Flipp has been a fabulous experience. They are always
          there to provide extra support and timely, insightful feedback to
          ensure our initiatives are performing at optimum levels."
        </h3>
        <div className="mb-20">
          <div className="flex gap-x-5">
            <Image
              src="/GiantTigerAvatar.png"
              alt="Giant Tiger"
              width={80}
              height={80}
              style={{ width: "50px", height: "50px" }}
              unoptimized
            />
            <cite className="flex flex-col">
              <span className="text-left font-medium">Jodi</span>
              <span className="text-left uppercase text-lg font-bold">
                Giant Tiger
              </span>
            </cite>
          </div>
        </div>
      </div>
      <div className="hover:cursor-grab">
        <h3 className="text-sky-800 text-xl md:text-2xl lg:text-3xl font-extrabold text-left leading-8 md:leading-10 lg:leading-relaxed mb-5">
          "The team at Flipp has always been a pleasure to work with, and
          consistently is able to pivot and adjust as the needs of our business
          continually change and grow."​
        </h3>
        <div className="mb-20">
          <div className="flex gap-x-5">
            <Image
              src="/GiantTigerAvatar.png"
              alt="Giant Tiger"
              width={80}
              height={80}
              style={{ width: "50px", height: "50px" }}
              unoptimized
            />
            <cite className="flex flex-col">
              <span className="text-left font-medium">Jennifer</span>
              <span className="text-left uppercase text-lg font-bold">
                Giant Tiger
              </span>
            </cite>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default TestimonialSlider;
