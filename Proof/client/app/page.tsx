// app/page.tsx
import { getBlogs } from "./lib/api";
import BlogList from "./components/BlogList";
import Header from "./components/Header"
import Footer from "./components/Footer";

const Page = async () => {
  const blogs = await getBlogs();

  return (
    <>
      <Header />

      <main className="min-h-screen">
        <BlogList blogs={blogs.images} />
      </main>

      <Footer />
    </>
  );
};

export default Page;