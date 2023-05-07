import React from "react";
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import styles from "styles/OrgCard.module.css";

export const orgs = [
  {
    name: "UNICEF",
    details:
      "the big big components,g big components, Create a platform that allow s  users g big components, Create a platform that allows users Create a  platform that allows users to donate to charities and non-profit  organizations. You can create a platform that features different charities, donation options, and progress tracking.",
    location: "pfund",
    image: "/assets/kids_looking_up.png",
    url: "pfund",
    phone: "8588890427",
    email: "pfund@gmail.com",
  },
  {
    name: "pfund",
    details:
      "the big big components,g big components, Create a platform that allow s  users g big components, Create a platform that allows users Create a  platform that allows users to donate to charities and non-profit  organizations. You can create a platform that features different charities, donation options, and progress tracking.",
    location: "pfund",
    image: "/assets/kids_looking_up.png",
    url: "pfund",
    phone: "8588890427",
    email: "pfund@gmail.com",
  },
  {
    name: "ABC",
    details:
      "the big big components,g big components, Create a platform that allow s  users g big components, Create a platform that allows users Create a  platform that allows users to donate to charities and non-profit  organizations. You can create a platform that features different charities, donation options, and progress tracking.",
    location: "pfund",
    image: "/assets/kids_looking_up.png",
    url: "pfund",
    phone: "8588890427",
    email: "pfund@gmail.com",
  },
];

const OrgCard = ({ onOrgSelection }) => {
  const handleClick = (org) => {
    if (onOrgSelection) {
      onOrgSelection(org);
    }
  };

  return (
    <div >
      {orgs.map((id) => (
        <div
          key={id.name}
          className={styles.orgCard}
        >
          <div>
            <Image src={id.image} width={1024} height={1024} className="" />
          </div>
          <div className={styles.orgInfo}>
            <h3 className={styles.orgname}>{id.name}</h3>
            <p className={styles.orgdetails}>{id.details}</p>
            <div className={styles.orgdocationAndReadMore}>
              <div className={styles.orglocation}>
                <GoLocation size={22}  />
                <p className={styles.orgdocationText}>{id.location}</p>
              </div>
              <div
                className={styles.orgreadmore}
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
