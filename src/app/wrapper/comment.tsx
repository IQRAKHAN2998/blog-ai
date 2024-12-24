"use client"
import React, { useState } from 'react'



const Comment = () => {


    const [comment, setComment] = useState(" ");
    const [comments, setComments] = useState<string[]>([]);

    const submitcommit = (notrefresh: React.FormEvent) => {
        notrefresh.preventDefault()
        if (comment.trim()) {
            setComments([comment, ...comments])
            setComment(" ")

        }
    }

    return (
        <div>
            <span className='flex flex-col'>
                <form className='py-7 space-x-8' onSubmit={submitcommit}>
                    <input type="text" placeholder='Comments here' value={comment}  onChange={(notrefresh) => setComment(notrefresh.target.value)}
                     className='py-6 px-4' />
                    <button className='bg-black text-white font-semibold rounded-md py-3 px-6'>Submit</button>
                </form>
                <ul>{
                    comments.map((herecomment, index) => {
                        return (
                            <li key={index} className='font-semibold'>
                                {herecomment}
                            </li>
                        )
                    })
                }</ul>
            </span>
        </div>
    )
}
export default Comment