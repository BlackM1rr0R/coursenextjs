import Image from "next/image";
import BackgroundPhoto from "../../images/background.png";
import ArrowsLeft from "../../images/arrows1.png";
import ArrowsRight from "../../images/arrows2.png";
import styles from "./hero.module.css";
import Wrapper from "../wrapper/wrapper";
const Hero = () => {
  return (
    <Wrapper>
      <div className={styles.hero}>
        <div className={styles.control}>
          <div className={styles.textContainer}>
            <div className={styles.controlText}>
              <h1>
                🙌 Hello friends I am Sofia and we want to start a web design
                course together. Do you like it too 😍 ?
              </h1>
            </div>
            <div className={styles.arrowImage}>
                <Image src={ArrowsLeft} alt="Arrows Left" />
            </div>
            <div className={styles.buttonControl}>
                <button className={styles.button}>Start course now </button>
            </div>
             <div className={styles.arrowImage1}>
                <Image src={ArrowsRight} alt="Arrows Right" />
            </div>
            <div className={styles.controlTextBooked}>
                    <h2>Booked</h2>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={BackgroundPhoto} alt="Background" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
