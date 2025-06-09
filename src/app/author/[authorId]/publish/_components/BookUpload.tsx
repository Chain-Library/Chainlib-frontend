"use client"

import { cn } from "@/lib/utils"
import { Delete } from "lucide-react"
import Image from "next/image"
import { useRef, useState, type ChangeEvent, type DragEvent } from "react"

interface BookUploadProps {
  supportedFormats: string
  acceptedFileTypes: string[]
}

export default function BookUpload({
  supportedFormats,
  acceptedFileTypes,
}: BookUploadProps) {
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
    <>
      <div className={cn(isDragging ? "border-blue-500 bg-[#EDF7FF]" : "border-blue-200", "border-2 border-dashed border-[#4BB1FF] bg-[#EDF7FF] rounded-base text-center h-80 md:h-100 flex flex-col items-center justify-center cursor-pointer transition-colors")}>
        {!file ? (
          <div
            className="size-full grid place-items-center place-content-center"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <div className="relative size-25  flex items-center justify-center mb-4">
              <Image
                src="/ebook1.svg"
                alt="Upload image"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-label-small text-neutral-600 text-center space-y-2">
              <span>Drag and drop or Click to</span>
              <br />
              <span >choose file from device</span>
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept={acceptedFileTypes.join(",")}
              className="hidden"
            />
          </div>
        ) : (
          <div className="flex size-full items-center">
            {preview ? (
              <div className="size-full rounded-base relative">
                <Image src={preview || "/placeholder.svg"} fill alt="Preview" className="object-fill rounded-base" />
              </div>
            ) : (
              <div className="w-12 h-12 bg-blue-100 rounded flex items-center justify-center">
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
          </div>
        )}
      </div>
      {preview ? (
        <div className="flex justify-between items-center">
          <p className="whitespace-nowrap space-x-2 text-neutral-500 mt-2.5 text-body-medium">
            <span className="font-medium">{file?.name}</span>
            <span className="">{(file ? file.size / 1024 : 0).toFixed(2)} KB</span>
          </p>
          <Delete className="cursor-pointer" size={24} onClick={(e) => {
            e.stopPropagation()
            removeFile()
          }} />
        </div>) :
        <p className="text-body-small text-gray-500 text-start mt-2.5">
          {supportedFormats}
        </p>}
    </>
  )
}
