"use client"


import Link from 'next/link'
import React from 'react'
import Styles from "./Components.module.css"
import Image from 'next/image'
import imgpath from "../../public/images/profile(1).jpg"
import { useEffect } from 'react'
function NavBar() {
    let navBgActive = false;
    useEffect(()=>{
        addEventListener("scroll",()=>{
             navBgActive = window.scrollY > 100 ? true : false;
             console.log(navBgActive)
        })
        return removeEventListener("scroll",()=>{
             navBgActive = window.scrollY > 100 ? true : false;
        })
    },[])
  return (
    <nav className={navBgActive === true ? Styles.nav_bar.active_bg : Styles.nav_bar}>
        <div className={Styles.logo_container}>
            <Image
                src={imgpath}
                alt="A"
            />
        </div>
        <ul>
            <li>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link href=" ">
                    About
                </Link>
            </li>
            <li>
                <Link href=" ">
                    Blogs
                </Link>
            </li>
            <li>
                <Link href="">
                    Achivement
                </Link>
            </li>
        </ul>
      
    </nav>
  )
}

export default NavBar
