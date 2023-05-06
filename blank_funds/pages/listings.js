import { useState } from 'react';
import Navbar from 'components/Landing/Navbar.js';
import OrgCard, { orgs } from '/components/Listings/OrgCard.js';
import SideInfoCard from '/components/Listings/SideInfoCard.js';

export default function listings() {
  const [selectedOrg, setSelectedOrg] = useState(orgs[0]);

  const handleOrgSelection = (org) => {
    setSelectedOrg(org);
  };

  return (
    <div>
    <Navbar />
    <div className="container mx-auto px-8 md:px-16" id="listing">
      
      <div className="flex flex-row">
        <div className="w-2/3 pr-6">
          <OrgCard onOrgSelection={handleOrgSelection} />
        </div>
        <div
          className="fixed right-0 top-0 pt-24 h-screen w-1/3 bg-white"
        >
          {selectedOrg && <SideInfoCard org={selectedOrg} />}
        </div>
      </div>
    </div>
    </div>
  );
}
