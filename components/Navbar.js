
import { BellAlertIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Profile from "../components/Profile"
import { useAuth } from "../lib/useAuth"


const Navbar = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
            <div className="py-3 hidden bg-header md:block ">
                <div className="mx-auto max-w-6xl px-6">
                <div className="flex justify-between items-center">
                    <div className="flex flex-row space-x-3 justify-center">

                    {user ? (
                        <>
                            <Profile />
                            <Link
                                href="/profile"
                                className="ml-4 text-sm text-gray-700 underline">
                                <div>
                                    <div className="group flex items-center ">
                                    <img className="shrink-0 h-7 w-7 rounded-full" src="https://images.unsplash.com/photo-1669489277853-f80067be8d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    <div className="mr-3">
                                        <p className="text-sm group-hover:text-default text-md font-bold">{user.name}</p>
                                    </div>
                                    </div>
                                </div>
                            </Link>
                            <button>
                                <BellAlertIcon
                                className="transition duration-300 h-6 w-6 rounded-lg bg-second bg-opacity-10 text-second hover:text-yellow-600"
                                aria-hidden="true"
                                />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="ml-4 text-sm text-gray-700">
                                تسجيل الدخول
                            </Link>

                            <Link
                                href="/register"
                                className=" text-sm text-gray-700">
                                حساب جديد
                            </Link>
                        </>
                    )}

                    </div>
                    <Link href="/" className="font-extrabold h-7">
                        <img
                            className="h-7"
                            src="https://img.logoipsum.com/221.svg"
                            alt="asd"
                        />
                    </Link>
                </div>
                </div>
            </div>
    )
    
}


export default Navbar