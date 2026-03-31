"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

// ✅ API Layer (IMPORTANT - separation of concerns)
const fetchUser = async (id: string): Promise<User> => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return res.json();
};

const Page = () => {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", id], // 🔥 cache key
    queryFn: () => fetchUser(id as string),
    enabled: !!id, // 🔥 prevents undefined calls
    staleTime: 1000 * 60 * 5, // 5 min cache
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <div className="flex flex-col items-center min-w-full min-h-screen justify-center">
      <h1 className="text-xl font-bold">User</h1>

      <ul className="mt-5 space-y-5">
        <li className="border-yellow-300 border-2 p-3 rounded-2xl">
          {user?.firstName} {user?.lastName}
        </li>
      </ul>
    </div>
  );
};

export default Page;