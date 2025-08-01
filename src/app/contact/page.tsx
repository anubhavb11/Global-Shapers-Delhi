export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#0D5392] mb-2">Contact</h1>
      <form className="flex flex-col gap-4 bg-[#0D5392]/10 rounded p-6">
        <input type="text" placeholder="Your Name" className="px-4 py-2 rounded border border-[#0D5392]/20 focus:outline-none focus:ring-2 focus:ring-[#0D5392]" />
        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded border border-[#0D5392]/20 focus:outline-none focus:ring-2 focus:ring-[#0D5392]" />
        <textarea placeholder="Your Message" rows={4} className="px-4 py-2 rounded border border-[#0D5392]/20 focus:outline-none focus:ring-2 focus:ring-[#0D5392]" />
        <button type="submit" className="bg-[#0D5392] text-white px-6 py-2 rounded font-semibold hover:bg-[#08305c] transition">Send</button>
      </form>
      <div className="flex gap-6 justify-center mt-4">
        <a href="#" className="text-[#0D5392] underline text-base" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" className="text-[#0D5392] underline text-base" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" className="text-[#0D5392] underline text-base" target="_blank" rel="noopener noreferrer">Linktree</a>
      </div>
      {/* Map placeholder */}
      <div className="w-full h-40 bg-[#0D5392]/10 rounded flex items-center justify-center text-[#0D5392] text-lg mt-8">[Add a map of Delhi here]</div>
    </section>
  );
} 