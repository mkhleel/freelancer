
import { MagnifyingGlassIcon, ComputerDesktopIcon, CubeIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import axios from '../lib/axios'


export default function Hero({ categories }) {

    return (
        <div className="mx-auto max-w-6xl bg-body pb-4 md:px-6 md:mt-5 shadow-lg md:shadow-none">
        <img className="object-cover h-28 sm:h-38 w-screen md:rounded-2xl" src="https://images.unsplash.com/photo-1664648576579-3768db2102fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hero Image" />
        
        <div className="relative shadow-sm mx-8 -mt-5 md:-mt-6 md:w-1/2 md:mx-auto">
        <input
            type="text"
            name="search"
            id="search"
            className="block w-full text-sm md:h-12 pr-10 shadow-lg border-none rounded-full"
            placeholder="ما الخدمة التى ستحتاجها"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        </div>
        
        {/* Sections Icons */}
        <ul role="list" className="flex md:justify-center snap-x md:flex-wrap overflow-auto mx-6 md:mx-12 md:my-3">
        {categories.map((category, index) => (
            <li key={index} className="snap-start px-6 pt-3">
                <Link href="#" className="space-y-2">  
                {category.icon ? (
                    <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${category.icon}`}
                        alt=""
                        width={24}
                        height={24}
                        className="mx-auto"
                    />
                ) : (
                <CubeIcon className="mx-auto h-7 text-gray-500" />
                )}
                <div className="text-xs text-center font-medium lg:text-sm">
                    <h3 className=" text-gray-500 truncate ">{category.title}</h3>
                </div>
                </Link>
            </li>
        ))}
        </ul>

    </div>
)}

