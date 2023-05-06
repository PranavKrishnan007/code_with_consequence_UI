import React from "react";
import Image from "next/image";
import { GoLocation } from "react-icons/go";

export const orgs = [
  {
    name: "UNICEF",
    details: "the big big components,g big components, Create a platform that allow s  users g big components, Create a platform that allows users Create a  platform that allows users to donate to charities and non-profit  organizations. You can create a platform that features different charities, donation options, and progress tracking.",
    location: "pfund",
    image: "/assets/kids_looking_up.png",
    url: "pfund",
    phone:"8588890427",
    email:"pfund@gmail.com"
  },
  {
    name: "pfund",
    details: "the big big components,g big components, Create a platform that allow s  users g big components, Create a platform that allows users Create a  platform that allows users to donate to charities and non-profit  organizations. You can create a platform that features different charities, donation options, and progress tracking.",
    location: "pfund",
    image: "/assets/kids_looking_up.png",
    url: "pfund",
    phone:"8588890427",
    email:"pfund@gmail.com"
  },
  {
    name: "ABC",
    details: "the big big components,g big components, Create a platform that allow s  users g big components, Create a platform that allows users Create a  platform that allows users to donate to charities and non-profit  organizations. You can create a platform that features different charities, donation options, and progress tracking.",
    location: "pfund",
    image: "/assets/kids_looking_up.png",
    url: "pfund",
    phone:"8588890427",
    email:"pfund@gmail.com"
  },
];

const OrgCard = ({ onOrgSelection }) => {
  const handleClick = (org) => {
    if (onOrgSelection) {
      onOrgSelection(org);
    }
  };

  return (
    <div>
      {orgs.map((id) => (
        <div
          key={id.name}
          className="max-w-4xl bg-background drop-shadow-2xl flex flex-row p-10 space-x-10 my-36"
        >
          <div>
            <Image src={id.image} width={1024} height={1024} className="" />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-4xl font-medium">{id.name}</h3>
            <p className="tracking-wide line-clamp-3 my-10">{id.details}</p>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center ">
                <GoLocation size={22} />
                <p className="px-2">{id.location}</p>
              </div>
              <div
                className="border-2 border-primary py-3 px-5 hover:bg-primary cursor-pointer hover:shadow-lg"
                onClick={() => handleClick(id)}
              >
                Read More
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrgCard;
