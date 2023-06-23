import Hero from "@/components/mag-home-hero"
import HomeNews from "@/components/mag-home-news"
import TargetAssetClasses from "@/components/mag-home-targets"
import Team from "@/components/mag-home-team"
import TeamMembers from "@/components/mag-home-team-members"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <HomeNews />
      <TargetAssetClasses />
      <Team />
      <TeamMembers />
    </main>
  )
}
