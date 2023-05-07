import Navbar from '@/components/Landing/Navbar';
import bg from '/public/assets/heart_donation.png';
import styles from '../styles/Donation.module.css'

export default function Donate () {
  return (
    <div style={{width: "100%", height: "100vh", overflowY: "scroll", overflowX: "hidden"}}>
      <Navbar/>
      <div className="containerCSS flexySide paddingDonate heightDonate" style={{width: "100%"}}>
        {/*still need to fix the import of the image as the background*/}
        <div style={{width: "65%", height: "100%", backgroundSize: 'cover', backgroundImage: `url(${bg})`, }} />
        <div className={styles.leftSideDiv}>
          <div className={styles.l_Heading}>
            Lend a Helping Hand
          </div>
          <div className={styles.inputContainer}>
            <input type={"text"} placeholder={"Name"} className={styles.input}/>
            <input type={"text"} placeholder={"Email"} className={styles.input}/>
          </div>
        </div>
      </div>
    </div>
  )
}
