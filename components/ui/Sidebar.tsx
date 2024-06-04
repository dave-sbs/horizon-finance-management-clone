'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const activePathName = usePathname(); //This is a webhook. So we have to use client side rendering

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
          <Image src="icons/logo.svg" width={34} height={34} alt="Horizon" className='size-[24px] max-xl:size-14'/>
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          
          const isActive = activePathName === item.route || activePathName.startsWith(`${item.route}/`)

          return (
            <Link 
            href={item.route} 
            key={item.label}
            // The cn essentially helps us modify the css behaviours based on the condition. 
            // In this case, if the link is active, we want to apply the bg-bank-gradient class
            className={cn('sidebar-link', {'bg-bank-gradient' : isActive})} 
            >
              <div className='relative size-6'>
                <Image 
                  src={item.imgURL} 
                  alt={item.label} 
                  fill 
                  className={cn({'brightness-[3] invert-0' : isActive})}
                  />
              </div>
              <p className={cn('sidebar-label', {'!text-white' : isActive})}>
                {item.label}
              </p>
            </Link>
          )
          })}
      
          USER
      </nav>

      FOOTER
    </section>
  )
}

export default Sidebar