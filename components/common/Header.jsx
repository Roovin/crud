import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className='flex justify-between items-center px-8 py-3 bg-slate-800'>
        <Link href='/' className='text-white font-bold'>Crud Operation</Link>
        <Link href="/addTopic" className='p-2 bg-white'>Add Topic</Link>
    </nav>
  )
}
