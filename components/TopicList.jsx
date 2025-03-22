import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi';

export default function TopicList() {
  return (
    <>
        <div className="wrapper">
            <div className="item flex justify-between item-center p-4 my-3 border border-slate-300 gap-5 items-start">
                <div className="wrap">
                    <h2 className='text-2xl font-bold'>Topic Title</h2>
                    <p>Topic description</p>
                </div>
                <div className="btnWrap flex gap-2">
                    <RemoveBtn />
                    <Link href={'/editTopic/123'}>
                        <HiPencilAlt size={24}/>
                    </Link>
                </div>
            </div>
            {/* <div className="item">
                <h2>Topic Title</h2>
                <p>Topic description</p>
            </div>
            <div className="item">
                <h2>Topic Title</h2>
                <p>Topic description</p>
            </div>
            <div className="item">
                <h2>Topic Title</h2>
                <p>Topic description</p>
            </div> */}
        </div>
    </>
  )
}
