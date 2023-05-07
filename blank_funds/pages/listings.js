import { useEffect, useState } from 'react';
import Navbar from '@/components/Landing/Navbar.js';
import OrgCard from '@/components/Listings/OrgCard.js';
import SideInfoCard from '@/components/Listings/SideInfoCard.js';
import fetcher from '../utils/fetcher';
import Loading from "@/components/loading";

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

  return (
    <div>
    <Navbar />
      { loading ? <Loading />: (
        <div className="container mx-auto px-8 md:px-16" id="listing">
          <div className="flex flex-row">
            <div className="w-2/3 pr-6">
              <OrgCard onOrgSelection={handleOrgSelection} orgs={organisations}/>
            </div>
            <div className="fixed right-0 top-0 pt-24 h-screen w-1/3 bg-white">
              {selectedOrg && <SideInfoCard org={selectedOrg}/>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}