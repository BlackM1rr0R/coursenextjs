"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getProfile, updateProfile, ProfileData } from "../api";
import styles from './visumstatus.module.css';
import Wrapper from "../component/wrapper/wrapper";
import { useRouter } from "next/navigation";

const VisumStatus = () => {
  const { token ,logout} = useAuth();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const [formData, setFormData] = useState<Partial<ProfileData>>({});
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      setError("You are not logged in.");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        setProfile(data);
        setFormData({
          email: data.email, 
          name: data.name,
          surname: data.surname,
          phoneNumber: data.phoneNumber,
          visa: data.visa,
          visaStatus: data.visaStatus,
        });
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to fetch profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdate = async () => {
    if (!token) return;
    setUpdating(true);
    try {
      const updated = await updateProfile(token, formData);
      setProfile(updated);
      alert("Profile updated successfully!");
      logout();
      router.push("/login");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to update profile.");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <p style={{ textAlign: "center", marginTop: "3rem" }}>Loading profile...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "3rem", color: "red" }}>{error}</p>;
  if (!profile) return <p style={{ textAlign: "center", marginTop: "3rem" }}>Profile not found</p>;

  return (
    <Wrapper>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome, {profile.name} {profile.surname}</h1>
        <div className={styles.infoItem}>
          <span className={styles.label}>Visa:</span>
          <input
            type="text"
            value={formData.visa || ""}
            className={styles.inputField + " " + styles.readonlyField}
            readOnly
          />
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Visa Status:</span>
          <input
            type="text"
            value={formData.visaStatus || ""}
            className={styles.inputField + " " + styles.readonlyField}
            readOnly
          />
        </div>

      </div>
    </Wrapper>
  );
};

export default VisumStatus;
