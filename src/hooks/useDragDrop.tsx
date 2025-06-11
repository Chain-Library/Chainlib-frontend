// import { useRef, useState } from "react"

// export default function useDragDrop(acceptedFileTypes, supportedFormats) {
//     const [isDragging, setIsDragging] = useState(false)
//     const [file, setFile] = useState<File | null>(null)
//     const [preview, setPreview] = useState<string | null>(null)
//     const fileInputRef = useRef<HTMLInputElement>(null)
//     const fileUploadContainerRef = useRef<HTMLDivElement>(null)
//     const fileDeleteBtnRef = useRef<HTMLButtonElement>(null)

//     const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
//         e.preventDefault()
//         e.stopPropagation()
//         setIsDragging(true)
//     }

//     const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
//         e.preventDefault()
//         e.stopPropagation()
//         setIsDragging(false)
//     }

//     const handleDrop = (e: DragEvent<HTMLDivElement>) => {
//         e.preventDefault()
//         e.stopPropagation()
//         setIsDragging(false)

//         const droppedFiles = Array.from(e.dataTransfer.files)

//         if (droppedFiles.length === 0) return

//         const droppedFile = droppedFiles[0]

//         // Check if file type is accepted
//         if (!acceptedFileTypes.includes(droppedFile.type)) {
//             alert(
//                 `File type not supported. Please upload ${supportedFormats.toLowerCase().replace("supported format: ", "")}`,
//             )
//             return
//         }

//         setFile(droppedFile)

//         // Create preview for images
//         if (droppedFile.type.startsWith("image/")) {
//             const reader = new FileReader()
//             reader.onload = () => {
//                 setPreview(reader.result as string)
//             }
//             reader.readAsDataURL(droppedFile)
//         } else {
//             setPreview(null)
//         }
//     }

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const selectedFiles = e.target.files

//         if (!selectedFiles || selectedFiles.length === 0) return

//         const selectedFile = selectedFiles[0]

//         // Check if file type is accepted
//         if (!acceptedFileTypes.includes(selectedFile.type)) {
//             alert(
//                 `File type not supported. Please upload ${supportedFormats.toLowerCase().replace("supported format: ", "")}`,
//             )
//             return
//         }

//         setFile(selectedFile)

//         // Create preview for images
//         if (selectedFile.type.startsWith("image/")) {
//             const reader = new FileReader()
//             reader.onload = () => {
//                 setPreview(reader.result as string)
//             }
//             reader.readAsDataURL(selectedFile)
//         } else {
//             setPreview(null)
//         }
//     }

//     const handleClick = () => {
//         fileInputRef.current?.click()
//     }

//     const removeFile = () => {
//         setFile(null)
//         setPreview(null)
//         if (fileInputRef.current) {
//             fileInputRef.current.value = ""
//         }
//     }

//     return { isDragging, file, preview, fileUploadContainerRef, fileInputRef, fileDeleteBtnRef, removeFile }
// }
