import Brands from './component/brands'
import CTA from './component/cta'
import FAQs from './component/faqs'
import Hero from './component/hero'
import Processes from './component/processes'
import Service from './component/service'
import StatsCards from './component/stats-card'
import Testimonial from './component/testimonials'

export default function Home() {
  return (
    <main className="flex flex-col gap-y-32 mt-32 gap-x-8 max-w-[1440px] px-5 md:px-8 lg:px-10 xl:px-[100px] m-auto">
      <Hero />
      <StatsCards />
      <Brands />
      <Service />
      <Processes />
      <Testimonial />
      <FAQs />
      <CTA />
    </main>
  )
}
