import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const BookInfo = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idx = parseInt(id)

    //  console.log(id,books)
    const findBook = books.find(book => book.bookId === idx)
    const { bookId, bookName, category, image, rating, publisher, totalPages, review, tags, yearOfPublishing, author } = findBook

    return (
        <div>
            <div className="card lg:card-side bg-base-100 max-w-4xl mx-auto border md:gap-10 border-green-500 mt-5 shadow-xl">
                <figure>
                    <img className='w-96'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body justify-start items-start">
                    <h2 className="text-2xl font-bold ">Name : {bookName}</h2>
                    <p className='my-2'><span className='font-bold text-start'>By : </span>{author}</p>
                    <p className='my-2'>{category}</p>
                    <p className='my-2'><span className='font-bold '>Review :</span> {review}</p>
                    <p className='my-2'><span   className='font-bold'>Tags : </span> <span className=' text-green-500 md:mx-10'>#{tags[0]}</span> <span className=' text-green-500 md:mx-10'>#{tags[1]}</span></p>
                   
                    <p className='mt-10'>Number of pages : <span className='font-bold ml-10'>{totalPages}</span></p>
                    <p>Publisher: <span className='font-bold ml-10'>{publisher}</span></p>
                    <p>Year od date : <span className='font-bold ml-10'>{yearOfPublishing}</span></p>
                    <p>Rating: <span className='font-bold ml-10'>{rating}</span></p>
                    <div className='flex gap-5'>
                    <button className='py-1 px-3 hover:bg-green-900 hover:text-white rounded-lg border border-green-500'>Read</button>
                    <button className='py-1 px-3 hover:bg-sky-500 hover:text-white rounded-lg border border-sky-500'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookInfo;

