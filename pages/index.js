import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useAuth } from '../context/AuthContext'
import UserDashboard from '@/components/UserDashboard'

export default function Home() {
  const {currentUser} = useAuth()
  
  return (
  <>
    <Head>
      <title>ENVI</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
   {!currentUser && <Login/>}
   {currentUser && <UserDashboard/>}
   
    
  </>
  )

}
