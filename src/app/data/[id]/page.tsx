import { Data } from '../data'
import Image from 'next/image'
import Wrapper from '@/app/wrapper/page'
import Comment from '@/app/wrapper/comment'


interface Iparams{
    params :{
        id :string
    }
}

const IdPage =async ({params} : Iparams) => {
  const {id} =await params
  const res =await Data.find((item)=> item.id == id)
  
    return ( 
      <div className='bg-slate-400'>
        <Wrapper>
          <div className='space-y-4'>
    <h2 className='text-3xl underline font-bold'>{res?.heading}</h2>
    <Image src={res?.images as string} alt="images" width={500} height={500}></Image>
    <h2 className='text-2xl font-bold'>Created By : {res?.createdby}</h2>
    
    <h2 className='font-semibold'>{res?.description}</h2>
    <h2 className='text-2xl font-bold'>Use : </h2>
    <h3 className='font-semibold'>{res?.usecase}</h3>
    <h2 className='font-semibold'>Release Date : {res?.date}</h2>
    

    <Comment/>
   
    </div>
     
      </Wrapper>
      </div>
      
  
  )
}

export default IdPage