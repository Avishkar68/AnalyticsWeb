import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogsData";

const Blog = () => {
  // SAME button style as Blogs page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const btnStyle =
    "inline-block bg-[#F8F9FB] border border-[#DDE2E9] text-[#2D3142] px-6 py-2 rounded-full text-sm font-medium transition hover:text-white hover:bg-button-hover-bg";

  return (
    <section className="bg-[#F9FAFB] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-point-text uppercase mb-2">
            Blog
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-maintext mb-4">
            Data Analytics & Business Strategy Insights
          </h1>

          <p className="text-subtext max-w-2xl mx-auto">
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
                <h3 className="text-lg font-semibold text-maintext mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-subtext mb-6">
                  {blog.description}
                </p>

                <Link to={`/blog/${blog.slug}`} className={btnStyle}>
                  Read Article
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
