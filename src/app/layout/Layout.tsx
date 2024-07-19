import { Fragment, ReactNode } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";

type Props = {
    children: ReactNode;
}
export default function Layout({ children }: Props) {
    return (
        <Fragment>
            <header className="text-gray-600 body-font">
                <div className="flex flex-row-reverse mx-20 gap-3 font-light text-sm">
                    <a>Hi, John</a>
                    <a>Orders & Returns</a>
                    <a>Help</a>
                </div>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl font-bold">ECOMMERCE</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900 font-bold cursor-pointer">Categories</a>
                        <a className="mr-5 hover:text-gray-900 font-bold">Sale</a>
                        <a className="mr-5 hover:text-gray-900 font-bold">Clearance</a>
                        <a className="mr-5 hover:text-gray-900 font-bold">New Stock</a>
                        <a className="mr-5 hover:text-gray-900 font-bold">Trending</a>
                    </nav>
                    <div className="flex items-center space-x-4 p-4">
                        <CiSearch className="text-2xl" />
                        <CiShoppingCart className="text-2xl" />
                        <LuLogOut className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </header>
            <div className="flex justify-center items-center bg-gray-100 gap-10 md:my-5">
                <SlArrowLeft />
                Get 10% off on signup
                <SlArrowRight />
            </div>
            <div className="flex justify-center">
                {children}
            </div>
        </Fragment>
    )
}