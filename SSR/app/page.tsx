
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1 className='text-3xl text-red-400'>Want to go To Api Fetching Just Clikc on It</h1>

           <Link
  href={`/Test/Fetch`}
  className="border-3 border-yellow-300 p-3 rounded-full inline-block"
>
  Go 🏃🏼‍♀️
</Link>

        
    </div>
  );
}
