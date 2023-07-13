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
    <section className="relative  flex min-h-[500px] justify-center overflow-hidden bg-primary">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-10 md:flex-row lg:flex-wrap">
        <div className="flex w-full items-center lg:w-1/2 ">
          <h2>Targeted asset classes</h2>
        </div>
        <div className="flex w-full flex-col items-center lg:w-1/2 lg:justify-center">
          <div>
            <ul role="list" className="divide-y divide-gray-200">
              {services.map((service) => (
                <li key={service.id} className="py-4">
                  {service.name}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className=" flex bg-accent px-6 py-2.5 font-normal text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span>Learn More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-4 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
