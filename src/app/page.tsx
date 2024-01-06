"use client"
import { AlertDialogDemo } from '@/components/AlertDialog'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-white bg-center text-slate-800 h-screen'>
       <h1 className='text-center text-lg pt-4'>Learning Shadcn-UI</h1> 
       <AlertDialogDemo></AlertDialogDemo>
       <h1 className='text-center text-lg pt-4'>Learning Shadcn-UI</h1> 
    </div>
      )
}
