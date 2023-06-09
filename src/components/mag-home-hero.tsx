import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden h-[72vh]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:w-2/3 lg:shrink-0 lg:pt-6">
          <h1 className="mt-10 text-4xl text-primary-100 sm:text-6xl uppercase">
            Streamlined Private Investment Firm
          </h1>
          <p className="mt-6 leading-8 text-primary-300">
            Our underlying purpose is to provide high-quality private investment
            opportunities to investment managers, family offices and
            individuals. Focused on real assets that provide uncorrelated
            returns to the broad market. MPC takes a long term capital approach
            pursuing actively managed generational assets.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:w-1/3 lg:flex-none">
          <div className="max-w-3xl flex-none sm:max-w-5xl">
            <div className="-m-p-2 lg:-m-4 lg:p-4">
              <Image
                src="/images/magnolia-tree-graphic3.png"
                alt="Magnolia Tree Graphic"
                width={2432}
                height={1442}
                className="w-[76rem] lg:w-[50rem] lg:absolute lg:top-[5%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}