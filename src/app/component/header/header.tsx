"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Wrapper from "../wrapper/wrapper";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { email, logout } = useAuth();

  return (
    <Wrapper>
      <nav className={styles.nav}>
        <div className={styles.control}>
          <header>
            <Link href="/" className={styles.logo}>Logo Academy</Link>
          </header>
          <ul className={styles.navList}>
            <li className={styles.navItem}><Link href="/about" className={styles.navLink}>About</Link></li>
            <li className={styles.navItem}><Link href="/course" className={styles.navLink}>Course</Link></li>
            <li className={styles.navItem}><Link href="/service" className={styles.navLink}>Service</Link></li>
            <li className={styles.navItem}><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
          <div className={styles.loginControl}>
            {email ? (
              <>
                <Link href={`/profile`} className={styles.emailDisplay}>{email}</Link>
                <button onClick={logout} className={styles.logoutButton}>Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className={styles.loginLink}>Login</Link>
                <Link href="/register" className={styles.loginLink}>Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}
