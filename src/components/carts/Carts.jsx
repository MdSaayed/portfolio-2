import React, { useContext, useEffect, useState } from 'react';
import { getItemsFromLS } from '../../js/addTocard';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';


const Carts = () => {
    const { user, loading } = useContext(AuthContext);
    const userEmail = user?.email;
    const [showItems, setShowItems] = useState([]);

    useEffect(() => {
        if (!loading) {
            fetch(`https://brand-server-fgzqs84fe-md-sayeds-projects.vercel.app/carts/${userEmail}`)
                .then(res => res.json())
                .then(data => setShowItems(data))
        }
    }, [user])

    const handleItemDelete = (id) => {
        fetch(`https://brand-server-fgzqs84fe-md-sayeds-projects.vercel.app/carts/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (!loading) {
                    fetch(`https://brand-server-fgzqs84fe-md-sayeds-projects.vercel.app/carts/${userEmail}`)
                        .then(res => res.json())
                        .then(data => setShowItems(data))
                }
            })
            .then(data => toast.success('Item deleted.'))
    }


    return (
        <div className='max-w-6xl mx-auto py-16'>
            {
                showItems?.length < 0 ? <>
                    <div className='mb-16'>
                        <h1 className='text-3xl font-bold text-center'>Shopping Cart</h1>
                    </div>
                </> : <>
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