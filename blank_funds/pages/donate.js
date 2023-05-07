import { useState } from 'react';
import Navbar from '@/components/Landing/Navbar';
import bg from '/public/assets/heart_donation.png';
import styles from '../styles/Donation.module.css'
import { AiOutlineHeart } from "react-icons/ai"
import { BiDownArrow } from "react-icons/bi"

export default function Donate() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [buttonText, setButtonText] = useState('Select Donation Mode');
  const [selectedMode, setSelectedMode] = useState('Mode of Donation');
  const [isModeSelected, setIsModeSelected] = useState(false);



  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  const handleDonationModeClick = (mode) => {
    if (mode === "Cash") {
      setButtonText("Pay by UPI/Netbanking");
      setSelectedMode("Cash");
    } else {
      setButtonText("Send a mail");
      setSelectedMode("Clothes");
    }
    setDropdownOpen(false);


  }

  return (
    <div style={{ width: "100%", height: "100vh", overflowY: "scroll", overflowX: "hidden" }}>
      <Navbar />
      <div className="containerCSS flexySide paddingDonate heightDonate" style={{ width: "100%" }}>
        <div style={{ width: "65%", height: "100%", backgroundSize: 'cover', backgroundImage: `url(${'/images/pay.png'})`, }} />
        <div className={styles.leftSideDiv}>
          <div className={styles.l_Heading}>
            Heartfelt Contributions
          </div>
          <div className={styles.inputContainer}>
            <input type={"text"} placeholder={"Name"} className={styles.input} />
            <input type={"text"} placeholder={"Email"} className={styles.input} />
            <div className={styles.icon}>
              <div className={styles.iconline1} />
              <AiOutlineHeart className={styles.icondesign} />
              <div className={styles.iconline2} />
            </div>
            <div className={styles.dropdown} onClick={toggleDropdown} >
              {selectedMode}
              <BiDownArrow className={styles.dropdownicon} />
            </div>
            {dropdownOpen && (
              <div className={styles.dropdownclick}>
                <ul>
                  <li className={styles.lidropdown} onClick={() => handleDonationModeClick("Cash")}>Cash</li>
                  <li className={styles.lidropdown} onClick={() => handleDonationModeClick("Clothes")}>Clothes</li>
                </ul>
              </div>
            )}
            <div>
              <textarea className={styles.textarea} placeholder='Message' />
            </div>
            <button className={styles.submitButton}  >{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
