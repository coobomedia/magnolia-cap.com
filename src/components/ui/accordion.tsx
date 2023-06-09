"use client"

import { Disclosure, Transition } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface Faq {
  question: string
  answer: string
}

interface Props {
  className?: string
  title: string
  faqs: Faq[]
}

export default function Accordion({ className, faqs, title }: Props) {
  return (
    <div className={cn("divide-accent-900/10 divide-y ", className)}>
      <h2 className="text-accent-900 text-2xl font-bold leading-10 tracking-tight">
        {title}
      </h2>
      <dl className="divide-accent-900/10 mt-10 space-y-6 divide-y">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="text-accent-900 flex w-full items-start justify-between text-left">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.dd
                      className="overflow-hidden"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <Disclosure.Panel static className="mt-2 pr-12">
                        <p className="text-accent-600 text-base leading-7">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  )
}
