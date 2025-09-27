"use client";

import { useEffect, useState } from "react";
import { AdminData, createAdmin, getAllUsers, UserDTO } from "../api";

const AdminPage = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<"ADMIN" | "MANAGER">("ADMIN");

  // Token localStorage-dan oxu (login zamanı saxlanmış)
  useEffect(() => {
    const storedToken = localStorage.getItem("token") || "";
    setToken(storedToken);
    if (storedToken) fetchUsers(storedToken);
  }, []);

  const fetchUsers = async (token: string) => {
    try {
      const data = await getAllUsers(token);
      setUsers(data);
    } catch (err) {
      console.error(err);
      alert("Could not fetch users. Are you an admin?");
    }
  };

  const handleCreateAdmin = async () => {
    if (!email || !password) {
      alert("Email və şifrə boş ola bilməz");
      return;
    }

    const newAdmin: AdminData = { email, password, role };

    try {
      const res = await createAdmin(token, newAdmin);
      alert("Yeni admin yaradıldı: " + res);
      setEmail("");
      setPassword("");
      setRole("ADMIN");
      fetchUsers(token); // siyahını yenilə
    } catch (err) {
      console.error(err);
      alert("Admin yaradıla bilmədi");
    }
  };

  return (
    <div className="container">
      <h1>Admin Panel</h1>

      <div className="form">
        <h2>Yeni Admin Yarat</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value as "ADMIN" | "MANAGER")}>
          <option value="ADMIN">ADMIN</option>
          <option value="MANAGER">MANAGER</option>
        </select>
        <button onClick={handleCreateAdmin}>Yarat</button>
      </div>

      <div className="users">
        <h2>Mövcud İstifadəçilər</h2>
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} {user.surname} - {user.email} - {user.role}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 0 auto;
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .form {
          margin-bottom: 2rem;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .form input,
        .form select {
          display: block;
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .form button {
          padding: 0.5rem 1rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .form button:hover {
          background-color: #005bb5;
        }
        .users ul {
          list-style: none;
          padding: 0;
        }
        .users li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }
      `}</style>
    </div>
  );
};

export default AdminPage;
