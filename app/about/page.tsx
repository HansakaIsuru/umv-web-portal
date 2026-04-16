export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="bg-school-maroon text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Our Legacy</h1>
        <p className="mt-4 text-school-gold opacity-90 max-w-2xl mx-auto">
          From humble beginnings in the 19th century to a modern center of excellence.
        </p>
      </div>

      <section className="max-w-4xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-bold text-school-maroon mb-12 text-center">Milestones</h2>
        
        <div className="space-y-12 border-l-4 border-school-gold pl-8 ml-4">
          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-school-maroon border-4 border-white shadow-sm"></div>
            <h3 className="text-xl font-bold text-school-maroon">The Founding</h3>
            <p className="text-gray-600 mt-2">Established over 125 years ago to serve the community of Unawatuna.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-school-maroon border-4 border-white shadow-sm"></div>
            <h3 className="text-xl font-bold text-school-maroon">Academic Growth</h3>
            <p className="text-gray-600 mt-2">Expansion of facilities and the introduction of advanced level streams.</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-school-gold border-4 border-white shadow-sm"></div>
            <h3 className="text-xl font-bold text-school-maroon">The Modern Era</h3>
            <p className="text-gray-600 mt-2">Current status as a leading government school with a rich alumni network.</p>
          </div>
        </div>
      </section>
    </main>
  );
}