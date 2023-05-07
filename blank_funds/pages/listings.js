import { useState } from 'react';
import Navbar from '@/components/Landing/Navbar.js';
import OrgCard, { orgs } from '@/components/Listings/OrgCard.js';
import SideInfoCard from '@/components/Listings/SideInfoCard.js';

export default function listings() {
  const [selectedOrg, setSelectedOrg] = useState(orgs[0]);

  const handleOrgSelection = (org) => {
    setSelectedOrg(org);
  };

  return (
    <div>
      <Navbar />
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{width: "66%", paddingRight: "1.5rem"}}>
          <OrgCard onOrgSelection={handleOrgSelection} selectedOrg={selectedOrg}/>
        </div>
        <div style={{
          position: "fixed",
          right: "0",
          top: "0",
          paddingTop: "6rem",
          height: "100vh",
          width: "33.33333%",
          backgroundColor: "white"
        }}>
          {selectedOrg && <SideInfoCard org={selectedOrg} />}
        </div>
      </div>
    </div>
  );
}