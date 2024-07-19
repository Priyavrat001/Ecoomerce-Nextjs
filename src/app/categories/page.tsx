import Layout from "../layout/Layout";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function Categories(){
    return(
        <Layout>
        <section className="w-[50%]">
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        Please mark your intrest
                    </h1>
                    <p className="text-center">We will keep you notify</p>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <span className="font-semibold">My saved intrests!</span>
                        <div className="flex gap-3 items-center">
                        <input type="checkbox" className="h-4 w-4"/>
                        <label htmlFor="categories">Ramen</label>
                        </div>
                        <div className="flex justify-center gap-4 items-center">
                            <div className="w-1">
                            <SlArrowLeft/>
                            </div>
                            <SlArrowLeft/>
                            <SlArrowLeft/>
                                    {[1, 2, 3].map((number) => (
                                        <button
                                        key={number}
                                        type="button">
                                            {number}
                                        </button>
                                    ))}
                                    <SlArrowRight/>
                                   <div className="w-1">
                                   <SlArrowRight/>
                                   </div>
                                    <SlArrowRight/>
                                </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </Layout>
    )
}