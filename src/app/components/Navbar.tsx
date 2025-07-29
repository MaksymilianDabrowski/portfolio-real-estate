"use client"

import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo/logo.png'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Headroom from "react-headroom"
import { Menu, X } from "lucide-react"

const links = [
  { name: 'Strona Główna', href: '/' },
  { name: 'Oferta', href: '/oferta' },
  { name: 'Powierzchnia do wynajęcia', href: '/powierzchnia-do-wynajecia' },
  { name: 'Galeria zdjęć', href: '/galeria-zdjec' },
]

export default function Navbar() {
  return (
    <Headroom>
      <div className="w-full bg-white rounded-b-3xl bg-opacity-95"> {/* temp bg white - change if pallete will be ready */}
        <nav className="container flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0 sticky">
          <Disclosure>
            {({ open, close }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/"
                    onClick={() => close()}
                  >
                    <span className="flex items-center space-x-2 text-2xl text-[#1f1f21]">
                      <span>
                        <Image
                          priority={true}
                          src={logo}
                          alt="Navbar Logo"
                          className='w-14 lg:w-100 md:w-20'
                        />
                      </span>
                    </span>
                  </Link>
                  {/* Mobile */}
                  <DisclosureButton
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-[#1f1f21] focus:text-[#1f1f21] focus:bg-[#1f1f21]/20">
                    <div
                      className="size-6 fill-current"
                    >
                      {open ? <X /> : <Menu />} {/* testing */}
                    </div>
                  </DisclosureButton>

                  <DisclosurePanel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {links.map((link, index) => (
                        <Link key={index} href={link.href} className="w-full font-[550] px-4 py-2 ml-4 text-gray-500 rounded-md hover:text-[#1f1f21] focus:text-[#1f1f21] focus:bg-[#1f1f21]/20"
                          onClick={() => close()}>
                          {link.name}
                        </Link>
                      ))}
                      <Link href="/kontakt" className="w-full px-6 py-2 mt-3 text-center text-white bg-[#1f1f21] rounded-md lg:ml-5"
                        onClick={() => close()}>
                        Kontakt
                      </Link>
                    </>
                  </DisclosurePanel>
                </div>
              </>
            )}
          </Disclosure>

          {/* Desktop */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {links.map((link, index) => (
                <li className="m-4" key={index}>
                  <Link href={link.href} className="inline-block px-4 py-2 text-xl text-gray-800 no-underline rounded-xl border-2 border-transparent transition-colors hover:border-[#1E1E1F] focus:bg-[#1E1E1F] focus:text-white active:scale-95 ">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex">
            <Link href="/kontakt" className="px-6 py-2 text-lg text-white bg-[#1E1E1F] rounded-xl hover:bg-white hover:text-[#1E1E1F] border-2 hover:border-[#1E1E1F] active:scale-95">
              Kontakt
            </Link>
          </div>
        </nav>
      </div>
    </Headroom>
  )
}