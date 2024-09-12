import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div>
             <section>
                <div className="card md:cart-side lg:card-side bg-gray-200 shadow-xl mt-8">
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl font-bold ">Books to freshen up <br /> your bookshelf</h2>
                       <button className='mt-10 bg-green-600 text-white py-2 px-3 font-semibold rounded-lg'><Link to={'/list_books'}>View to list</Link></button>
                    </div>
                    <figure>
                        <img className='mr-9'
                            src="https://i.ibb.co.com/qxcx6HB/banner-books.png"
                            alt="Album" />
                    </figure>
                </div>
            </section>
        </div>
    );
};

export default BannerSection;