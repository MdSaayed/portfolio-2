import { Link, useLoaderData } from "react-router-dom";


const SingleProduct = () => {
    const loadedData = useLoaderData();

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
                        <Link to={`/product/${loadedData._id}`} className='text-white bg-blue-700 py-2 mt-1 rounded-sm px-8'>Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;