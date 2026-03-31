"use client";

import { useRouter } from "next/navigation";

import { useParams } from "next/navigation";

import Link from 'next/link'


export default function Page() {

const router = useRouter();
    const params = useParams();
    console.log(params);


    return (<div className="flex flex-col space-y-4 min-w-full min-h-screen justify-center items-center">
        <div>
    <h1 className="mb-5 text-3xl">This is Login page for <span className="text-yellow-400 text-6xl">{params.username}</span> Login Now by pressing the Button</h1>

    </div>

    <div className="space-x-4">
       <button
       className="border-3 border-yellow-300 p-3 rounded-full"
        onClick={() => {
          router.push(`/Test/${params.username}/settings`);
        }}
      >
        Go to Settings ⚙️
      </button>

      <Link
  href={`/Test/${params.username}/settings`}
  className="border-3 border-yellow-300 p-3 rounded-full inline-block"
>
  Go to Settings Link ⚙️
</Link>


     <button
       className="border-3 border-yellow-300 p-3 rounded-full"
        onClick={() => {
          router.replace(`/`);
        }}
      >
        Go to Settings Replace ⚙️
      </button>


      <button
       className="border-3 border-yellow-300 p-3 rounded-full"
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh Page ⚙️
      </button>

      

      </div>
    
    </div>)
    
    
    
   

}