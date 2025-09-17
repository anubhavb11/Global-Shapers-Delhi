import Image from "next/image";

type Member = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
};

const members: Member[] = [
  {
    name: "Mannat Sharma",
    role: "Curator",
    imageSrc: "/images/Curatorship/Mannat.jpg",
    description: "Mannat Sharma is a Consultant with The World Bank, where she is working on expanding access to safe, accessible, affordable and quality childcare options towards enhancing female labour force participation in the country. She holds a postgraduate Economics degree from Jawaharlal Nehru University, and an undergraduate Economics degree from Lady Shri Ram College, Delhi University.​​​​​​ As the Curator, Mannat is committed to addressing local challenges and fostering collaboration among young leaders in the Delhi region."
  },
  {
    name: "Pranay Agrawal",
    role: "Vice Curator",
    imageSrc: "/images/Curatorship/Pranay.jpg",
    description: "Pranay Agrawal is Sales Director and New Project Lead at Shriji Gases, driving industrial gases growth in sectors like pharmaceuticals, semiconductors, and green hydrogen. He co-founded Mokatela a beverage brand and the Young Tycoons Business Challenge, a global entrepreneurship initiative. During COVID-19, he launched The PPE Project, donating 1,100+ face shields to healthcare workers and police officers. Passionate about sustainability and making a positive change, he leverages his industry expertise to create impactful solutions."
  },
  {
    name: "Tanisha Seth",
    role: "Impact Officer",
    imageSrc: "/images/Curatorship/Tanisha.jpg",
    description: "Tanisha Seth is a graduate in Economics and Finance from Ashoka University with further concentrations in International Relations, Entrepreneurial Strategy, and Leadership. She is currently an Associate at GLG, and has previously worked across consulting, policy research, and sustainability initiatives. Passionate about community-driven change, she leads projects on gender sensitisation and youth engagement as part of the Global Shapers Community."
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
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}