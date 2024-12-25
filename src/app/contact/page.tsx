import Link from 'next/link'
import React from 'react'
import { Github, Linkedin } from 'lucide-react';


const Contact = () => {
  return (
      <> 
      <h2 className='text-2xl font-bold underline text-center bg-slate-900 py-5 text-white mt-14'>Contact</h2>
      <div className=' py-10 space-y-5 text-center text-white bg-slate-900 flex flex-col items-center justify-center'>

        <Link href="https://www.linkedin.com/in/iqra-khan2998" target='_blank' className='flex gap-x-3'>IQRA KHAN <Linkedin /></Link>
        <Link href="https://github.com/IQRAKHAN2998" target='_blank' className='flex gap-x-3'>IQRA KHAN2998  <Github /></Link>
        <form className='flex flex-col space-y-5 py-8 px-8'>
          <input type="text" placeholder='Name' className='py-3 px-7'/>
          <input type="text" placeholder='Email' className='py-3 px-7'/>
          <textarea name="text" placeholder='Message' id="text" className='py-3 px-7'></textarea>
        </form>
      </div>
      </>
     


  )
}
export default Contact