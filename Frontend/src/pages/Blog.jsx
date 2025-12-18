import React from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogsData";

const Blog = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-emerald-500 uppercase mb-2">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our latest insights & articles
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore expert opinions, strategies, and industry trends to help
            your business grow smarter and faster.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {blog.description}
                </p>

                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-block text-emerald-500 font-medium text-sm hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
