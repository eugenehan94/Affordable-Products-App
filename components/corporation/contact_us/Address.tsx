import GoogleMapReact from "google-map-react";

const Address = () => {
  const defaultProps = {
    center: {
      lat: 43.645887037683956,
      lng: -79.52116973249377,
    },
    zoom: 15,
  };
  return (
    <section className="p-5">
      <div className="md:flex">
        <div
          className="md:basis-1/2 h-screen w-full"
          style={{ height: "100vh", width: "100%" }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
        <div className="p-10 md:basis-1/2">
          <h2 className="text-blue-900 text-xl md:text-2xl font-bold mb-5">
            Address
          </h2>
          <p className="font-medium text-lg">
            350 – 3250 Bloor St W, East Tower, Etobicoke, ON, M8X 2X9, CA
          </p>
        </div>
      </div>
    </section>
  );
};

export default Address;
