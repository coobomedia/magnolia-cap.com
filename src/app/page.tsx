import Hero from "@/components/mag-home-hero"
import HomeNews from "@/components/mag-home-news"
import TargetAssetClasses from "@/components/mag-home-targets"
import Team from "@/components/mag-home-team"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <HomeNews />
      <TargetAssetClasses />
      <Team />
    </main>
  )
}
