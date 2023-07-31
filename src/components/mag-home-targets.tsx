import Image from "next/image"

import commrealestate from "../../public/images/commercial-real-estate.jpg"
import oilgasrig from "../../public/images/oil-gas-rig.jpg"

const services = [
  {
    id: 1,
    name: "Oil & Gas",
    subname: "Minerals and Royalties",
    imageURL: oilgasrig,
  },
  {
    id: 2,
    name: "Real Estate",
    subname: "Value-add Commercial and Residential",
    imageURL: commrealestate,
  },
  // {
  //   id: 3,
  //   name: "Private Debt",
  //   subname: "Lower/Middle-Market",
  //   imageURL:
  //     "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  // },
]

export default function TargetAssetClasses() {
  return (
    <section
      id="targeted-assets"
      className="mx-auto w-full max-w-7xl border-x bg-white px-10 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2>Targeted Asset Classes</h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-14 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-md bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={service.imageURL}
                alt=""
                width={600}
                height={800}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-md ring-1 ring-inset ring-gray-900/10" />

              <p className=" leading-6 text-white normal-case">
                <span className="absolute inset-0" />
                {service.subname}
              </p>

              <h3 className="!mt-0 leading-6 text-white uppercase">
                <span className="absolute inset-0" />
                {service.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
