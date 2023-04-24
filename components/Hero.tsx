const Hero = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row mt-12 justify-center md:gap-10">
        <div className="text-2xl text-center md:text-left max-w-md">
          <span className="text-4xl">Save time and money weekly with digital ads on Flipp.</span>
        </div>
        <div>
          <p className="text-center text-large mt-3.5">
            <span className="font-bold">Type your postal code</span> below to
            see the latest deals near you.
          </p>
          <div className="flex flex-col">
            <input type="text" placeholder="M4J1A1" className="pl-2.5 pt-1.5 pr-1.5 pb-1.5 text-2xl"></input>
            <button className="cursor-pointer bg-blue-500 hover:bg-sky-400 text-white rounded p-1 mt-1">Start Saving</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
