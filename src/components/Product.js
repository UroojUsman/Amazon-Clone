import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch();
    const Max_rating = 5;
    const Min_rating = 1;
    const [rating] = useState(
        Math.floor(Math.random() * (Max_rating - Min_rating + 1)) + Min_rating);
    const [hasPrime] = useState(Math.random() < 0.5);

    const addItemToBasket = () => {
        const product={ id, title, price,rating, description, category,image, hasPrime}
        dispatch(addToBasket(product));
     };

    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-t rounded-b">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {
                    Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500"></StarIcon>
                    ))
                }
            </div>

            <div>
                <p className="text-xs my-2 line-clamp-2" > {description}</p>
            </div>
            <div className="mb-5">
                <Currency quantity={price} currency="GBP"></Currency>
            </div>
            <br />
            { hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                </div>
            )}
            <button onClick={addItemToBasket} className="mt-auto button font-bold">Add To Basket</button>
        </div>
    )
}

export default Product
