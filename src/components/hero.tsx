import Image from "next/image"

import jwrHero from "../../public/images/jwr-hero.jpeg"

function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto min-h-screen max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex items-center px-6 lg:col-span-7 lg:px-0  xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden  sm:flex ">
              <div className="text-accent-500 ring-accent-900/10 hover:ring-accent-900/20 relative rounded-full px-3 py-1 text-sm leading-6 ring-1">
                Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                <a
                  href="#"
                  className="text-primary-800 whitespace-nowrap font-semibold"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="text-accent-900 mt-24  text-4xl tracking-tight sm:mt-10 sm:text-6xl">
              Brazos Valley’s Premiere Men’s Clothier
            </h1>
            <p className="text-accent-600 mt-6 text-lg leading-8">
              Elevate your style game with our curated selection of premium
              menswear.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="bg-primary-950 hover:bg-primary-800 focus-visible:outline-primary-800 rounded-md px-3.5 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Explore Our Store
              </a>
              <a
                href="#"
                className="text-accent-900 font-display text-xs font-semibold uppercase leading-6 tracking-wider"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="bg-primary-950/50 absolute inset-0 z-10"></div>
          <Image
            className="bg-accent-50 aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={jwrHero}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
