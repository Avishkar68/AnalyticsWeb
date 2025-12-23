import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const buttonStyle = "hover:bg-button-hover-bg  text-button-text hover:text-button-hover-text border cursor-pointer border-button-border px-6 py-3 rounded-full font-medium transition";

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-point-text uppercase mb-2">
            Our Blog
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-maintext">
            Insights, ideas & industry trends
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

          {[
            {
              title: "How smart strategy drives business growth",
              desc: "Learn how businesses can scale faster by combining data-driven insights with clear strategic planning.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            },
            {
              title: "Why data analytics matters more than ever",
              desc: "Discover how data analytics helps businesses make smarter decisions and stay competitive.",
              img: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
            },
            {
              title: "Financial planning for long-term success",
              desc: "A practical guide to aligning financial strategy with your company’s long-term vision.",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            }
          ].map((blog, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
              <img
                src={blog.img}
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-maintext mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-subtext mb-6">
                  {blog.desc}
                </p>
                {/* Updated "Read more" to match button style */}
                <Link to="/blog" className="inline-block bg-[#F8F9FB] border border-[#DDE2E9] text-[#2D3142] px-5 py-2 rounded-full text-sm font-medium transition hover:text-white hover:bg-button-hover-bg">
                  Read more
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* View All Blogs Button - Updated Style */}
        <div className="text-center">
          <Link to="/blog" className={buttonStyle}>
            View All Blogs
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;