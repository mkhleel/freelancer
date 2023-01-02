import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import Link from "next/link";
import { useRouter } from "next/router";


export default function Breadcrumb() {

    const router = useRouter()

    const handleBack = () => {
        router.push('/')
    }
    
    const pages = [
        { name: 'Item', href: '/', current: false },
    ]
    
  return (
    <div className="mx-auto max-w-4xl mt-5 hidden md:block">
        <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center">
            <li>
            <div>
                <Link href="/" onClick={handleBack} className="text-gray-400 hover:text-gray-500">
                <ChevronRightIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Back</span>
                </Link>
            </div>
            </li>
            <li className="px-3">
            <div>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Home</span>
                </Link>
            </div>
            </li>
            {pages.map((page) => (
            <li key={page.name}>
                <div className="flex items-center">
                <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link
                    href={page.href}
                    className="mx-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}
                >
                    {page.name}
                </Link>
                </div>
            </li>
            ))}
        </ol>
        </nav>
    </div>

    )
}


