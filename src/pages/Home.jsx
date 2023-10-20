import React from 'react';
import Banner from '../components/banner/Banner';
import ProductBrands from '../components/productBrand/ProductBrands';
import ShopCart from '../components/shopCarts/ShopCart';
import ShortBanner from '../components/banner/ShortBanner';

const Home = () => {
    return (
        <div>
            <Banner />
            <ShopCart />
            <ProductBrands />
            <ShortBanner />
        </div>
    );
};

export default Home;