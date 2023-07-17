import MailToLink from "./mailtolink"

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl border-x py-10">
        <div className="mb-8 mt-10 p-6">
          <div className="mx-auto max-w-2xl text-center ">
            <h6 className="mb-[-25px] font-display uppercase tracking-widest text-magGray">
              Our Team
            </h6>
            <h2>Over 55 Years Combined Experience</h2>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-10 pb-10">
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-full rounded-md border bg-white p-10 text-center lg:w-1/3">
              <h3>Andrew Kollaer</h3>
              <h6 className="!mt-0  font-display text-magGray">
                Co-founder, Managing Partner
              </h6>
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
                <MailToLink
                  email="akollaer@magnolia-cap.com"
                  subject="Magnolia Capital Inquiry"
                  body="Hello Andrew,"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon-zoom m-auto h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </MailToLink>
              </p>
            </div>
            <div className="w-full rounded-md border bg-white p-10 text-center lg:w-1/3">
              <h3>Travis Frazier</h3>
              <h6 className="!mt-0 font-display text-magGray">
                Co-founder, Managing Partner
              </h6>
              <p>
                Travis has over 15 years of traditional and renewable energy
                investing experience. With ten years at Simmons and Company
                International and five years at Heikkinen Energy Advisors (now
                Pickering Energy Partners), Travis advised some of the largest
                institutional investors in the US and Canada. Most recently,
                Travis consulted one of the largest oil and gas minerals
                companies in leveraging its asset base in the evolving energy
                climate. Travis earned his BA from the University of Texas at
                Austin.
              </p>
              <p>
                <MailToLink
                  email="tfrazier@magnolia-cap.com"
                  subject="Magnolia Capital Inquiry"
                  body="Hello Travis,"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon-zoom m-auto h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </MailToLink>
              </p>
            </div>
            <div className="w-full rounded-md border bg-white p-10 text-center lg:w-1/3">
              <h3>Taylor Tipton</h3>
              <h6 className="!mt-0 font-display text-magGray">
                Co-founder, Managing Partner
              </h6>
              <p>
                Taylor has over 25 years of experience in the oil and gas
                industry. Prior to joining Magnolia Private Capital, Mr. Tipton
                spent eight years as President of ARM Energy where he managed
                ARM’s trading operation and midstream investments, including the
                development of two large scale greenfield midstream assets.
                Previously, Mr. Tipton worked in a variety of roles for Dynegy,
                ConocoPhillips, Eagle Energy, and EDF Trading where he was SVP
                Head of North American Trading. Mr. Tipton earned his BA from
                the University of Texas at Austin.
              </p>
              <p>
                <MailToLink
                  email="ttipton@magnolia-cap.com"
                  subject="Magnolia Capital Inquiry"
                  body="Hello Taylor,"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="icon-zoom m-auto h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </MailToLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
