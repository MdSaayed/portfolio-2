"user client";
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import { register } from 'swiper/element/bundle';
register();


const Products = () => {
    const barndProduct = useLoaderData();

    return (
        <div className='py-16'>
            <div className='mx-[200px]'>
                <div className='flex items-center justify-cernter'>
                    
                </div>
            </div>
            {
                barndProduct?.length > 0 ? <>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 max-w-6xl mx-auto'>
                        {
                            barndProduct?.map((product) => <Product key={product?._id} product={product} />)
                        }
                    </div>
                </> : <>
                    <div className='h-[70vh] flex items-center justify-center'>
                        <p>This brands product is not availabe. </p>
                    </div>
                </>
            }
        </div >
    );
};

export default Products;