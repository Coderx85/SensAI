import React from 'react'
import { Input } from './ui/input'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { UserButton } from '@clerk/nextjs'
import { Book, Headphones, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = await auth();
  return (
      <div className='flex w-full container mx-auto my-0 gap-10 items-center bg-black/50 py-4 border-b-4 border-primary rounded-xl'>  
        <div className='flex justify-start'>
          <Link href='/'>
            <Image src="/logo.png" alt="logo" width={200} height={50} />
          </Link>
        </div>

        <div className='flex  gap-8 text-white justify-center'>
            <Link href={'/dashboard'}>Dashboard</Link>
            <Link href={'/onboarding'}>Onboarding</Link>
            <Link href={'/interview'}>Interview</Link>
            <Link href={'/cover-letter'}>Cover Letter</Link>
            <Link href={'/reports'}>Reports</Link>
        </div>

        <div className='flex float-right gap-8 mx-auto p-4 text-2xl text-white'>
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
            <Tooltip delayDuration={800}>
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
            <Tooltip delayDuration={800}>
              <TooltipTrigger>
                <Book />
              </TooltipTrigger>
              <TooltipContent>
                <p>Guide</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {userId ?
            <UserButton />
          : (
            <Link href='/sign-in'>
              Sign In
            </Link>
          )}
        </div>  
      </div>
  )
}

export default Navbar