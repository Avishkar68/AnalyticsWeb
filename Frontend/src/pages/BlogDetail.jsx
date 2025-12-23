import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogsData";

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  // Shared button style
  const backBtnStyle = "inline-block bg-[#F8F9FB] border border-[#DDE2E9] text-[#2D3142] px-5 py-2 rounded-full text-sm font-medium transition hover:bg-white hover:shadow-sm";

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link to="/blog" className={backBtnStyle}>
          Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Updated Back Button */}
        <Link to="/blog" className={backBtnStyle}>
          ← Back to blogs
        </Link>

        {/* Blog Header */}
        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-6 leading-tight">
          {blog.title}
        </h1>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-2xl mb-8 shadow-sm"
        />

        {/* Blog Content */}
        <div className="prose prose-gray max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
          {blog.content}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;