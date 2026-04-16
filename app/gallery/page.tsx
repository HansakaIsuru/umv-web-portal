export default function GalleryPage() {
  const images = [1, 2, 3, 4, 5, 6]; // Placeholder for your image array

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-school-maroon text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold">School Gallery</h1>
      </div>

      <div className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((id) => (
          <div key={id} className="aspect-square bg-white border-2 border-school-gold overflow-hidden rounded-lg shadow-md hover:scale-[1.02] transition-transform">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 italic">
              Event Image {id}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}