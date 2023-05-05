import React from "react";
// import hero_video from '/images/hero_video.mp4'

const STATS = [
  {
    title: "21K+",
    text: "Active Donors"
  },
  {
    title: "4K+",
    text: "Projects"
  },
  {
    title: "100K+",
    text: "Helpers"
  }
]

export default function HeroBottom() {
  return (
    <div className="pt-20 pb-10">
      <div className="w-full px-20">
        <div className="border-2 border-primary" />
      </div>
      <div className="px-28">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STATS.map((stat) => (
            <div className="flex justify-center flex-col items-center p-10">
              <div className="text-4xl font-semibold">
                {stat.title}
              </div>
              <div className="text-xl text-primary">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <img src='/assets/wavy_line.svg' alt='wavy_image' width={200} />
        </div>
        <figure class="max-w-screen-md mx-auto text-center pt-12">
            <svg aria-hidden="true" class="w-12 h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
            <blockquote>
                <p class="text-2xl italic font-medium text-poop">
                  "Things in life is not what you think they are so before you die donate a little money please you know. Just so that someone else can 
                  live a better life. Come on."
                </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                <div class="flex items-center divide-x-2 divide-gray-500">
                    <cite class="pr-3 font-medium text-gray-900">Pranav Krishnan</cite>
                    <cite class="pl-3 text-sm text-gray-500">Employee at Traboda</cite>
                </div>
            </figcaption>
        </figure>
      </div>
    </div>
  );
}
