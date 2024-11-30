
"use client";
import { useState } from "react";
import styles from "./footer.module.css"

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className={styles.footerContainer}>
      <div>
        @ 2024 Robin blog test. All rights reserved
      </div>    
    </div>    
    </>
  );
};

export default Footer;
