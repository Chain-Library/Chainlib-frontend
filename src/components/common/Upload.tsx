"use client"

import { useState, useRef, type DragEvent, type ChangeEvent } from "react"
import Image from "next/image"

interface FileUploadProps {
  supportedFormats: string
  icon: "file" | "image"
  acceptedFileTypes: string[]
  containerHeight?: string
}

export function FileUpload({ 
  supportedFormats, 
  icon, 
  acceptedFileTypes,
  containerHeight = "h-44"
}: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)

    if (droppedFiles.length === 0) return

    const droppedFile = droppedFiles[0]

    // Check if file type is accepted
    if (!acceptedFileTypes.includes(droppedFile.type)) {
      alert(
        `File type not supported. Please upload ${supportedFormats.toLowerCase().replace("supported format: ", "")}`,
      )
      return
    }

    setFile(droppedFile)

    // Create preview for images
    if (droppedFile.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(droppedFile)
    } else {
      setPreview(null)
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files

    if (!selectedFiles || selectedFiles.length === 0) return

    const selectedFile = selectedFiles[0]

    // Check if file type is accepted
    if (!acceptedFileTypes.includes(selectedFile.type)) {
      alert(
        `File type not supported. Please upload ${supportedFormats.toLowerCase().replace("supported format: ", "")}`,
      )
      return
    }

    setFile(selectedFile)

    // Create preview for images
    if (selectedFile.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setPreview(null)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const removeFile = () => {
    setFile(null)
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="rounded-md">
      {!file ? (
        <div
          className={`border-2 border-dashed bg-[#EDF7FF] rounded-md ${
            isDragging ? "border-blue-500 bg-[#EDF7FF]" : "border-blue-200"
          } flex flex-col items-center justify-center py-8 cursor-pointer transition-colors`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="mb-4">
            {icon === "image" ? (
              <div className={`w-32 ${containerHeight} relative`}>
                <Image 
                  src="/upload.png"
                  alt="Upload image"
                  width={308}
                  height={308}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className={`w-28 ${containerHeight} relative`}>
                <Image 
                  src="/upload.png"
                  alt="Upload file"
                  width={308}
                  height={308}
                  className="object-contain"
                />
              </div>
            )}
          </div>
          <p className="text-sm text-center text-gray-600 mb-1">Drag and drop or Click to choose file from device</p>
          <p className="text-xs text-gray-500">{supportedFormats}</p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept={acceptedFileTypes.join(",")}
            className="hidden"
          />
        </div>
      ) : (
        <div className="border rounded-md p-4">
          <div className="flex items-center">
            {preview ? (
              <div className="w-12 h-12 rounded overflow-hidden mr-3">
                <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate text-gray-800">{file.name}</p>
              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                removeFile()
              }}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <p className="text-xs text-gray-500 mt-2">{supportedFormats}</p>
    </div>
  )
}
