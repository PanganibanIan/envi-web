import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    
    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)
    
    async function loginHandler() {
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }
        if (isLoggingIn){
            try{
                await login(email, password)
            } catch (err){
                setError('Incorrect email or password')
            }
            return
        }
        await signup(email, password)
    }

    return(
        <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
            <h1 className='font-semibold text-2xl sm:text-4xl select-none uppercase'>
            {isLoggingIn ? 'Login': 'Register'}
            </h1>
            {error && <div className='w-full max-w-[40ch] border-red-400 border border-solid text-center text-red-400 py-2'>{error}</div>}
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email/Username' className='outline-none text-slate-900 p-2 w-full max-w-[40ch] border-b-2 border-white focus:border-emerald-500 duration-300'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='outline-none text-slate-900 p-2 w-full max-w-[40ch] border-b-2 border-white focus:border-emerald-500 duration-300'/>
            <button onClick={loginHandler} className='w-full max-w-[30ch] border border-textColor border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-emerald-50 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
                <h2 className='relative z-20'>
                {isLoggingIn ? 'Login': 'Register'}
                </h2>
            </button>
            <h2 className='duration-300 hover:scale-110 cusor-pointer' onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
        </div>
    )
}