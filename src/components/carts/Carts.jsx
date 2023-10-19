import React, { useEffect, useState } from 'react';
import { getItemsFromLS } from '../../js/addTocard';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';

const Carts = () => {
    const loadedLs = getItemsFromLS();
    const [cartItems, setCartItems] = useState(loadedLs)
    const allProduct = useLoaderData();
    const filterProducts = allProduct?.filter(item => cartItems.includes(item._id));
    const [showItems, setShowItems] = useState(null);


    const handleItemDelete = (id) => {
        const remainingItems = showItems?.filter(item => item._id !== id);
        const remainingId = cartItems?.filter(itemId => itemId !== id);
        setShowItems(remainingItems);
        localStorage.setItem('cart-items', JSON.stringify(remainingId));
    }

    useEffect(() => {
        setShowItems(filterProducts)
    }, [allProduct])

    return (
        <div className='max-w-6xl mx-auto py-16'>
            {
                showItems?.length < 0 ? <>
                    <div className='mb-16'>
                        <h1 className='text-3xl font-bold text-center'>Shopping Cart</h1>
                    </div>
                </>: <>
                </>
            }
            {/* product cart tabel */}
            <div>
                {showItems?.length > 0 ? <>
                    <table className="w-full bg-white border border-gray-200">
                        <thead>
                            <tr className='bg-blue-700 font-bold'>
                                <th className="px-6 py-3 text-xs font-medium text-white text-left uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-xs font-medium text-white text-left uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-xs font-medium text-white text-left uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showItems?.map((item) => <Cart key={item._id} item={item} handleItemDelete={handleItemDelete} />)
                            }
                        </tbody>
                    </table>
                </> : <>
                    <div className='h-[70vh] flex items-center justify-center'>
                        <h2 className='text-center'> Your cart is empty.</h2>
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default Carts;