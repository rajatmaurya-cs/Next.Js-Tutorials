"use client";

import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/delete/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Delete failed");
      }

      console.log("Deleted:", data);

  
      router.refresh();

    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteButton;