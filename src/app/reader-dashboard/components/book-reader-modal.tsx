

"use client"

import { ArrowLeft, Plus, Minus, Edit, Bookmark, Highlighter, Maximize, Menu, Sun } from "lucide-react"
import { useState, useEffect } from "react"

interface BookReaderModalProps {
  book: {
    id: string
    title: string
    author: string
    progress?: number
  }
  onClose: () => void
}

export function BookReaderModal({ book, onClose }: BookReaderModalProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages] = useState(37)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [isLightMode, setIsLightMode] = useState(true)

  // Add theme classes based on mode
  const themeClasses = {
    background: isLightMode ? "bg-white" : "bg-gray-900",
    text: isLightMode ? "text-gray-900" : "text-gray-100",
    textSecondary: isLightMode ? "text-gray-600" : "text-gray-400",
    border: isLightMode ? "border-gray-200" : "border-gray-700",
    sidebarBg: isLightMode ? "bg-gray-50" : "bg-gray-800",
    hover: isLightMode ? "hover:bg-gray-100" : "hover:bg-gray-700",
    selectedBg: isLightMode ? "bg-blue-100" : "bg-blue-900",
    selectedText: isLightMode ? "text-blue-700" : "text-blue-300",
  }
  const [selectedChapter, setSelectedChapter] = useState("Chapter 1")

  const tableOfContents = [
    "Cover",
    "Praise",
    "Title",
    "Chapter 1",
    "How it Started",
    "Let Go",
    "Chapter 2",
    "How it Started",
    "Where Are We",
  ]

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 10, 200))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 10, 50))
  }

  return (
    <div className={`fixed inset-0 z-50 flex flex-col ${themeClasses.background}`}>
      {/* Header */}
      <div
        className={`flex items-center justify-between px-6 py-4 border-b ${themeClasses.border} ${themeClasses.background}`}
      >
        <div className="flex items-center gap-4">
          <h1 className={`text-lg font-semibold ${themeClasses.text}`}>{book.title}</h1>
          <button
            onClick={onClose}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm ${themeClasses.textSecondary} ${themeClasses.hover} rounded-lg transition-colors`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        {/* Reading Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleZoomIn}
            className={`p-2 ${themeClasses.hover} rounded-lg transition-colors`}
            title="Zoom In"
          >
            <Plus className={`w-4 h-4 ${themeClasses.text}`} />
          </button>
          <button
            onClick={handleZoomOut}
            className={`p-2 ${themeClasses.hover} rounded-lg transition-colors`}
            title="Zoom Out"
          >
            <Minus className={`w-4 h-4 ${themeClasses.text}`} />
          </button>
          <button className={`p-2 ${themeClasses.hover} rounded-lg transition-colors`} title="Edit">
            <Edit className={`w-4 h-4 ${themeClasses.text}`} />
          </button>
          <button className={`p-2 ${themeClasses.hover} rounded-lg transition-colors`} title="Bookmark">
            <Bookmark className={`w-4 h-4 ${themeClasses.text}`} />
          </button>
          <button className={`p-2 ${themeClasses.hover} rounded-lg transition-colors`} title="Highlight">
            <Highlighter className={`w-4 h-4 ${themeClasses.text}`} />
          </button>
          <button className={`p-2 ${themeClasses.hover} rounded-lg transition-colors`} title="Fullscreen">
            <Maximize className={`w-4 h-4 ${themeClasses.text}`} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-sm ${themeClasses.textSecondary}`}>
            Page {currentPage}-{totalPages}
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
            Progress {book.progress || 5}%
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Table of Contents */}
        <div className={`w-80 ${themeClasses.sidebarBg} border-r ${themeClasses.border} flex flex-col`}>
          <div className={`p-4 border-b ${themeClasses.border}`}>
            <div className="flex items-center gap-2 mb-4">
              <h2 className={`font-semibold ${themeClasses.text}`}>Table of Content</h2>
              <Menu className={`w-4 h-4 ${themeClasses.textSecondary}`} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <nav className="p-4">
              <ul className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedChapter(item)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedChapter === item
                          ? `${themeClasses.selectedBg} ${themeClasses.selectedText} font-medium`
                          : `${themeClasses.textSecondary} ${themeClasses.hover}`
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Light Mode Toggle */}
          <div className={`p-4 border-t ${themeClasses.border}`}>
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`flex items-center gap-2 text-sm ${themeClasses.textSecondary} hover:${themeClasses.text} transition-colors`}
            >
              <Sun className={`w-4 h-4 ${isLightMode ? "text-yellow-500" : "text-gray-400"}`} />
              {isLightMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className={`flex-1 overflow-y-auto ${themeClasses.background}`}>
          <div className="max-w-4xl mx-auto p-8" style={{ fontSize: `${zoomLevel}%` }}>
            <div className={`prose max-w-none ${isLightMode ? "prose-gray" : "prose-invert"}`}>
              <p className={`mb-6 ${themeClasses.text}`}>
                It was slow compared to later machines but was significant for demonstrating programmability.
              </p>

              <p className={`mb-2 font-medium italic ${themeClasses.textSecondary}`}>Reference:</p>
              <p className={`mb-6 text-sm italic ${themeClasses.textSecondary}`}>
                Bashe, C. J., Johnson, L. R., Palmer, J. H., & Pugh, E. W. (1986). IBM's Early Computers. MIT Press.
              </p>

              <p className={`mb-4 ${themeClasses.text}`}>
                <strong>b. ENIAC (Electronic Numerical Integrator and Computer) (1945)</strong>
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                Designed by John Presper Eckert and John Mauchly, ENIAC was the first general-purpose, fully electronic
                digital computer.
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                It contained 18,000 vacuum tubes and could perform up to 5,000 operations per second.
              </p>
              <p className={`mb-6 ${themeClasses.text}`}>
                ENIAC was used primarily for military applications, such as calculating artillery trajectories.
              </p>

              <p className={`mb-2 font-medium italic ${themeClasses.textSecondary}`}>Reference:</p>
              <p className={`mb-6 text-sm italic ${themeClasses.textSecondary}`}>
                Goldstine, H. H. (1972). The Computer from Pascal to von Neumann. Princeton University Press.
              </p>

              <p className={`mb-4 ${themeClasses.text}`}>
                <strong>c. EDSAC (Electronic Delay Storage Automatic Calculator) (1949)</strong>
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                Created by Maurice Wilkes at the University of Cambridge, EDSAC was the first computer to use the
                stored-program concept.
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                It employed mercury delay lines for memory and could execute programs stored in its memory.
              </p>
              <p className={`mb-6 ${themeClasses.text}`}>
                EDSAC was used in scientific research, marking a shift toward practical computation.
              </p>

              <p className={`mb-2 font-medium italic ${themeClasses.textSecondary}`}>Reference:</p>
              <p className={`mb-6 text-sm italic ${themeClasses.textSecondary}`}>
                Wilkes, M. V. (1951). The Preparation of Programs for an Electronic Digital Computer. Addison-Wesley.
              </p>

              <p className={`mb-4 ${themeClasses.text}`}>
                <strong>d. UNIVAC (Universal Automatic Computer) (1951)</strong>
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                Developed by Eckert and Mauchly, UNIVAC was the first commercially available computer.
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                It was designed for business and government use, capable of handling both text and numeric data.
              </p>
              <p className={`mb-6 ${themeClasses.text}`}>
                UNIVAC's success marked the beginning of the commercial computer industry.
              </p>

              <p className={`mb-2 font-medium italic ${themeClasses.textSecondary}`}>Reference:</p>
              <p className={`mb-8 text-sm italic ${themeClasses.textSecondary}`}>
                Campbell-Kelly, M., & Aspray, W. (1996). Computer: A History of the Information Machine. Basic Books.
              </p>

              <p className={`mb-6 ${themeClasses.text}`}>
                It was slow compared to later machines but was significant for demonstrating programmability.
              </p>

              <p className={`mb-2 font-medium italic ${themeClasses.textSecondary}`}>Reference:</p>
              <p className={`mb-6 text-sm italic ${themeClasses.textSecondary}`}>
                Bashe, C. J., Johnson, L. R., Palmer, J. H., & Pugh, E. W. (1986). IBM's Early Computers. MIT Press.
              </p>

              <p className={`mb-4 ${themeClasses.text}`}>
                <strong>b. ENIAC (Electronic Numerical Integrator and Computer) (1945)</strong>
              </p>
              <p className={`mb-4 ${themeClasses.text}`}>
                Designed by John Presper Eckert and John Mauchly, ENIAC was the first general-purpose...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
