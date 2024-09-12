import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto'>
           <BannerSection></BannerSection>
         <Books></Books>
        </div>
    );
};

export default Home;