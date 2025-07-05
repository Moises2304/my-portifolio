
import myVidio from "../assets/fondo.mp4";

export const Vidiocomopnet = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover z-0"
      src={myVidio}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};
