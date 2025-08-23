import Image from "next/image";

type Member = {
  name: string;
  role: string;
  imageSrc: string;
  bio: string;
};

const members: Member[] = [
  {
    name: "Mannat Sharma",
    role: "Curator",
    imageSrc: "/images/curatorship/Mannat.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur. Lorem tempor arcu euismod sit gravida at eu scelerisque egestas. Vivamus dictum tempus nullam donec tincidunt sem et. Pellentesque porta convallis consectetur natoque. Consequat adipiscing sed lobortis viverra congue aenean.",
  },
  {
    name: "Pranay Agrawal",
    role: "Vice Curator",
    imageSrc: "/images/curatorship/Pranay.jpg",
    bio: "Pranay Agrawal is Sales Director and New Project Lead at Shriji Gases, driving industrial gases growth in sectors like pharmaceuticals, semiconductors, and green hydrogen. He co-founded Mokatela a beverage brand and the Young Tycoons Business Challenge, a global entrepreneurship initiative. During COVID-19, he launched The PPE Project, donating 1,100+ face shields to healthcare workers and police officers. Passionate about sustainability and making a positive change, he leverages his industry expertise to create impactful solutions.",
  },
  {
    name: "Tanisha Seth",
    role: "Impact Officer",
    imageSrc: "/images/curatorship/Tanisha.jpg",
    bio: "Tanisha Seth is a graduate in Economics and Finance from Ashoka University with further concentrations in International Relations, Entrepreneurial Strategy, and Leadership. She is currently an Associate at GLG, and has previously worked across consulting, policy research, and sustainability initiatives. Passionate about community-driven change, she leads projects on gender sensitisation and youth engagement as part of the Global Shapers Community.",
  },
];

export default function CuratorshipSection() {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-3 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0D5392] mb-6 sm:mb-8 text-center px-2">
          Curatorship
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {members.map((member) => (
            <article key={member.name} className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md border border-gray-200 overflow-hidden flex flex-col h-full">
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 text-center">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-800 mb-3 sm:mb-4 text-center font-medium">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed flex-1">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}