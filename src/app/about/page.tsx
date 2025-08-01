export default function About() {
  return (
    <section className="max-w-3xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-[#0D5392] mb-2">About Us</h1>
      <div className="text-lg text-[#0D5392]">
        {/* Brief history of Global Shapers (WEF) */}
        <p className="mb-4">Global Shapers is an initiative of the World Economic Forum, empowering young people to drive dialogue, action, and change. The New Delhi Hub is part of this global network, uniting passionate individuals to create local impact.</p>
        {/* Mission & Vision */}
        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission & Vision</h2>
        <p className="mb-4">To foster positive change in Delhi through projects focused on climate, mental health, youth leadership, and more. We envision a city where young leaders collaborate for a better future.</p>
        {/* What makes us unique */}
        <h2 className="text-xl font-semibold mt-6 mb-2">What Makes Us Unique</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Focus on climate action, mental health, and youth leadership</li>
          <li>Diverse, passionate members from all walks of life</li>
          <li>Strong local and global impact</li>
        </ul>
        <a href="https://www.globalshapers.org/" target="_blank" rel="noopener noreferrer" className="underline text-[#0D5392] hover:text-[#08305c]">Learn more at the Global Shapers official site</a>
      </div>
      {/* Placeholder for team/group image */}
      <div className="w-full h-48 bg-[#0D5392]/10 rounded flex items-center justify-center text-[#0D5392] text-lg">
        [Add your team or group image here]
      </div>
    </section>
  );
} 