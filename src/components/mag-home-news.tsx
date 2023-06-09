export default function HomeNews() {
  return (
    <section className="mx-auto max-w-7xl bg-secondary columns-2 relative min-h-[180px]">
      <div className="w-full p-6">
        <h4 className="text-accent">Recent Transactions:</h4>
        <p className="text-white">$50 million Oil & Gas Transaction</p>
      </div>
      <div className="w-full p-6"></div>
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
