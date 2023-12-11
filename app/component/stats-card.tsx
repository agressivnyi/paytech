
export default function StatsCards() {
  
  return(
  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12">
      <article className="flex flex-col items-center gap-y-2">
        <h2 className="text-5xl font-bold">16y</h2>
        <span className="text-skin font-medium">Experience</span>
      </article>
      <article className="flex flex-col items-center gap-y-2">
        <h2 className="text-5xl font-bold">255+</h2>
        <span className="text-skin font-medium">Merchant Partner</span>
      </article>
      <article className="flex flex-col items-center gap-y-2">
        <h2 className="text-5xl font-bold">128+</h2>
        <span className="text-skin font-medium">Successful Projects</span>
      </article>
      <article className="flex flex-col items-center gap-y-2">
        <h2 className="text-5xl font-bold">100.2k+</h2>
        <span className="text-skin font-medium">Worldwide Clients</span>
      </article>
    </section>
  )
}
