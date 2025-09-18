import Wrapper from "../wrapper/wrapper";
import styles from "./topvisum.module.css";
import ArrowsVisum from "../../images/arrowsvisum.png";
import BackgroundVisum from "../../images/visumbackground.png";
import VisumOne from "../../images/visaphoto.png";
import Image, { StaticImageData } from "next/image";

const TopVisum = () => {
  const data = [
    { id: 1, name: "John Doe", img: VisumOne, visum: "German" },
    { id: 2, name: "John Doe", img: VisumOne, visum: "German" },
    { id: 3, name: "John Doe", img: VisumOne, visum: "German" },
    { id: 4, name: "John Doe", img: VisumOne, visum: "German" },
    { id: 5, name: "John Doe", img: VisumOne, visum: "German" },
    { id: 6, name: "John Doe", img: VisumOne, visum: "German" },
  ];

  type AboutVisum = {
    id: number;
    name: string;
    img: StaticImageData;
    visum: string;
  };

  return (
    <Wrapper>
      <div className={styles.control}>
        {/* Text hissə */}
        <div className={styles.textContainer}>
          <div className={styles.topText}>
            <div className={styles.best}>
              <h2 className={styles.bestText}>Best</h2>
              <h2 className={styles.instructorText}>Instructors</h2>
            </div>
            <div className={styles.middleText}>
              <p>
                At The Academy, We Strive To Bring Together The Best Professors
                For The Best Courses
              </p>
            </div>
          </div>
          <div className={styles.bottomText}>
            <button>All Instructors </button>
            <div className={styles.imageControl}>
              <Image src={ArrowsVisum} alt="Arrows Visum" />
            </div>
            <div className={styles.instructor54}>
              <h2>54 Instructor</h2>
            </div>
          </div>
        </div>

        {/* Şəkillər hissəsi */}
        <div className={styles.visumContainer}>
          <div className={styles.imageVisum}>
            <Image src={BackgroundVisum} alt="Background Visum" />
          </div>
          <div className={styles.controlMap}>
            {data.map((item: AboutVisum) => (
              <div className={styles.maps} key={item.id}>
                <Image src={item.img} alt="Visum" />
                <div className={styles.mapsText}>
                  <h2>{item.name}</h2>
                  <h2>{item.visum}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopVisum;
