import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-emerald-500 uppercase mb-2">
            Our Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Insights, ideas & industry trends
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {/* Blog 1 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How smart strategy drives business growth
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how businesses can scale faster by combining data-driven
                insights with clear strategic planning.
              </p>
              <Link
                to="/blog"
                className="text-emerald-500 font-medium text-sm hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why data analytics matters more than ever
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Discover how data analytics helps businesses make smarter
                decisions and stay competitive.
              </p>
              <Link
                to="/blog"
                className="text-emerald-500 font-medium text-sm hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Blog"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Financial planning for long-term success
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                A practical guide to aligning financial strategy with your
                company’s long-term vision.
              </p>
              <Link
                to="/blog"
                className="text-emerald-500 font-medium text-sm hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>

        </div>

        {/* View All Blogs Button */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-medium transition"
          >
            View All Blogs
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
