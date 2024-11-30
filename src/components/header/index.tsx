
"use client";
import { useState } from "react";
import styles from "./header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className={styles.headerContainer} >
      <div className={styles.headerTitle} >
        <Link href="/">
          NextJs Guide
        </Link>
      </div>    
    </div>    
    </>
  );
};

export default Header;
