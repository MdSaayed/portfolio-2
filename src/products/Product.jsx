import { BiSolidEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, productName, productImgUrl, productPrice, brandName } = product;

    return (
        <div className="border shadow-sm hover:shadow rounded py-4 relative">
            <div className="flex justify-center">
                <img className="w-2/3" src={productImgUrl ? productImgUrl : 'https://i.ibb.co/ZhwVgZJ/download-3.jpg'} alt="" />
                <span className="absolute top-0 left-0 px-2 py-[2px] bg-yellow-500 text-white rounded-r-sm">{brandName}</span>
                <Link to={`/update/${_id}`} className="absolute top-1 -right-5 text-black cursor-pointer px-6 py-[2px]"><BiSolidEdit /></Link>
            </div>
            <div className="flex flex-col items-center justify-between px-4">
                <h2 className="font-semibold text-center">{productName}</h2>
                <p className="text-center text-blue-700">Price: ${productPrice}</p>
                <Link to={`/product/${_id}`} className='text-white bg-blue-700 py-1 mt-2 rounded-sm px-6'>View Details</Link>
            </div>
        </div>
    );
};

export default Product;