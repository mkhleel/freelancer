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
                    <a href="#" className="my-3 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-32 md:h-32 md:w-48 md:rounded-none md:rounded-r-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">تصميم هوية بصرية</h5>
                        </div>
                    </a>
                    <a href="#" className="my-3 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-32 md:h-32 md:w-48 md:rounded-none md:rounded-r-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">تصميم هوية بصرية</h5>
                        </div>
                    </a>
                    <a href="#" className="my-3 flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-32 md:h-32 md:w-48 md:rounded-none md:rounded-r-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">تصميم هوية بصرية</h5>
                        </div>
                    </a>
                </div>
            </Layout>
        </>
    )
}


