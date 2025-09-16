"use client";

import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams(); 
  const id = params.id;


  const categories = [
    { id: "1", name: "Work", description: "Work category description" },
    { id: "2", name: "Ausbildung", description: "Ausbildung description" },
    { id: "3", name: "Education", description: "Education description" },
    { id: "4", name: "Family", description: "Family description" },
    { id: "5", name: "Weiterbildung", description: "Weiterbildung description" },
    { id: "6", name: "Blau Card", description: "Blau Card description" },
    { id: "7", name: "Chance Card", description: "Chance Card description" },
    { id: "8", name: "Praktikant", description: "Praktikant description" },
  ];

  const category = categories.find((c) => c.id === id);

  if (!category) return <p>Kategoriya tapılmadı!</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
}
