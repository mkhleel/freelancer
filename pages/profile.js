import Head from "next/head"
import Layout from "../components/layout"
import { StarIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { Alert, Carousel } from "flowbite-react";


export default function Profile() {
    return (
        <>
            <Layout hero={false}>
                <div className="mx-auto max-w-2xl my-4 mt-28 px-3">
                    <div className="text-center mb-3 flex flex-col items-center">
                        <img
                            className="inline-block h-20 w-20 rounded-md"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <a href="#">تغيير الصورة</a>
                    </div>

                    <div className="my-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            إسم الحساب
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            البريد الإكترونى
                        </label>
                        <div className="mt-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            رقم الجوال
                        </label>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="123123123"
                            />
                        </div>
                    </div>


                </div>
            </Layout>
        </>
    )
}


