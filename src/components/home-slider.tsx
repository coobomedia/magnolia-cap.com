"use client"

import { useKeenSlider } from "keen-slider/react"

import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export default function HomeSlider() {
  const [opacities, setOpacities] = useState<number[]>([])
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: 2,
      loop: true,
      defaultAnimation: {
        duration: 2500,
      },
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        setOpacities(new_opacities)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider min-h-screen pt-[--header-height]"
      >
        <div className="keen-slider__slide ">
          <div
            style={{ opacity: opacities[0] }}
            className="from-primary-100/20 relative isolate overflow-hidden bg-gradient-to-b"
          >
            <div className="mx-auto  pb-24 pt-10 lg:container sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
              <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <div className="">
                      <a href="#" className="inline-flex space-x-6">
                        <span className="bg-accent-600/10 text-accent-600 ring-accent-600/10 rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                          What&apos;s new
                        </span>
                        <span className="text-accent-600 inline-flex items-center space-x-2 text-sm font-medium leading-6">
                          <span>Just shipped v0.1.0</span>
                          <ChevronRight
                            className="text-accent-400 h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </div>
                    <h1 className="text-accent-900 mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                      Coobo Template
                    </h1>
                    <p className="text-accent-600 mt-6 text-lg leading-8">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="bg-accent-800 hover:bg-accent-700 focus-visible:outline-accent-800 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Documentation
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/coobomedia/coobo-template"
                        className="text-accent-900 text-sm font-semibold leading-6"
                      >
                        View on GitHub <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                <div
                  className="shadow-accent-600/10 ring-accent-50 absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 md:-mr-20 lg:-mr-36"
                  aria-hidden="true"
                />
                <div className="shadow-lg md:rounded-3xl">
                  <div className="bg-accent-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                    <div
                      className="bg-accent-100 absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                      aria-hidden="true"
                    />
                    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                        <div className="bg-accent-900 w-screen overflow-hidden rounded-tl-xl">
                          <div className="bg-accent-800/40 flex ring-1 ring-white/5">
                            <div className="text-accent-400 -mb-px flex text-sm font-medium leading-6">
                              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                NotificationSetting.jsx
                              </div>
                              <div className="border-accent-600/10 border-r px-4 py-2">
                                App.jsx
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6"></div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </div>
        <div className="keen-slider__slide ">
          <div
            style={{ opacity: opacities[1] }}
            className="from-primary-100/20 relative isolate overflow-hidden bg-gradient-to-b"
          >
            <div className="container  mx-auto pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
              <div className="px-6 lg:px-0 lg:pt-4">
                <div className="mx-auto max-w-2xl">
                  <div className="max-w-lg">
                    <div className="">
                      <a href="#" className="inline-flex space-x-6">
                        <span className="bg-accent-600/10 text-accent-600 ring-accent-600/10 rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset">
                          What&apos;s new
                        </span>
                        <span className="text-accent-600 inline-flex items-center space-x-2 text-sm font-medium leading-6">
                          <span>Just shipped v0.1.0</span>
                          <ChevronRight
                            className="text-accent-400 h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </div>
                    <h1 className="text-accent-900 mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
                      Coobo Template
                    </h1>
                    <p className="text-accent-600 mt-6 text-lg leading-8">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="#"
                        className="bg-accent-800 hover:bg-accent-700 focus-visible:outline-accent-800 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Documentation
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/coobomedia/coobo-template"
                        className="text-accent-900 text-sm font-semibold leading-6"
                      >
                        View on GitHub <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
                <div
                  className="shadow-accent-600/10 ring-accent-50 absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 md:-mr-20 lg:-mr-36"
                  aria-hidden="true"
                />
                <div className="shadow-lg md:rounded-3xl">
                  <div className="bg-accent-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                    <div
                      className="bg-accent-100 absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                      aria-hidden="true"
                    />
                    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                        <div className="bg-accent-900 w-screen overflow-hidden rounded-tl-xl">
                          <div className="bg-accent-800/40 flex ring-1 ring-white/5">
                            <div className="text-accent-400 -mb-px flex text-sm font-medium leading-6">
                              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                NotificationSetting.jsx
                              </div>
                              <div className="border-accent-600/10 border-r px-4 py-2">
                                App.jsx
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6"></div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
          </div>
        </div>
      </div>
    </>
  )
}
