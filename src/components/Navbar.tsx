import React from 'react'
import { Input } from './ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { UserButton } from '@clerk/nextjs'
import { Book, Headphones, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex container w-full mx-auto bg-black/70 p-2 pb-6 border-b-4 border-gray-800'>  
      <div className='flex justify-start'>
        <Link href='/'>
          <Image src="/logo.png" alt="logo" width={200} height={50} />
        </Link>
      </div>

      <div>

      </div>

      <div className='flex float-end gap-8 mx-auto p-4 text-2xl text-white'>
        {/* <span className="flex items-center gap-2 font-bold">
          <p className="text-sm font-light text-gray-300">Credits</p>
          <span>0</span>
        </span> */}
        <span className="flex items-center rounded-md bg-muted px-4">
          <Search />  
          <Input
            placeholder="Quick Search"
            className="border-none bg-transparent"
          />
        </span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Link href='/contact-us'>
                <Headphones />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Support</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger>
              <Book />
            </TooltipTrigger>
            <TooltipContent>
              <p>Guide</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <UserButton />
      </div>  
    </div>
  )
}

export default Navbar