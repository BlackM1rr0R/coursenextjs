"use client";
import { useState } from "react";
import Wrapper from "../wrapper/wrapper";
import { sendEmail } from "@/app/api";
import styles from "./contactadmin.module.css";

const ContactAdmin = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    try {
      const response = await sendEmail(to, subject, body);
      setMessage(response);
    } catch (error) {
      setMessage("Mesaj göndərilmədi, xahiş olunur sonra cəhd edin.");
    }
  };

  return (
    <Wrapper>
        <div className={styles.controlEmail}>

       
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Admin</h2>

        <input
          type="email"
          placeholder="Göndəriləcək email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className={styles.input}
        />

        <input
          type="text"
          placeholder="Mövzu"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={styles.input}
        />

        <textarea
          placeholder="Mesajınızı yazın..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={styles.textarea}
        />

        <button onClick={handleSend} className={styles.button}>
          Send Message
        </button>

        {message && <p className={styles.message}>{message}</p>}
      </div>

      <div className={styles.infoBox}>
        <h2>
          Buradan siz birbaşa adminlə əlaqə saxlaya bilərsiniz. Əgər vizanız
          haqqında suallarınız varsa, sənədlərinizin statusunu öyrənmək
          istəyirsinizsə və ya ümumi texniki dəstəyə ehtiyacınız varsa,
          mesajınızı buradan rahatlıqla göndərə bilərsiniz. Komandamız sizə ən
          qısa zamanda cavab verəcək və bütün suallarınızı cavablandıracaq.
          Əlavə olaraq, viza prosesində hansı sənədlərin tələb olunduğunu,
          müraciətinizin hansı mərhələdə olduğunu və gecikmə səbəblərini də
          öyrənə bilərsiniz. Sizin rahatlığınız və vaxtınıza qənaət üçün bu
          xidmət hər zaman aktivdir.
        </h2>
      </div>
       </div>
    </Wrapper>
  );
};

export default ContactAdmin;
