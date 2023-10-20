import React from 'react';
import { addItemOnLS, getItemsFromLS } from '../../js/addTocard';

const Cart = ({ item, handleItemDelete }) => {
    const { _id, productName, productImgUrl, productPrice } = item;

    return (
        <tr className=" sm:space-x-4 border-b border-gray-200 hover:bg-gray-100">
            <td className="w-full sm:w-auto px-6 py-1">
                <img src={productImgUrl} alt="" className="w-32 h-32 mx-auto sm:mx-0" />
            </td>
            <td className="w-full sm:w-auto px-6 py-1">
                <h2 className="text-center sm:text-left font-bold">{productName}</h2>
            </td>
            <td className="w-full sm:w-auto px-6 py-1">
                <p className="text-center sm:text-left">${productPrice}</p>
            </td>
            <td className="w-full sm:w-auto px-6 py-1">
                <button onClick={() => handleItemDelete(_id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mx-auto sm:mx-0">Delete</button>
            </td>
        </tr>
    );
};

export default Cart;