"use client";

import { useEffect, useState } from "react";
import Wrapper from "../wrapper/wrapper";
import styles from "./index.module.css";
import Link from "next/link";
const Category = () => {
  const data = [
    { id: 1, name: "Work" },
    { id: 2, name: "Ausbildung" },
    { id: 3, name: "Education" },
    { id: 4, name: "Family" },
    { id: 5, name: "Weiterbildung" },
    { id: 6, name: "Blau Card" },
    { id: 7, name: "Chance Card" },
    { id: 8, name: "Praktikant" },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const startAnimation = () => {
      setAnimate(true); // animasiya başlasın
      interval = setTimeout(() => {
        setAnimate(false); // animasiya bitsin
      }, 20000); // animasiya müddəti = 20s
    };

    // İlk 3 saniyə sabit
    const initialTimer = setTimeout(() => {
      startAnimation();
      // Hər animasiya bitəndən sonra 3s gözləyərək təkrar
      const repeatInterval = setInterval(() => {
        startAnimation();
      }, 23000); // 20s animasiya + 3s pause
    }, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(interval);
    };
  }, []);

  return (
    <Wrapper>
      <div className={styles.category}>
        <div
          className={`${styles.categoryControl} ${
            animate ? styles.animate : ""
          }`}
        >
          {data.map((item, index) => (
            <Link
              key={index}
              href={`/category/${item.id}`}
              className={styles.categoryLink} // className Link-də işləyir Next.js 13+
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Category;
