import Wrapper from "../wrapper/wrapper";
import styles from "./learning.module.css";
import Figma from "../../images/figma.png";
import Image, { StaticImageData } from "next/image";
import LessonIcon from "../../images/lessonicon.png";
import StudentIcon from "../../images/studenticon.png";
import LevelIcon from "../../images/levelicon.png";
type CourseProps = {
  id: number;
  title: string;
  lessonCounter: number;
  img: StaticImageData;
  student: number;
  level: string;
  month:number
};

const Learning = () => {
  const data: CourseProps[] = [
    {
      id: 1,
      title: "Learn German Speaking and Writing",
      lessonCounter: 5,
      img: Figma,
      student: 100,
      level: "A1",
      month:2
    },
    {
      id: 2,
      title: "Learn German Speaking and Writing",
      lessonCounter: 8,
      img: Figma,
      student: 150,
      level: "A2",
      month:2
    },
    {
      id: 3,
      title: "Learn German Speaking and Writing",
      lessonCounter: 3,
      img: Figma,
      student: 200,
      level: "B1",
      month:2
    },
    {
      id: 4,
      title: "Conversations with German",
      lessonCounter: 3,
      img: Figma,
      student: 200,
      level: "B2",
      month:2
    },
    {
      id: 5,
      title: "With German for Beginners",
      lessonCounter: 3,
      img: Figma,
      student: 200,
      level: "C1",
      month:2
    },
  ];

  return (
    <Wrapper>
      <div>
        <h2 className={styles.heading}>New Learning</h2>
        <div className={styles.control}>
          {data.map((item) => (
            <div className={styles.controlMap} key={item.id}>
              <div className={styles.images}>
                <Image src={item.img} alt={item.title} />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.aboutText}>
                <p className={styles.text}>
                  <Image src={LessonIcon} alt="Lessons" />
                  Lessons: {item.lessonCounter}
                </p>
                <p className={styles.text}>
                  <Image src={StudentIcon} alt="Lessons" />
                  Students: {item.student}
                </p>
                <p className={styles.text}>
                  <Image src={LevelIcon} alt="Lessons" />
                  Level: {item.level}
                </p>
              </div>
              <div className={styles.buttonControl}>

              <div className={styles.buttonOne}>
                <button className={styles.buttonOneCursor}>Start Course </button>
              </div>
              <div className={styles.buttonTwo}>

                <button className={styles.buttonTwoCursor}>{item.month}</button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Learning;
