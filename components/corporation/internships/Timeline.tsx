import { useState, useEffect } from "react";
import Image from "next/image";
const Timeline = () => {
  const [width, setWidth] = useState<number>(0);

  // This useEffect to assign value to "width" - so appropriate image shows
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="p-5">
      <div>
        <div className="mb-5">
          <h2 className="uppercase text-lg md:text-xl lg:text-2xl text-violet-700 font-bold">
            TIMELINES FOR INTERNSHIPS
          </h2>
        </div>
        <div>
          {/* https://github.com/vercel/next.js/discussions/21379#discussioncomment-3729521 */}
          <Image
            src={
              width > 640
                ? "/CorporationInternshipsTimelineDesktopImage.png"
                : "/CorporationInternshipsTimelineMobileImage.png"
            }
            alt="Internship timeline"
            width={1000}
            height={1000}
            className="lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
