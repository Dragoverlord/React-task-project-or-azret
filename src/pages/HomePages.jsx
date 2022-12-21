import React from 'react';
import FooterCustom from '../componets/footer/Footer';
import AuthPage from './AuthPage';
import NavbarPage from './NavbarPage';
import ProductsPage from './ProductsPage';

const HomePages = () => {
    return (
        <div>
            <AuthPage/>
            <ProductsPage/>
            <FooterCustom />
        </div>
    );
};

export default HomePages;