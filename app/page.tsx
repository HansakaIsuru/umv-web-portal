import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION 
          Uses school-maroon background with a low-opacity image overlay 
      */}
      <section className="relative h-[80vh] flex items-center justify-center bg-school-maroon text-white overflow-hidden">
        {/* Replace '/school-gate.jpg' with your actual image path in /public */}
        <div className="absolute inset-0 opacity-25 bg-[url('/school-hero.jpg')] bg-cover bg-center scale-105"></div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-md">
            Unawatuna Maha Vidyalaya
          </h1>
          {/* Decorative Gold Divider */}
          <div className="h-1.5 w-40 bg-school-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            Nurturing wisdom and character for over <span className="text-school-gold font-semibold">125 years</span>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/about" className="bg-school-gold text-school-maroon px-8 py-3 rounded-md font-bold hover:bg-white transition-all shadow-lg">
              Our Legacy
            </Link>
            <Link href="/contact" className="border-2 border-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-school-maroon transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME & PRINCIPAL'S SECTION 
      */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-school-maroon mb-6 leading-tight">
            A Tradition of <br />
            <span className="text-school-gold">Academic Excellence</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Unawatuna Maha Vidyalaya stands as the premier government educational institution in the region. 
            For more than a century, we have been a beacon of knowledge, producing notable 
            leaders and professionals who serve the motherland with pride.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to empower every student with the skills, values, and confidence 
            needed to thrive in a rapidly changing world while staying rooted in our rich 
            cultural heritage.
          </p>
        </div>
        <div className="relative">
          {/* Decorative frame for an image */}
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-school-gold rounded-lg"></div>
          <div className="relative bg-gray-200 aspect-[4/5] rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
             {/* Placeholder for Principal Photo */}
             <span className="text-gray-400 italic">Principal's Portrait</span>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION CARDS 
      */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-school-maroon">Explore UMV</h3>
            <div className="h-1 w-20 bg-school-gold mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* History Card */}
            <div className="group p-10 bg-white border-b-8 border-school-maroon shadow-md hover:-translate-y-2 transition-transform duration-300">
              <div className="text-school-gold text-4xl mb-4 font-serif">125+</div>
              <h4 className="font-bold text-2xl mb-3 text-school-maroon">History</h4>
              <p className="text-gray-600 mb-6">Discover the origins and milestones of our esteemed institution since its founding.</p>
              <Link href="/about" className="inline-block text-school-maroon font-bold border-b-2 border-transparent hover:border-school-gold transition-colors">
                View Timeline →
              </Link>
            </div>

            {/* Gallery Card */}
            <div className="group p-10 bg-white border-b-8 border-school-maroon shadow-md hover:-translate-y-2 transition-transform duration-300">
              <div className="text-school-gold text-4xl mb-4">📸</div>
              <h4 className="font-bold text-2xl mb-3 text-school-maroon">School Life</h4>
              <p className="text-gray-600 mb-6">Explore our vibrant community through photos of sports, arts, and academic events.</p>
              <Link href="/gallery" className="inline-block text-school-maroon font-bold border-b-2 border-transparent hover:border-school-gold transition-colors">
                Open Gallery →
              </Link>
            </div>

            {/* School Anthem Card */}
            <div className="group p-10 bg-white border-b-8 border-school-maroon shadow-md hover:-translate-y-2 transition-transform duration-300">
              <div className="text-school-gold text-4xl mb-4">🎵</div>
              <h4 className="font-bold text-2xl mb-3 text-school-maroon">School Anthem</h4>
              <p className="text-gray-600 mb-6">Listen to and read the lyrics of the anthem that unites every UMV student.</p>
              <Link href="/anthem" className="inline-block text-school-maroon font-bold border-b-2 border-transparent hover:border-school-gold transition-colors">
                Play Audio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP 
      */}
      <footer className="bg-school-maroon text-white py-12 px-6 text-center border-t-4 border-school-gold">
        <p className="mb-2 font-semibold">Unawatuna Maha Vidyalaya • Unawatuna, Sri Lanka</p>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </main>
  );
}