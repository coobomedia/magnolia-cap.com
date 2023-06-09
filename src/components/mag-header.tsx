// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Dialog } from "@headlessui/react"
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
// import { logo } from "public/images/magnolia-cap-website-logo.svg"

// import { Icons } from "@/components/icons"

// const navigation = [
//   { name: "Home", href: "#" },
//   { name: "Targeted Assets", href: "#" },
//   { name: "Team", href: "#" },
//   { name: "Contact Us", href: "#" },
// ]

// export default function MagHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white">
//       <nav
//         className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
//         aria-label="Global"
//       >
//         <Link href="#" className="-m-1.5 p-1.5">
//           <span className="sr-only">Your Company</span>
//           <Icons.logo className="h-20 w-auto fill-secondary" />
//         </Link>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:gap-x-12">
//           {navigation.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className=" font-light leading-6 text-[#A1A1A1]  hover:text-secondary"
//             >
//               {item.name}
//             </a>
//           ))}
//           <button
//             type="button"
//             className=" bg-[#F0583C] px-10 py-2.5  font-normal text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
//           >
//             Investment Access
//           </button>
//           {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a> */}
//         </div>
//       </nav>

//       <Dialog
//         as="div"
//         className="lg:hidden"
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//       >
//         <div className="fixed inset-0 z-10" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 className="h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 alt=""
//               />
//             </a>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   )
// }
"use client"

import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import {
  ArrowUpRightIcon,
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Targeted Assets", href: "#" },
  { name: "Team", href: "#" },
  { name: "Contact Us", href: "#" },
]

export default function MagHeader() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl border-x px-4  sm:px-6 lg:px-8">
            <div className="flex justify-between py-6">
              <div className="flex w-full justify-between">
                <div className="flex shrink-0 items-center">
                  <Icons.logo className="block h-12 w-auto fill-secondary lg:hidden" />
                  <Icons.logo className="hidden h-20 w-auto fill-secondary lg:block" />
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
                      className=" inline-flex items-center gap-x-1.5 bg-[#F0583C] px-8 py-4 font-normal  leading-none text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                      Investment Access
                      <ArrowUpRightIcon
                        className="-mr-0.5 h-5 w-5 stroke-2"
                        aria-hidden="true"
                      />
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

          <Disclosure.Panel className="absolute z-20 w-full bg-primary  shadow sm:hidden">
            <ul className="divide-y">
              {navigation.map((item) => (
                <li>
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    href={item.href}
                    className="block py-6 text-center text-base font-medium text-gray-500"
                  >
                    {item.name}
                  </Disclosure.Button>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
