import JWRHeader from "@/components/jwr-header"
import Hero from "@/components/mag-home-hero"
import HomeNews from "@/components/mag-home-news"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <HomeNews />
    </main>
  )
}
