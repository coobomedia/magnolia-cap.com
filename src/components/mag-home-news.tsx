export default function HomeNews() {
  return (
    <section className="mx-auto max-w-7xl bg-secondary relative min-h-[180px] mt-[-115px]">
      <div className="w-full p-8">
        <h4 className="text-accent">Recent Transactions:</h4>
        <p className="text-white">$50 million Oil & Gas Transaction</p>
      </div>

      <svg
        className="absolute top-0 right-[-115px] hidden xl:block"
        width="115"
        height="115"
      >
        <rect width="115" height="115" fill="#f0583c" />
      </svg>
    </section>
  )
}
