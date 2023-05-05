import React from "react";
// import hero_video from '/images/hero_video.mp4'

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center max-w-full w-screenk drop-shadow-3xl bg-tertiary mx-auto">
      <div className="absolute h-full z-30 w-full justify-center flex items-center">
        <div className="text-background font-semibold text-center text-8xl">
          We are a full-cycle agency that delivers turnkey projects, and by
          identifying .
        </div>
      </div>      
      <video autoPlay muted loop className="z-10">
        <source src={"/images/hero_video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
}
