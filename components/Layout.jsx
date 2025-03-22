import React from 'react'
import Header from './common/Header'
// import Footer from './common/Footer'
import '../styles/globals.css';


export default function Layout({children}) {
  return (
    <div className='max-w-[800px] mx-auto mt-[30px]'>
        <Header />
            <main className='my-8'>
                {children}
            </main>
        {/* <Footer /> */}
    </div>
  )
}
