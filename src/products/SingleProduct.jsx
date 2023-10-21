import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../providers/AuthProvider';

const SingleProduct = () => {
    const { user, loading } = useContext(AuthContext);
    const loadedData = useLoaderData();
    const [cartItem, setCartItem] = useState([]);

    // Function to fetch cart data
    const fetchCartData = () => {
        fetch(`https://brand-server-pi.vercel.app/carts/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCartItem(data);
            });
    };

    useEffect(() => {
        fetchCartData(); // Fetch cart data when component mounts
    }, []);

    // handle add to cart
    const addToCart = () => {
        const product = {
            productName: loadedData.productName,
            productImgUrl: loadedData.productImgUrl,
            brandName: loadedData.brandName,
            category: loadedData.category,
            productPrice: loadedData.productPrice,
            shortDescription: loadedData.shortDescription,
            email: user.email,
        }

        const isExist = cartItem?.find((item) => item._id === loadedData._id);

        if (isExist) {
            toast.warning('This product is already in the cart');
        } else {
            fetch('https://brand-server-pi.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(() => {
                    toast.success('Product added to the cart successfully.');
                    // Fetch cart data and update the state
                    fetchCartData();
                })
                .catch(error => {
                    console.error('Error adding to cart:', error);
                });
        }
    }

    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-8  px-2 md:px-0">
                <div className="border rounded-sm col-span-2 p-4">
                    <img className="w-full" src={loadedData.productImgUrl} alt="" />
                </div>
                <div className="col-span-3 mt-8 md:mt-0">
                    <div className="border-b pb-1">
                        <h2 className="text-3xl font-semibold mb-2">{loadedData.productName}</h2>
                        <p>{loadedData.brandName}</p>
                    </div>
                    <div className="my-4">
                        <p>{loadedData.shortDescription}</p>
                        <p className="text-3xl font-bold my-8">${loadedData.productPrice}</p>
                    </div>
                    <div>
                        <button onClick={addToCart} className='text-white bg-blue-700 py-2 mt-1 rounded-sm px-8'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
