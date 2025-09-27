"use client";

import { useState } from "react";
import { loginAdmin } from "../api";


const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginAdmin({ email, password });
      // res.token JSON formatında gəlir
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      localStorage.setItem("email", res.email);

      alert("Login successful!");
      // AdminPage-ə yönləndirmək üçün router istifadə edə bilərsən
      window.location.href = "/adminpage";
    } catch (err) {
      console.error(err);
      alert("Login failed: Invalid credentials");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
