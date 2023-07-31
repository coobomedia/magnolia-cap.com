"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { Icons } from "@/components/icons"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Targeted Assets", href: "/#targeted-assets" },
  { name: "Team", href: "/#team" },
  { name: "Contact Us", href: "/contact" },
]

export default function MagHeader() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`${isSticky ? "sticky top-0" : ""} z-10 bg-primary`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl border-x px-4  sm:px-6 lg:px-8">
            <div className="flex justify-between py-6">
              <div className="flex w-full justify-between">
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <Icons.logo className="block h-12 w-auto fill-secondary lg:hidden" />
                  </Link>
                  <Link href="/">
                    <Icons.logo className="hidden h-20 w-auto fill-secondary lg:block" />
                  </Link>
                </div>
                <div className="hidden sm:flex  sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="inline-flex items-center   font-light  leading-6 text-[#A1A1A1]  hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="m-auto">
                    <button
                      type="button"
                      className="bg-[#F0583C] px-8 py-4 font-normal  leading-none text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                      <a
                        href="https://app.junipersquare.com/login?path=%2Fi%2Fmagnolia-cap%2Fhome"
                        target="_blank"
                        className=" inline-flex items-center gap-x-1.5 "
                      >
                        Investment Access
                        <ArrowUpRightIcon
                          className="-mr-0.5 h-5 w-5 stroke-2"
                          aria-hidden="true"
                        />
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            className="absolute z-20 w-full bg-primary  shadow sm:hidden"
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static>
              <ul className="divide-y">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Disclosure.Button
                      as={Link}
                      href={item.href}
                      className="block py-6 text-center text-base font-light text-gray-500 hover:text-secondary"
                    >
                      {item.name}
                    </Disclosure.Button>
                  </li>
                ))}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
