import { motion } from "framer-motion";
import { Button } from "../../components/ui/Button";
import { Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Discover the Future of U.S. Real Estate Investment with JK Real Partners",
      readTime: "2 min",
      date: "Monday, May 26, 2025",
      timeAgo: "4 months",
      views: 38,
      image: "/modern-luxury-florida-house-with-palm-trees-and-su.jpg",
    },
    {
      id: 2,
      title: "The Importance of a Home Inspection for Real Estate Investors",
      readTime: "1 min",
      date: "Saturday, August 16, 2025",
      timeAgo: "about 1 month",
      views: 5,
      image: "/orlando-family-house-with-pool.jpg",
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#f1f3ee] mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] bg-clip-text text-transparent">
              BLOG
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Discover the Future of U.S. Real Estate Investment with JK Real Partners. Effortlessly unlock the
              potential of U.S. real estate from anywhere in the world! JK Real Partners' cutting-edge web application
              empowers investors to navigate the complexities of the U.S. real estate market with ease.
            </p>
            <Link
  to="/allarticles"
  className="inline-block bg-gradient-to-r from-[#b38e4f] to-[#d4b369] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
>
  See All
</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/modern-luxury-florida-house-with-palm-trees-and-su.jpg"
              alt="Modern luxury house"
              className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="relative rounded-2xl p-[3px]    shadow-[0_0_40px_rgba(212,179,105,0.6)]">
          <div className="bg-white rounded-2xl p-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-12 text-[#202720]"
            >
              OUR MOST POPULAR ARTICLES
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              {articles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#f9f9f8] rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-56">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-4 right-4 flex items-center bg-black/60 text-white px-3 py-1 rounded-full text-sm shadow-md">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#202720] mb-4 line-clamp-2 hover:text-[#d4b369] transition-colors">
                      {article.title}
                    </h3>

                    <div className="flex items-center text-gray-600 text-sm mb-6 space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-[#d4b369]" />
                        {article.readTime}
                      </div>
                      <span>{article.date}</span>
                      <span>{article.timeAgo}</span>
                    </div>

                    <Button className="bg-gradient-to-r from-[#b38e4f] to-[#d4b369] hover:opacity-90 text-white font-semibold rounded-lg px-6 py-2 shadow-md">
                      READ
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
