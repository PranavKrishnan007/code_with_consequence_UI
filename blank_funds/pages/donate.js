import Navbar from '@/components/Landing/Navbar';
import bg from '/public/assets/heart_donation.png';

export default function Donate () {
  return (
    <div style={{width: "100%", height: "100vh", overflowY: "scroll", overflowX: "hidden"}}>
      <Navbar/>
      <div className="containerCSS flexySide paddingDonate heightDonate" style={{width: "100%"}}>
        {/*still need to fix the import of the image as the background*/}
        <div style={{width: "65%", height: "100%", backgroundSize: 'cover', backgroundImage: `url(${bg})`, }} />
        <div style={{width: "35%", background: "#DBA39A"}}>
          dsgsdgasdfgaf
        </div>
      </div>
    </div>
  )
}
