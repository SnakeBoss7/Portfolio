import WriteupCard from "../component/writeUpCom/writeupCard";
import { Buffer } from "buffer";
import { DollarSign, MoveLeft, MoveRight, PlusIcon, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Backgroundgradient from "../component/background";
window.Buffer = Buffer;

export default function Writeups() {
  const [writeups, setWriteups] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchWriteups = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/getPosts?page=${page}`
        );
        const data = await response.json();
        setWriteups(data.posts);
        setTotalPages(data.totalPages || 1); // Assuming API returns totalPages
      } catch (error) {
        console.error("Error fetching writeups:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWriteups();
  }, [page]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first, last, and pages around current
      if (page <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = page - 1; i <= page + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="pt-20 min-h-screen font-mono tracking-tight flex flex-col px-4 text-white">
      <Backgroundgradient />
      <div className="md:mx-[250px] pt-10 flex flex-col gap-6">
        <h1 className="md:text-6xl text-4xl font-extrabold flex gap-2 text-white">
          <span className="text-primary">{">>"}</span>
          <span className="">writeups</span>
        </h1>
        <div className="w-32 mb-3 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        <p className="md:text-lg text-sm text-gray-400">
          Security write-ups, explorations, and technical documentation
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button className="flex items-center w-fit bg-secondary px-4 py-2 text-sm md:text-md font-bold text-white gap-2 rounded hover:bg-opacity-80 transition-all">
            <PlusIcon size={15} />
            New Write Up
          </button>

          {/* Desktop Pagination */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all ${
                page === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-300 hover:text-primary hover:bg-secondary_lg"
              }`}
            >
              <ChevronLeft size={16} />
              <span className="text-sm">Prev</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((pageNum, idx) => (
                pageNum === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-2 text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={pageNum}
                    onClick={() => handlePageClick(pageNum)}
                    className={`min-w-[32px] h-8 px-2 rounded text-sm font-medium transition-all ${
                      page === pageNum
                        ? "bg-primary text-black"
                        : "text-gray-300 hover:bg-secondary_lg hover:text-primary"
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`flex items-center gap-1 px-3 py-1.5 rounded transition-all ${
                page === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-300 hover:text-primary hover:bg-secondary_lg"
              }`}
            >
              <span className="text-sm">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Pagination */}
          <div className="flex md:hidden items-center gap-3 w-full justify-between">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`flex items-center gap-1 px-3 py-2 rounded ${
                page === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-300 hover:text-primary"
              }`}
            >
              <MoveLeft size={16} />
              <span className="text-sm">Prev</span>
            </button>

            <span className="text-sm text-gray-400">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`flex items-center gap-1 px-3 py-2 rounded ${
                page === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-300 hover:text-primary"
              }`}
            >
              <span className="text-sm">Next</span>
              <MoveRight size={16} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center group justify-between bg-secondary_lg p-2 ring-2 ring-gray-700 focus-within:ring-primary rounded transition-all">
          <span className="text-gray-400 group-hover:text-primary transition-colors">
            <DollarSign size={20} />
          </span>
          <input
            type="text"
            placeholder="Search Writeups"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-white w-full mx-2 placeholder:text-gray-500"
          />
          <span className="text-gray-500 group-hover:text-primary transition-colors cursor-pointer">
            <Search size={20} />
          </span>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-10 text-gray-400">
            Loading writeups...
          </div>
        )}

        {/* Writeups Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writeups.map((post) => (
              <WriteupCard key={post.slug} meta={post} slug={post.slug} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && writeups.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl mb-2">No writeups found</p>
            <p className="text-sm">Be the first to create one!</p>
          </div>
        )}

        {/* Bottom Pagination */}
        {!loading && writeups.length > 0 && (
          <div className="flex justify-center items-center gap-2 py-8 border-t border-gray-800 mt-8">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded transition-all ${
                page === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-300 hover:text-primary hover:bg-secondary_lg"
              }`}
            >
              <ChevronLeft size={16} />
              <span className="text-sm">Previous</span>
            </button>

            <div className="hidden sm:flex items-center gap-1">
              {getPageNumbers().map((pageNum, idx) => (
                pageNum === '...' ? (
                  <span key={`bottom-ellipsis-${idx}`} className="px-2 text-gray-500">
                    ...
                  </span>
                ) : (
                  <button
                    key={`bottom-${pageNum}`}
                    onClick={() => handlePageClick(pageNum)}
                    className={`min-w-[32px] h-8 px-2 rounded text-sm font-medium transition-all ${
                      page === pageNum
                        ? "bg-primary text-white"
                        : "text-gray-300 hover:bg-secondary_lg hover:text-primary"
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              ))}
            </div>

            <span className="sm:hidden text-sm text-gray-400 px-4">
              {page} / {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded transition-all ${
                page === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-300 hover:text-primary hover:bg-secondary_lg"
              }`}
            >
              <span className="text-sm">Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}