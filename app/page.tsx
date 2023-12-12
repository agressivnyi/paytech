import Brands from './component/brands'
import Hero from './component/hero'
import Processes from './component/processes'
import Service from './component/service'
import StatsCards from './component/stats-card'

export default function Home() {
  return (
    <main className="flex flex-col gap-y-32 my-24 gap-x-8 max-w-[1440px] px-5 lg:px-10 xl:px-[100px] m-auto">
      <Hero />
      <StatsCards />
      <Brands />
      <Service />
      <Processes />
    </main>
  )
}
