import React from 'react'
import styles from "./Components.module.css"
import Image from 'next/image'
import profileimage from "../../public/images/profile(1).jpg"
function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.header_image}
        src={profileimage}
      
      />
      <div className={styles.heading_text}>
        <h1>
          SomeOne I used to know
        </h1>
        <h3>
          Ui / Ux Designer
        </h3>
        <p>
          this is my profile hope you will like it
        </p>
      </div>
    </header>
  )
}

export default Header
