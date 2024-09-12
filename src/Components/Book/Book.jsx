import React from 'react';
import {useNavigate} from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, category, image, rating, publisher, review, tags, yearOfPublishing,author } = book
 
    

    const navigate=useNavigate()
    const handlerDetails =id=>{   
        navigate(`/book/${id}`)
   
  }
    return (
        <div onClick={()=>handlerDetails(bookId)}>
            <div className="card bg-base-100 max-w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img 
                        src={image}
                        alt="books"
                        className="rounded-xl w-28 h-40" />
                </figure>
                <div className="card-body  justify-start items-start">
                    <div className='flex justify-between gap-10'>
                       {
                        tags.map(t=><p className='text-green-600'>{t}</p>)
                       }
                    </div>
                    <h2 className="font-bold">{bookName}</h2>
                    <p>by : {author} </p>

                    <div className='flex justify-between gap-10'>
                        <p className=''>{category}</p>
                        <p className=''>{rating} </p>
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default Book;