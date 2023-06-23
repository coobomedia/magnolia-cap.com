import Image from "next/image"
import Link from "next/link"

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden">
      <div className="w-full mx-auto max-w-7xl py-10 border-x">
        <div className="p-6 mt-10 mb-8">
          <div className="mx-auto max-w-2xl text-center ">
            <h6 className="mb-[-25px] uppercase text-[#848484] tracking-widest">
              Our Team
            </h6>
            <h3>Over 55 Years Combined Experience</h3>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/magnolia-flower.jpg"
              alt="Magnolia Tree Graphic"
              width={2432}
              height={1442}
              className="w-full object-cover shadow-lg mb-8"
            />
            <div className="flex justify-center">
              <Link href="#team-members" scroll={false}>
                <button
                  type="button"
                  className="inline-flex bg-accent px-6 py-2.5 font-normal text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  <span>Meet Our Team</span>
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
          <div className="w-full lg:w-1/2 flex flex-col px-6 lg:py-0 py-6">
            <h5>Expand Your Team</h5>
            <p>
              For RIAs in need of bandwidth to establish or manage an existing
              private investment platform, our team works alongside wealth
              managers to assist in the following roles: deal sourcing,
              evaluating, investment management, and reporting. Our deal flow
              and investment capabilities are built to replace any need for a
              full-time internal team, at a fraction of the cost.
            </p>
            <h5>Duties Include:</h5>
            <ul className="mt-0">
              <li>
                Work in partnership with wealth managers to develop objectives
                and strategies to offer private investments to their clients.
              </li>
              <li>
                Source, evaluate and propose investments as part of a fund
                formed for the private wealth manager or individual clients
              </li>
              <li>
                Understand fund structure or vehicle that is most appropriate
              </li>
              <li>Experience to structure investments and terms thereof</li>
              <li>
                Prepare diligence and investment memorandums for fund- and
                investment-level marketing material
              </li>
              <li>
                Manage investments for the private wealth manager within the
                fund or for stand-alone investments with individual clients
              </li>
              <li>
                Provide up-to-date information, quarterly reporting of
                investment progress and valuation estimates
              </li>
              <li>
                Assist in managing capital calls, distributions and financial
                statements with fund administrators
              </li>
              <li>Manage annual audit and tax documentation</li>
              <li>
                Provide global support for all private investment needs to
                effectively add breadth to the private wealth manager’s
                offerings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
