import Head from "next/head"
import Layout from "../components/layout"
import { StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Alert, Carousel } from "flowbite-react";


export default function Profile() {
    return (
        <>
            <Layout hero={false}>
                <div className="mx-auto max-w-4xl my-4 mt-28 px-3">
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 ml-3">
                            <img className="h-10 w-10 rounded-full" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">تصميم هوية بصرية</p>
                            <p className="text-sm text-gray-500 truncate">$200</p>
                            </a>
                        </div>
                        <div className="text-xs text-second">متبقى 3 أيام</div>
                    </div>
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 ml-3">
                            <img className="h-10 w-10 rounded-full" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">تصميم هوية بصرية</p>
                            <p className="text-sm text-gray-500 truncate">$200</p>
                            </a>
                        </div>
                        <div className="text-xs text-second">متبقى 3 أيام</div>
                    </div>
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 ml-3">
                            <img className="h-10 w-10 rounded-full" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">تصميم هوية بصرية</p>
                            <p className="text-sm text-gray-500 truncate">$200</p>
                            </a>
                        </div>
                        <div className="text-xs text-second">متبقى 3 أيام</div>
                    </div>
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 ml-3">
                            <img className="h-10 w-10 rounded-full" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">تصميم هوية بصرية</p>
                            <p className="text-sm text-gray-500 truncate">$200</p>
                            </a>
                        </div>
                        <div className="text-xs text-second">متبقى 3 أيام</div>
                    </div>
                    <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <div className="flex-shrink-0 ml-3">
                            <img className="h-10 w-10 rounded-full" src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <a href="#" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-sm font-medium text-gray-900">تصميم هوية بصرية</p>
                            <p className="text-sm text-gray-500 truncate">$200</p>
                            </a>
                        </div>
                        <div className="text-xs text-second">متبقى 3 أيام</div>
                    </div>
                </div>

                </div>
            </Layout>
        </>
    )
}


