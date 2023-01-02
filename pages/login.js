import Head from 'next/head'
import Link from 'next/link'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Errors from '../components/Errors'
import {useEffect, useState} from 'react'
import {useAuth} from '../lib/useAuth'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }


    return (
        <>
            <Head>
                <title>ergodnc — Login</title>
            </Head>

            <div className={"w-1/2 mx-auto bg-white p-5 rounded-lg"}>
                <Errors className="mb-5" errors={errors} />

                <form onSubmit={submitForm} autoComplete="off">
                    <div>
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                checked={shouldRemember}
                                onChange={event => setShouldRemember(!remember)}
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />

                            <span className="ml-2 text-gray-600">
                            Remember me
                        </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {/* <Link href="/forgot-password">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Forgot your password?
                            </a>
                        </Link> */}

                        <Button className="ml-3">Login</Button>
                    </div>
                </form>
            </div>
        </>
    )
}