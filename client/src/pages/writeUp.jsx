import WriteupCard from "../component/writeUpCom/writeupCard";
import { Buffer } from "buffer";
import { Search, ChevronLeft, ChevronRight, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import TerminalWindow from "../component/TerminalWindow";
import GlitchText from "../component/GlitchText";

window.Buffer = Buffer;
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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
          `${apiUrl}/api/getPosts?page=${page}`
        );
        const data = await response.json();
        setWriteups(data.posts);
        setTotalPages(data.totalPages || 1);
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

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
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
    <div className="min-h-screen py-12 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <TerminalWindow title="root@cybers3c:~/writeups">
          <div className="mb-8 border-b border-gray-800 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-4xl font-bold font-mono mb-2 flex items-center gap-3">
                  <span className="text-primary">{">"}</span>
                  <GlitchText text="SECURITY_LOGS" />
                </h1>
                <p className="text-gray-400 font-mono text-sm">
                  // ARCHIVE OF SECURITY RESEARCH AND FINDINGS
                </p>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-auto flex items-center bg-[#050505] border border-gray-700 focus-within:border-primary px-3 py-2 rounded-sm transition-colors">
                <span className="text-gray-500 mr-2">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  placeholder="grep 'search_query'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-white placeholder:text-gray-600 font-mono text-sm w-full md:w-64"
                />
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20 font-mono text-primary animate-pulse">
              {">"} FETCHING_DATA...
            </div>
          )}

          {/* Writeups Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {writeups.map((post) => (
                <WriteupCard key={post.slug} meta={post} slug={post.slug} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && writeups.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-mono">
              {">"} NO_ENTRIES_FOUND
            </div>
          )}

          {/* Pagination */}
          {!loading && writeups.length > 0 && (
            <div className="flex justify-center items-center gap-2 pt-6 border-t border-gray-800">
              <button
                onClick={handlePrevPage}
                disabled={page === 1}
                className={`flex items-center gap-1 px-3 py-1.5 border border-gray-800 transition-all font-mono text-sm ${
                  page === 1
                    ? "text-gray-600 cursor-not-allowed bg-transparent"
                    : "text-primary hover:bg-primary/10 hover:border-primary"
                }`}
              >
                <ChevronLeft size={14} />
                PREV
              </button>

              <div className="flex items-center gap-1">
                {getPageNumbers().map((pageNum, idx) => (
                  pageNum === '...' ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-gray-600 font-mono">...</span>
                  ) : (
                    <button
                      key={pageNum}
                      onClick={() => handlePageClick(pageNum)}
                      className={`min-w-[32px] h-8 px-2 font-mono text-sm transition-all border ${
                        page === pageNum
                          ? "bg-primary text-black border-primary font-bold"
                          : "text-gray-400 border-transparent hover:text-primary hover:border-gray-700"
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
                className={`flex items-center gap-1 px-3 py-1.5 border border-gray-800 transition-all font-mono text-sm ${
                  page === totalPages
                    ? "text-gray-600 cursor-not-allowed bg-transparent"
                    : "text-primary hover:bg-primary/10 hover:border-primary"
                }`}
              >
                NEXT
                <ChevronRight size={14} />
              </button>
            </div>
          )}
        </TerminalWindow>
      </div>
    </div>
  );
}