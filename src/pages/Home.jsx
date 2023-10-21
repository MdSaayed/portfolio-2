import React from 'react';
import Banner from '../components/banner/Banner';
import ProductBrands from '../components/productBrand/ProductBrands';
import ShopCart from '../components/shopCarts/ShopCart';
import ShortBanner from '../components/banner/ShortBanner';
import NewsLatter from '../components/newslatter/NewsLatter';
import Reviews from '../components/reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner />
            <ShopCart />
            <ProductBrands />
            <ShortBanner />
            <Reviews />
            <NewsLatter />
        </div>
    );
};

export default Home;