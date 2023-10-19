import { Link, useLoaderData } from "react-router-dom";
import { addItemOnLS, getItemsFromLS } from "../js/addTocard";
import { toast } from "react-toastify";


const SingleProduct = () => {
    const loadedData = useLoaderData();

    const addToCart = (id) => {
        const cartItems = getItemsFromLS();
        const isItemInCart = cartItems.some((item) => item === id);
        if (isItemInCart) {
            toast.warning('This product is already added to the cart.');
        } else {
            const productId = id;
            addItemOnLS(productId);
            toast.success('Product added to cart successfully.')
        }
    }


    return (
        <div className="max-w-6xl mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-5  gap-0 md:gap-8">
                <div className="border rounded-sm col-span-2 p-4">
                    <img className=" w-full" src={loadedData.productImgUrl} alt="" />
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
                        <button onClick={() => addToCart(loadedData._id)} className='text-white bg-blue-700 py-2 mt-1 rounded-sm px-8'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;