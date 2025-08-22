import Image from "next/image";

type Member = {
  name: string;
  role: string;
  imageSrc: string;
};

const members: Member[] = [
  {
    name: "Mannat Sharma",
    role: "Curator",
    imageSrc: "/images/curatorship/Mannat.jpg",
  },
  {
    name: "Pranay Agrawal",
    role: "Vice Curator",
    imageSrc: "/images/curatorship/Pranay.jpg",
  },
  {
    name: "Tanisha Seth",
    role: "Impact Officer",
    imageSrc: "/images/curatorship/Tanisha.jpg",
  },
];

export default function CuratorshipSection() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0D5392] mb-8 text-center">Curatorship</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {members.map((member) => (
            <article key={member.name} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
              {/* Photo */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                <p className="text-lg text-gray-800 mb-4 text-center">{member.role}</p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet consectetur. Lorem tempor arcu euismod sit gravida at eu scelerisque egestas. Vivamus dictum tempus nullam donec tincidunt sem et. Pellentesque porta convallis consectetur natoque. Consequat adipiscing sed lobortis viverra congue aenean.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}