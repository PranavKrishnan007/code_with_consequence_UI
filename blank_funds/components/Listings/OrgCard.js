import React from "react";
import Image from "next/image";
import { GoLocation } from "react-icons/go";

export default function OrgCard() {
  // const {name, details, location, image, url} = props
  return (
    <div className="max-w-4xl bg-background drop-shadow-2xl flex flex-row p-6 space-x-10 my-24">
      <div>
        <Image
          src="/images/charity_imagr.png"
          width={1024}
          height={1024}
          className=""
        />
      </div>
      <div className="flex flex-col space-y-7">
        <h3 className="text-4xl font-medium">PFund</h3>
        <p className="tracking-wide line-clamp-3">
          the big big components,g big components, Create a platform that allows
          users g big components, Create a platform that allows users Create a
          platform that allows users to donate to charities and non-profit
          organizations. You can create a platform that features different
          charities, donation options, and progress tracking.
        </p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <GoLocation size={22} />
            <p className="px-2">Vasanthkunj, New Delhi</p>
          </div>
          <div className="border-2 border-primary py-3 px-5 hover:bg-primary cursor-pointer hover:shadow-lg">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
}
