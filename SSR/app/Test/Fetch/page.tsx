"use client";

import { useEffect, useState } from "react";
import Link from 'next/link'

/* ================= TYPES ================= */
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

/* ================= COMPONENT ================= */
export default function Page() {
  
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    const controller = new AbortController();

     //   controller = {   signal: { aborted: false } }
     

   
    const fetchUsers = async (): Promise<void> => {
      try {
        setLoading(true);

        const res = await fetch("https://dummyjson.com/users", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: { users: User[] } = await res.json();

       // “data will be an object that has a users array, and each item follows the User type”

        setUsers(data.users);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Something went wrong");
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => {

      controller.abort(); // cleanup

      // Internally controller.signal.aborted = true;

    };
  }, []);

  /* ================= UI ================= */
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center">

      <h1 className="text-xl font-bold">Users</h1>

      <div className="mt-5 flex flex-col">

      {users.map((user) => (

        <Link href={`/Test/Fetch/${user.id}`}
         key={user.id} 
         className="border-yellow-300 border-2 p-3 rounded-2xl mb-5">
          {user.firstName} {user.lastName}

        </Link>

      ))}

      </div>
      
    </div>
  );
}