
"use client"

import { bookData } from '@/lib/MockData';
import { useParams } from 'next/navigation';









const ReviewPage = () => {

    const params = useParams();
    const id = params?.id.toString();

    const book = bookData.find((item) => item.id.toString() === id);




    if (!book) {
        return <p>Page not found</p>
    }


    return (
        <div>
            <h1>review page</h1>
            <h2> {book.id} </h2>
            <h2> {book.author} </h2>
            <h2> {book.bookTitle} </h2>
        </div>
    )
}

export default ReviewPage;