import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header2() {
    return (
        <header>
            <div className="flex items-center flex-grow bg-amazon_blue p-1 py-2" >
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
                    <Image src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer" />

                </div>
                <div className="hidden sm:flex h-10 items-center bg-yellow-400 hover:bg-yellow-500 flex-grow rounded-md">
                    <input className="p-2 rounded-l-md flex-shrink flex-grow h-full focus:outline-none w-6 px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                <div className="text-xs text-white items-center space-x-6 mx-6 flex whitespace-nowrap">
                    <div className="link">
                        <p className=" text-xs">Hello Urooj Usman</p>
                        <p className=" font-extrabold md:text-sm">Accounts & links</p>
                    </div>
                    <div className="link">
                        <p className=" text-xs">Returns</p>
                        <p className=" font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="bg-yellow-400 text-center text-black font-bold absolute top-0 right-0 md:right-10 rounded-full h-4 w-4">0</span>
                        <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>

            </div>
            <div className="bg-amazon_blue-light p-2 pl-6 flex space-x-3 text-white items-center text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"></MenuIcon>
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Buisness</p>
                <p className="link">Today's Daily</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal care</p>
            </div>
        </header>
    )
}

export default Header2
