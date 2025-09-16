import axios from "axios";

const BASE_URL = "http://localhost:8080";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email:string;
  password:string;
  name:string;
  surname:string;
  phoneNumber:string;
  role:string;
  visa:string;
  visaStatus:string;
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
