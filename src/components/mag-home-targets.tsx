import Link from "next/link"

const services = [
  {
    id: 1,
    name: "Oil & Gas - Minerals and Royalties",
  },
  {
    id: 2,
    name: "Real Estate - Value-add Commercial and Residential",
  },
  {
    id: 3,
    name: "Private Debt - Lower/Middle-Market",
  },
]

export default function TargetAssetClasses() {
  return (
    <section className="relative  overflow-hidden bg-primary min-h-[500px] flex justify-center">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 flex flex-col md:flex-row lg:flex-wrap justify-center border-x">
        <div className="w-full lg:w-1/2 flex items-center ">
          <h2>Targeted asset classes</h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:justify-center">
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {services.map((service) => (
                <li key={service.id} className="py-4">
                  {service.name}
                </li>
              ))}
            </ul>
            <Link href="#team" scroll={false}>
              <button
                type="button"
                className=" bg-accent px-6 py-2.5 flex font-normal text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
