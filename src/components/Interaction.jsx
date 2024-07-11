import React from 'react'

export default function Interaction() {
  return (
    <nav className='w-full flex items-center justify-start gap-4 border-t-2 border-slate-900 mt-4'>
        <article className='flex items-center justify-start gap-2 p-2 relative min-w-20'>
            <button><i className="text-4xl ri-heart-line"></i></button>
            <span className='absolute top-1 right-1 -z-50 aspect-square bg-red-300 rounded-full w-6 flex items-center justify-center'>13</span>
        </article>
    </nav>
  )
}
