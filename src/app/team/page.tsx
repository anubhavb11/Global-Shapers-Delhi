import TeamCard from '@/components/TeamCard';
import { projectHeads, shapers } from '@/data/team';

export const metadata = {
  title: 'Our Team',
  description: 'Meet the Global Shapers New Delhi team: Project Heads and Shapers building impact across health, climate, and inclusion.',
};

export default function TeamPage() {
  return (
    <div className="w-full">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D5392]">Our Team</h1>
        <p className="text-gray-700 mt-2">Project Heads first, followed by all Shapers and Officers.</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-black mb-4">Project Heads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectHeads.map((member) => (
            <TeamCard key={member.email} member={member} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-black mb-4">Shapers & Officers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shapers.map((member) => (
            <TeamCard key={member.email} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}


