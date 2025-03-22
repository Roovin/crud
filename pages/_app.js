import React from 'react'
// import "@/styles/globals.css";
// import tailwindConfig from '@/tailwind.config'
import '../styles/globals.css'
import Layout from '@/components/Layout'

export default function App({Component, pageprops}) {
  return (
    <div className='max-w-[800px] mx-auto'>
        <Layout>
            <Component {...pageprops} />
        </Layout>
    </div>
  )
}
