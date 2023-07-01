import Youtube from "react-youtube";
const YoutubeVideo = () => {
  const opts = {
    width: "100%",
  };
  return <Youtube videoId="09302W0TUxw" opts={opts} />;
};

export default YoutubeVideo;
