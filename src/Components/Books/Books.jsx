import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
             <h4>Books length {books.length}</h4>
            <div className='grid grid-cols-3 gap-5'>
            {
                books.map(book=><Book book={book} books={books}></Book>)
             }
            </div>
        </div>
    );
};

export default Books;