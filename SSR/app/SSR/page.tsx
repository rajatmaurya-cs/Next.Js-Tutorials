// ❌ REMOVE "use client" → this makes it Server Component

import Link from "next/link";

/* ================= TYPES ================= */
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

/* ================= COMPONENT ================= */
const Page = async () => {
  let users: User[] = [];

  try {
    const res = await fetch("https://dummyjson.com/users", {
      cache: "no-store", // 🔥 forces SSR (dynamic)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const data: { users: User[] } = await res.json();
    users = data.users;

  } catch (error) {
    console.error(error);

    // You can throw to trigger Next.js error page
    throw new Error("Something went wrong while fetching users");
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold">Users</h1>

      <div className="mt-5 flex flex-col">
        {users.map((user) => (
          <Link
            href={`/SSR/Fetch/${user.id}`}
            key={user.id}
            className="border-yellow-300 border-2 p-3 rounded-2xl mb-5"
          >
            {user.firstName} {user.lastName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;