import axios from "axios";

const BASE_URL = "http://localhost:8080";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email: string;
  password: string;
  name: string;
  surname: string;
  phoneNumber: string;
  role: string;
  visa: string;
  visaStatus: string;
};

export type ProfileData = {
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  role: string;
  visa: string;
  visaStatus: string;
  token?: string;
};
export type AdminData={
  email: string;
  password: string;
}

export type UserDTO = {
  email: string;
  password: string;
  name: string;
  surname: string;
  phoneNumber: string;
  role: string;
  visa: string;
  visaStatus: string;
};

export interface LoginResponse {
  token: string;
  email: string;
  role: string;
}
export async function loginUser(data: LoginData): Promise<ProfileData> {
  const response = await axios.post(`${BASE_URL}/user/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function registerUser(data: RegisterData): Promise<string> {
  const response = await axios.post(`${BASE_URL}/user/register`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
}

export async function getProfile(token: string): Promise<ProfileData> {
  const response = await axios.get(`${BASE_URL}/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
export async function updateProfile(
  token: string,
  data: Partial<ProfileData>
): Promise<ProfileData> {
  const response = await axios.put(`${BASE_URL}/user/update`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-User-Email": localStorage.getItem("email") || "",
    },
  });
  return response.data;
}

export async function sendEmail(
  to: string,
  subject: string,
  body: string
): Promise<string> {
  const token = localStorage.getItem("token"); 
  const response = await axios.post("http://localhost:8080/email/send", null, {
    params: { to, subject, body },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllUsers(token: string): Promise<UserDTO[]> {
  const response = await axios.get(`${BASE_URL}/user/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function createAdmin(token: string, admin: AdminData): Promise<string> {
  const response = await axios.post(`${BASE_URL}/admin/create`, admin, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
export async function addUser(token: string, user: UserDTO): Promise<string> {
  const response = await axios.post(`${BASE_URL}/add/user`, user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
export const loginAdmin = async (data: { email: string; password: string }): Promise<LoginResponse> => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
};