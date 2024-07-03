const Hero = () => (
  <section className="w-full py-12 sm:py-24 lg:py-32 bg-gradient-to-r from-blue-700 to-blue-400">
    <div className="px-4 md:px-6 text-center text-slate-50">
      <h1 className="max-w-screen-lg m-auto text-4xl font-bold  sm:text-6xl md:text-7xl lg:text-8xl">
        Generate Random Points with Ease
      </h1>
      <p className="max-w-[800px] mx-auto mt-4 text-lg md:text-xl">
        Effortlessly create stunning graphs and charts with our powerful graph
        generator.
      </p>
      <div className="mt-8">
        <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-slate-50 shadow transition-[colors,_transform] hover:bg-zinc-800 bg-zinc-900 active:scale-[98%]"
          href="#demo"
          rel="ugc"
        >
          Generate Graph
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
