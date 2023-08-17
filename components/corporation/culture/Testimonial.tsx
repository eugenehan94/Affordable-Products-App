import Image from "next/image";
const Testimonial = () => {
  return (
    <section className="px-5 md:relative md:w-full">
      <div className="md:absolute md:z-20">
        <Image
          src="/NoorMarzook.jpg"
          alt="Noor Marzook"
          width={80}
          height={80}
          unoptimized
          className="w-full md:w-60 "
          //   style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="bg-teal-400 p-10 md:absolute md:left-20 md:pl-64">
          <h2 className="text-violet-950 text-2xl font-bold mb-10">
            "Flipp's culture is incredibly special and I knew during the
            interview process that I wanted to be part of this great team. I've
            never worked with such passionate, dedicated and motivated
            individuals who build each other up and help each other be great
            each and every day."
          </h2>
          <p className="text-violet-950 font-medium">
            Noor Marzook, Senior Manager, Marketing Communications
          </p>
      </div>
    </section>
  );
};

export default Testimonial;
