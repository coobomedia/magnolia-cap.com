import Image from "next/image"
import Link from "next/link"

export default function TeamMembers() {
  return (
    <section
      id="team"
      className="relative  overflow-hidden bg-primary flex justify-center"
    >
      <div className="w-full mx-auto max-w-7xl py-20 px-10 border-x">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3 text-center bg-white p-10 border rounded-md">
            <h3>Andrew Kollaer</h3>
            <h6 className="!mt-0">Co-founder, Managing Partner</h6>
            <p>
              Andrew has 15 years of investment experience in oil & gas,
              infrastructure and real estate. Andrew has managed multiple
              private investment platforms on behalf of both institutional and
              retail investors. Andrew established his investment experience
              with roles at Intrepid Financial Partners, OMERS Strategic
              Investments and Guggenheim Partners. Andrew earned a BBA in
              Finance from Texas A&M University and an MBA from the McCombs
              School of Business, University of Texas at Austin.
            </p>
            <p>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-1/3 text-center bg-white p-10 border rounded-md">
            <h3>Travis Frazier</h3>
            <h6 className="!mt-0">Co-founder, Managing Partner</h6>
            <p>
              Travis has over 15 years of traditional and renewable energy
              investing experience. With ten years at Simmons and Company
              International and five years at Heikkinen Energy Advisors (now
              Pickering Energy Partners), Travis advised some of the largest
              institutional investors in the US and Canada. Most recently,
              Travis consulted one of the largest oil and gas minerals companies
              in leveraging its asset base in the evolving energy climate.
              Travis earned his BA from the University of Texas at Austin.
            </p>
            <p>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </p>
          </div>
          <div className="w-full lg:w-1/3 text-center bg-white p-10 border rounded-md">
            <h3>Taylor Tipton</h3>
            <h6 className="!mt-0">Co-founder, Managing Partner</h6>
            <p>
              Taylor has over 25 years of experience in the oil and gas
              industry. Prior to joining Magnolia Private Capital, Mr. Tipton
              spent eight years as President of ARM Energy where he managed
              ARM’s trading operation and midstream investments, including the
              development of two large scale greenfield midstream assets.
              Previously, Mr. Tipton worked in a variety of roles for Dynegy,
              ConocoPhillips, Eagle Energy, and EDF Trading where he was SVP
              Head of North American Trading. Mr. Tipton earned his BA from the
              University of Texas at Austin.
            </p>
            <p>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
