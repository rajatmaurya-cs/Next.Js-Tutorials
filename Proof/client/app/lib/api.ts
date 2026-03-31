// lib/api.ts
export const getBlogs = async () => {
  const res = await fetch("http://localhost:2000/api/images", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};