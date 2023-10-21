import React from 'react';
import Banner from '../components/banner/Banner';
import ProductBrands from '../components/productBrand/ProductBrands';
import ShopCart from '../components/shopCarts/ShopCart';
import ShortBanner from '../components/banner/ShortBanner';
import NewsLatter from '../components/newslatter/NewsLatter';


const Home = () => {
    return (
        <div>
            <Banner />
            <ShopCart />
            <ProductBrands />
            <ShortBanner />
            <NewsLatter />
        </div>
    );
};

export default Home;