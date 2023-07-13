export default function HomeNews() {
  return (
    <section className="relative mx-auto mt-[-115px] min-h-[180px] max-w-7xl bg-secondary">
      <div className="w-full p-8">
        <h4 className="text-accent">Recent Transactions:</h4>
        <p className="text-white">$50 million Oil & Gas Transaction</p>
      </div>

      <svg
        className="absolute right-[-115px] top-0 hidden xl:block"
        width="115"
        height="115"
      >
        <rect width="115" height="115" fill="#f0583c" />
      </svg>
    </section>
  )
}
