import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from './Product';
import Advertisement from '../components/advertisements/Advertisements';


const Products = () => {
    const [advertisement, setAdvertisement] = useState(null);
    const [barndName, setBrandName] = useState(null);
    const barndProduct = useLoaderData();
    const { name } = useParams()


    useEffect(() => {
        fetch(`https://brand-server-pi.vercel.app/advertisement/${name}`)
            .then(res => res.json())
            .then(data => setAdvertisement(data))

    }, [name])

    return (
        <div className='pb-16'>
            <div className='flex items-center justify-cernter'>
                <div className="max-w-6xl mx-auto">
                    <Advertisement advertisement={advertisement}></Advertisement>
                </div>
            </div>
            <div>
                <h1 className='text-4xl my-8 font-bold text-center'>Products</h1>
            </div>
            {
                barndProduct?.length > 0 ? <>
                    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 max-w-6xl mx-auto px-2 md:px-0'>
                        {barndProduct?.map((product) => <Product key={product?._id} product={product} setBrandName={setBrandName} />)}
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