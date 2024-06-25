import React from 'react'
import OptionPopup from '../partials/posts/OptionPopup'
import OptionHover from '../partials/posts/OptionHover'

type Props = {
    posts: Array<string>
}

export default function Posts({posts}: Props) {
  return (
    <div className="columns-2 ss:columns-3 md:columns-4 lg:columns-5">
        {
            posts.map((value, index) => (
                <div key={index} className='mb-2 inline-block rounded-2xl sticky group'>
                    <img src={ value } alt="" className='w-full h-full rounded-2xl' />
                    <OptionPopup />
                    <OptionHover />
                </div>
            ))
        }
    </div>
  )
}