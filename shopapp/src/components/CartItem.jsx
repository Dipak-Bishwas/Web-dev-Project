import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    };

    return (
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover mr-4" />
                <div>
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <h1 className="text-sm">{item.description}</h1>
                    <p className="mt-2 text-green-600">${item.price}</p>
                </div>
            </div>
            <div>
            <div
               className="flex items-center justify-center bg-red-100 rounded-full p-2 cursor-pointer hover:bg-red-200"
               onClick={removeFromCart}
            >
               <MdDelete className="text-red-500" />
            </div>

            </div>
        </div>
    );
};

export default CartItem;
