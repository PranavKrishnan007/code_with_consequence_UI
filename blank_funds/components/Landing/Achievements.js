import React from "react";
// import hero_video from '/images/hero_video.mp4'

const STATS = [
  {
    title: "Inspirational Text",
    text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
  },
  {
    title: "Inspirational Text",
    text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
  },
  {
    title: "Inspirational Text",
    text: "This is some text that I am having to put in because for some reason lorem ipsum is refusing to work can you believe it ? This is ridiculous!"
  }
]

export default function HeroBottom() {
  return (
    <div className="py-10">
        <div className="w-full">
            <div className="border-2 border-poop" />
        </div>
        <h1 className="text-5xl px-20 font-semibold py-10">Achievements</h1>
        <div className="grid grid-cols-1 gap-10 px-20 md:grid-cols-3">
            {STATS.map((stat) => (
            <div className="flex justify-center flex-col p-8 bg-background drop-shadow-3xl">
                <div className="text-2xl font-semibold">
                    {stat.title}
                </div>
                <div className="text-xl text-primary p-4">
                    {stat.text}
                </div>
            </div>
            ))}
        </div>
        <div className="w-full py-10">
            <div className="border-2 border-poop" />
        </div>
    </div>
  );
}
