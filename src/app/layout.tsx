import "@/app/globals.css";
import { PropsWithChildren } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./layout.module.css"

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.contentContainer  + " container"}>
          {children}
        </div>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </body>
    </html>
  );
}
