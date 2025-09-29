import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Search, X, TrendingUp, Clock, Eye } from "lucide-react"

type Article = {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
  views: number
}

export default function AllArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
    const [sortOption, setSortOption] = useState<'all' | 'new' | 'trending' | 'popular'>('new');
    const [searchTerm, setSearchTerm] = useState('');
   // const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const dummyData: Article[] = [
      {
        id: "1",
        title: "The Importance of a Home Inspection for Real Estate Investors",
        description:
          "A home inspection gives buyers a clear view of a property’s condition, revealing hidden issues that could affect value and safety...",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        views: 120,
      },
      {
        id: "2",
        title: "Discover the Future of U.S. Real Estate Investment with JK Real Partners",
        description:
          "JK Real Partners makes U.S. real estate investment simple and accessible for global investors through an easy-to-use web platform.",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        views: 85,
      },
      
    ]
    setArticles(dummyData)
  }, [])

  const applyFilter = () => {
    let updated = [...articles]

    if (searchTerm) {
      updated = updated.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    switch (sortOption) {
      case "all":
        updated.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "new":
        updated.sort(
          (a, b) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        )
        break
      case "popular":
        updated.sort((a, b) => b.views - a.views)
        break
    }

    setFilteredArticles(updated)
  }

  useEffect(() => {
    applyFilter()
  }, [articles, searchTerm, sortOption])

  const getSortIcon = (option: string) => {
    switch (option) {
      case "new":
        return <Clock className="w-4 h-4" />
      case "popular":
        return <TrendingUp className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <section className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl font-bold mb-6 mt-10 bg-gradient-to-r from-[#b38e4f] to-[#d4b369] bg-clip-text text-transparent"
          >
            ALL ARTICLES
          </motion.h1>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover expert insights, tips, and updates on real estate, home
            buying, and more.
          </motion.p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          {/* Search */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative rounded-2xl p-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b38e4f] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 p-2 rounded-2xl bg-gray-100">
            {(
              [
                ["all", "All"],
                ["new", "Latest"],
                ["popular", "Popular"],
              ] as const
            ).map(([option, label]) => (
              <button
                key={option}
                onClick={() => setSortOption(option)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  sortOption === option
                    ? "bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white shadow-lg"
                    : "text-gray-600 hover:text-black hover:bg-gray-200"
                }`}
              >
                {getSortIcon(option)}
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Articles List */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{article.description}</p>

                <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#b38e4f]" />
                  {new Date(article.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <motion.button
                  className="bg-gradient-to-r from-[#b38e4f] to-[#d4b369] text-white font-semibold rounded-lg px-6 py-2 shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  KEEP READING
                </motion.button>
              </motion.article>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No articles found for this search.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}