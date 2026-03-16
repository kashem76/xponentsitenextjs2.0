export default function HomeHiringSection() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-linear-to-br from-primary to-primary/90 border-t border-primary-foreground/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 rounded-full">
          <span className="text-sm font-semibold text-white uppercase tracking-wide">
            Careers
          </span>
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Join Our Team of Builders
        </h2>

        <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto">
          We&apos;re always looking for talented engineers, designers, and
          problem-solvers who want to build digital systems used by
          organizations around the world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105">
            View open positions
          </button>
          <button className="bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg border-2 border-white/30">
            Learn about our culture
          </button>
        </div>
      </div>
    </section>
  );
}
