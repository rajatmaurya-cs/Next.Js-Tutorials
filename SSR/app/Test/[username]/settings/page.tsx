"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
export default function Dynamic() {

    const params = useParams();
    console.log(params);
    const router = useRouter();

    return (
    <div className="space-y-7 flex flex-col min-w-full min-h-screen justify-center items-center">
    
    <h1 className="text-6xl">Hi this is in settings/page.tsx  {params.username}</h1>

      <button
         className="border-3 border-yellow-300 p-3 rounded-full w-50"
        onClick={() => {
          router.push(`/Test/${params.username}`);
        }}
      >
        Go to Home ⚙️
      </button>
    
    </div>
    )

}