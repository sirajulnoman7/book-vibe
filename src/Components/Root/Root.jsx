import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div>
           <div className='max-w-6xl mx-auto'>
           <Header></Header>
           
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;