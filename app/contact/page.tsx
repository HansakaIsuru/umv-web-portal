export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-school-maroon text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-school-gold">Get In Touch</h1>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white border-t-8 border-school-maroon p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-school-maroon">Send a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded focus:ring-2 focus:ring-school-gold outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded focus:ring-2 focus:ring-school-gold outline-none" />
            <textarea rows={4} placeholder="Your Inquiry" className="w-full p-3 border rounded focus:ring-2 focus:ring-school-gold outline-none"></textarea>
            <button className="bg-school-maroon text-white px-8 py-3 rounded font-bold hover:bg-school-gold hover:text-school-maroon transition-colors">
              Submit
            </button>
          </form>
        </div>

        {/* Address Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-school-maroon">School Office</h2>
          <p className="text-gray-600 text-lg">
            Unawatuna Maha Vidyalaya,<br />
            Unawatuna, Galle,<br />
            Sri Lanka.
          </p>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-school-gold">
            <span className="text-gray-500">Google Maps Embed Placeholder</span>
          </div>
        </div>
      </div>
    </main>
  );
}