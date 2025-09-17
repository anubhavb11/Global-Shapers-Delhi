export type TeamRoleCategory = 'Project Head' | 'Shaper' | 'Officer' | 'Member';

export interface TeamMember {
    fullName: string;
    preferredName?: string;
    email: string;
    phone?: string;
    linkedIn?: string;
    otherSocial?: string;
    currentRoleAtHub: string;
    projects: string[];
    shortBio: string;
    photoUrl?: string; // Prefer local/static when available
    isProjectHead: boolean;
}

// Helper to normalize Google Drive share links to direct content URLs where possible
function normalizeDriveUrl(url?: string): string | undefined {
    if (!url) return undefined;
    const match = url.match(/id=([a-zA-Z0-9_-]+)/);
    if (match?.[1]) {
        const id = match[1];
        return `https://drive.google.com/uc?export=view&id=${id}`;
    }
    return url;
}

export const teamMembers: TeamMember[] = [
    {
        fullName: 'Rishabh Rohilla',
        preferredName: 'Rishabh',
        email: 'Rishabhrohilla90@gmail.com',
        phone: '8860320432',
        linkedIn: 'https://www.linkedin.com/in/rishabhrohilla',
        currentRoleAtHub: 'Project Head - Health Awareness Project',
        projects: ['HEALTH AWARENESS PROJECT'],
        shortBio:
            'Rishabh is a Global Shaper from the New Delhi Hub, a social entrepreneur, and youth leader passionate about driving meaningful change. He is the co-founder of SHAMTA FOUNDATION, an NGO working on gender equality, youth empowerment, and safety awareness, notably through the ABHAYA Project. A certified Global Citizen by the Ban Ki-moon Centre, he has represented India at platforms like the World Youth Forum, Yenching Global Symposium, and World Youth Festival. He also runs a garment manufacturing business, combining entrepreneurship with community development.',
        photoUrl: '/images/OurTeam/rishabh-rohilla.jpeg',
        isProjectHead: true,
    },
    {
        fullName: 'Aditi Agarwal',
        email: 'aditi@genuspaper.com',
        linkedIn: 'https://www.linkedin.com/in/aditi-agarwal-ba5454179/',
        currentRoleAtHub: 'Project Head, CEAP',
        projects: ['CEAP'],
        shortBio:
            'Aditi holds dual degrees and began her career in waste management before joining her family’s paper recycling business. She is also exploring entrepreneurship in sustainable fashion and footwear, combining environmental impact with design. A people’s person who enjoys bringing energy and humor to teams, she cares about building solutions that are both practical and planet-friendly.',
        photoUrl: '/images/OurTeam/aditi-agarwal.jpg',
        isProjectHead: true,
    },
    {
        fullName: 'Mahima Bhagat',
        email: 'mahimabhagat108@gmail.com',
        linkedIn: 'http://linkedin.com/in/mahima-bhagat',
        currentRoleAtHub: 'Shaper',
        projects: ['Project Prerna'],
        shortBio:
            'Mahima is an IT Strategy Consultant at Deloitte India with 5+ years of experience across modernization, cloud, networks, and enterprise architecture. Her focus includes operating models, ESG, and application portfolio optimization. With impact consulting experience and participation in UN Women AI School, she aims to leverage AI for gender equality initiatives and welcomes collaborative opportunities.',
        photoUrl: '/images/OurTeam/mahima-bhagat.jpg',
        isProjectHead: false,
    },
    {
        fullName: 'Tanisha Seth',
        email: 'tanishaseth01@gmail.com',
        currentRoleAtHub: 'Impact Officer, Project Co-head of CGM',
        projects: ['CGM', 'DLF', 'CEP'],
        shortBio:
            'Tanisha is a graduate in Economics and Finance from Ashoka University with concentrations in international relations, entrepreneurial strategy, and leadership. She is an Associate at GLG and has experience across consulting, policy research, and sustainability. She leads projects on gender sensitisation and youth engagement with the Global Shapers Community.',
        photoUrl: '/images/OurTeam/tanisha-seth.jpg',
        isProjectHead: true,
    },
    {
        fullName: 'Mannan Morvi',
        preferredName: 'Mannan Morvi',
        email: 'mannanmorvi@gmail.com',
        phone: '9871117634',
        linkedIn: 'https://www.linkedin.com/in/mannan-morvi-9b507b1a0',
        currentRoleAtHub: 'Strategic Communications Officer',
        projects: ['Strategic Communications', 'Climate Emergency Action Project'],
        shortBio:
            'Mannan is a Finance graduate from SSCBS and works as a Product and Policy Researcher at Crashfree India, focusing on road safety, motor insurance, and policy frameworks. He manages social media presence for the New Delhi Hub, combining analytical skills with communications for impact. Interests include strategy, consulting, research, policy, and product development.',
        photoUrl: '/images/OurTeam/mannan-morvi.jpg',
        isProjectHead: false,
    },
    {
        fullName: 'Lalita Choudhary',
        preferredName: 'Lalita',
        email: 'Lalita004choudhary@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/lalita-choudhary-32234a2b2',
        currentRoleAtHub: 'Shaper',
        projects: ['Consent, Gender-Based violence and Male Allyship Project'],
        shortBio:
            'Lalita is pursuing a degree in Political Science with a minor in Philosophy, with a keen interest in gender studies. She contributes to projects on consent, gender-based violence, and male allyship.',
        photoUrl: '/images/OurTeam/lalita-choudhary.jpg',
        isProjectHead: false,
    },
    {
        fullName: 'Aakarshi Srivastava',
        email: 'aakarshi.sr@gmail.com',
        phone: '+91 7080004000',
        linkedIn: 'https://www.linkedin.com/in/aakarshi-srivastava-9ab769234',
        otherSocial:
            'X: https://x.com/AakarshiSrivas3 | Instagram: https://share.google/MiZcaVfbWhSwl1Y2f',
        currentRoleAtHub: 'Shaper',
        projects: ['Climate Emergency Action Project'],
        shortBio:
            'Aakarshi is a Manager at Adam Smith International working across research, stakeholder management, and due diligence. She manages ASI’s Environment Team and serves on the founding committee of the ASI Women’s Network. She contributes to climate-focused initiatives as a Global Shaper and is a Bevisioneers fellow with additional leadership experiences.',
        photoUrl: '/images/OurTeam/aakarshi-srivastava.jpg',
        isProjectHead: false,
    },
    {
        fullName: 'Teesha Singh',
        email: 'teeshasingh17@gmail.com',
        linkedIn: 'https://www.linkedin.com/in/teesha-singh/',
        currentRoleAtHub: 'Network Officer',
        projects: ['Consent, Gender-Based Violence and Male Allyship Project'],
        shortBio:
            'Teesha is interning with the Programme Management and Support Unit at UNDP India, supporting research, monitoring, and policy initiatives. With academic training from LSR and Sciences Po, and experience in youth-led forums, she focuses on inclusive, gender-responsive policymaking and youth engagement.',
        photoUrl: '/images/OurTeam/teesha-singh.jpeg',
        isProjectHead: false,
    },
    {
        fullName: 'Sidarth Ramesh Ganpati',
        preferredName: 'Sidarth Ganpati',
        email: 'sidarthrganpati@gmail.com',
        currentRoleAtHub: 'Global Shaper',
        projects: ['HAP'],
        shortBio:
            'Sidarth is a Global Shaper with the New Delhi Hub and previously served as Happiness and Engagement Officer. He works as a Research Associate at CII and holds a degree from UNC Chapel Hill with coursework at LSE and Korea University. An avid traveler and sports enthusiast.',
        photoUrl: '/images/OurTeam/sidarth-ganpati.jpeg',
        isProjectHead: false,
    },
    {
        fullName: 'Shivani Chauhan',
        email: 'shivanichauhan.focus@gmail.com',
        phone: '9560921177',
        linkedIn: 'https://www.linkedin.com/in/shivani-chauhan-8445ab230',
        currentRoleAtHub: 'Member',
        projects: ['Health Awareness Project'],
        shortBio:
            'Shivani is a business professional who believes health is a shared right. At the New Delhi Hub, she contributes to the Health Awareness Project, combining a background in sales and strategy with storytelling to engage communities for healthier living.',
        photoUrl: '/images/OurTeam/shivani-chauhan.jpg',
        isProjectHead: false,
    },
    {
        fullName: 'Meet Sijariya',
        email: 'meetsijariya@gmail.com',
        linkedIn: 'https://linkedin.com/in/meetsijariya',
        otherSocial: 'https://www.instagram.com/meet.sijariya',
        currentRoleAtHub: 'Shaper | COO',
        projects: ['Project Prerna'],
        shortBio:
            'Meet serves on the Executive Council of the Commonwealth Youth Climate Change Network as Vice Chair for Partnerships & Stakeholders, and is a Mercedes Benz beVisioneers fellow. He co-leads the NCR as COO for the Global Shapers under-30 network, and founded The Indian Vidyarthi, a youth organization active across 150+ cities.',
        photoUrl: '/images/OurTeam/meet-sijariya.png',
        isProjectHead: false,
    },
];

export const projectHeads = teamMembers.filter(m => m.isProjectHead);
export const shapers = teamMembers.filter(m => !m.isProjectHead);


