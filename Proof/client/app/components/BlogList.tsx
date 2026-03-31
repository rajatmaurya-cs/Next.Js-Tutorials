// components/BlogList.tsx

import Image from "next/image";

type Blog = {
  _id: string; // ✅ fixed
  description: string;
  imageUrl: string;
};

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
          {/* ✅ Optimized Image */}
          <div className="relative w-full h-48">
            <Image
              src={blog.imageUrl}
              alt={blog.description}
              fill
              className="object-cover"
            />
          </div>

          {/* ✅ Content */}
          <div className="p-4">
            <h2 className="text-lg font-semibold line-clamp-2">
              {blog.description}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;