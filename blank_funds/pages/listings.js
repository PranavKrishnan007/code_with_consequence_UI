import { useEffect, useState } from 'react';
import Navbar from '@/components/Landing/Navbar.js';

import OrgCard from '@/components/Listings/OrgCard.js';
import SideInfoCard from '@/components/Listings/SideInfoCard.js';
import fetcher from '../utils/fetcher';

export default function listings() {
  const [loading, setLoading] = useState(true);
  const [organisations, setOrganisations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState(null);


  useEffect(() => {
    setLoading(true);
    fetcher('/orgs')
      .then((data) => {
        setOrganisations(data);
        console.log(data[0]);
        setLoading(false);
        setSelectedOrg(data[0]);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleOrgSelection = (org) => {
    setSelectedOrg(org);
  };

  if (loading) return (<div>Loading...</div>);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "66%", paddingRight: "1.5rem" }}>
          <OrgCard onOrgSelection={handleOrgSelection} selectedOrg={selectedOrg} />
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