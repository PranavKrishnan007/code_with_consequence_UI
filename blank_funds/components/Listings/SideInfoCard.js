import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function SideInfoCard() {
  return (
    <div className="flex flex-col p-8 bg-primary text-background max-w-lg space-y-7">
      <h3 className="text-3xl">PFund</h3>
      <div className="max-h-[250px] overflow-clip line-clamp-6">
        <p>
          the big big components,g big components, Create a platform that allows
          users g big components, Create a platform that allows users Create a
          platform that allows users to donate to charities and non-profit
          organizations. You can create a platform that features different
          charities, donation options, and progress tracking. the big big
          components,g big components, Create a platform that allows users g big
          components, Create a platform that allows users Create a platform that
          allows users to donate to charities and non-profit organizations. You
          can create a platform that features different charities, donation
          options, and progress tracking.
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row items-center">
          <BsTelephone />
          <p className="px-3">+91 8588890427</p>
        </div>
        <div className="flex flex-row items-center">
          <FiMail />
          <p className="px-3">pfund@gmail.com</p>
        </div>
      </div>
      <div>
        <div class="w-full bg-primary border-background border-2 rounded-full">
          <div
            class="bg-tertiary text-xs font-medium text-black text-center p-0.5 leading-none rounded-full"
            style={{width: '45%'}}
          >
            {" "}
            45%
          </div>
        </div>
      </div>
      <div>
        <div className="border-4 border-primary font-medium w-fit py-3 px-5 bg-background text-primary cursor-pointer hover:shadow-lg">
          Donate
        </div>
      </div>
    </div>
  );
}
