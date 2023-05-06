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
      <div >
          <div className="container mx-auto px-8 md:px-16">
              <Navbar />
          </div>
        <div className="container mx-auto px-8 md:px-16 bg" id="listing">
          <div className="flex flex-row max-h-[85vh] shadow-2xl">
            <div className="w-2/3 pr-6 overflow-auto scrollbar-hide">
              <OrgCard onOrgSelection={handleOrgSelection} />
            </div>
            <div className="overflow-hidden w-1/3"
            >
              {selectedOrg && <SideInfoCard org={selectedOrg} />}
            </div>
          </div>
        </div>
      </div>
  );
}