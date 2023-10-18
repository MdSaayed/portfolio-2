
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const barndProduct = useLoaderData();

    return (
        <div className='py-16'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Products</h1>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12 max-w-6xl mx-auto'>
                {
                    barndProduct?.map((product) => <Product key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;