import Youtube from "react-youtube";
const ALookInside = () => {
  const opts = {
    width: "100%",
  };
  return (
    <section className="px-5 mt-10">
      <div>
        <h2 className="uppercase text-violet-500 font-bold mb-5 text-lg md:text-xl lg:text-2xl">LEARN MORE ABOUT LIFE AT FLIPP</h2>
      </div>
      <div>
        <Youtube videoId="6veXHOn4LvY" opts={opts} />
      </div>
      <div>
        <h2 className="text-violet-500 font-bold my-4 text-2xl">A Look Inside...</h2>
      </div>
      <div>
        <p className="font-medium leading-7 md:text-lg">Check out our culture, team, and some of the things we do!</p>
      </div>
    </section>
  );
};

export default ALookInside;
