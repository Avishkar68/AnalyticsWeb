import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogsData";

const BlogDetail = () => {
  const { slug } = useParams();

  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link to="/blog" className="text-emerald-500 hover:underline">
          Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          to="/blog"
          className="text-sm text-emerald-500 font-medium hover:underline"
        >
          ← Back to blogs
        </Link>

        {/* Blog Header */}
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
          {blog.title}
        </h1>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-2xl mb-8"
        />

        {/* Blog Content */}
        <div className="prose prose-gray max-w-none whitespace-pre-line">
          {blog.content}
        </div>

      </div>
    </section>
  );
};

export default BlogDetail;
