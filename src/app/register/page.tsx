"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./register.module.css"; // login ilə eyni stil
import { loginUser, registerUser } from "../api";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { login } = useAuth();
  const handleRegister = async () => {
    if (!email || !password || !name || !surname || !phoneNumber) {
      alert("Please fill all fields");
      return;
    }

    try {
      const request = await registerUser({
        email,
        password,
        name,
        surname,
        phoneNumber,
        role: "USER",
        visa: "WORKER",
        visaStatus: "NONE",
      });

      console.log("Registration successful:", request);
      const response = await loginUser({ email, password });
      if (response?.token) {
        login(email, response.token);
        router.push("/service"); // və ya login səhifəsinə yönləndir
      } else {
        console.error("No token received after registration");
      }
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error("Registration failed:", error.message);
      else console.error("Registration failed: Unknown error");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <input
        className={styles.inputField}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <button className={styles.loginButton} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
