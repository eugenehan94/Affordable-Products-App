const Hero = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row mt-12 justify-center">
        <div className="text-2xl text-center">
          <span>Save time and money weekly with digital ads on Flipp.</span>
        </div>
        <div>
          <p className="text-center text-large mt-3.5">
            <span className="font-bold">Type your postal code</span> below to
            see the latest deals near you.
          </p>
          <div>
            <input type="text"></input>
            <button>Start Saving</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
