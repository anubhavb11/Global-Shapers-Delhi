export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    category: string;
    sdg: string;
    status: 'active' | 'completed' | 'upcoming';
    featured: boolean;
    image: string;
    gallery: string[];
    problem: string;
    journey: string;
    currentWork: string;
    impact: string;
    support: string;
    partners: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    tags: string[];
    startDate: string;
    endDate?: string;
    team: string[];
}

export const projects: Project[] = [
    {
        id: 'health-awareness-project',
        title: 'Health Awareness Project (HAP)',
        shortDescription: 'Making healthcare knowledge accessible, relatable, and actionable for all through innovative digital and community initiatives.',
        longDescription: 'The Health Awareness Project (HAP) is on a mission to make healthcare knowledge accessible, relatable, and actionable for all. Rooted in SDG 3: Good Health & Well-being, HAP bridges the gap between awareness and action through innovative initiatives. From Instagram reels with doctors to large-scale cancer awareness walkathons, we bring preventive health education to the digital space and the grassroots alike.',
        category: 'Health',
        sdg: 'SDG 3: Good Health & Well-being',
        status: 'active',
        featured: true,
        image: '/images/projects/hap-main.png',
        gallery: [
            '/images/projects/hap-1.jpg',
            '/images/projects/hap-2.jpg',
            '/images/projects/hap-3.jpg',
            '/images/projects/hap-4.jpg'
        ],
        problem: 'In India, millions of people lack access to reliable health information and even health facilities. Myths, stigma, and misinformation & unaccesibility often overshadow early detection and preventive measures. Whether it\'s cancer, diabetes, or sexual health, communities —especially youth—are left without the knowledge they need to make informed choices about their well-being. 80% of public health facilities are substandard says Govt. Survey Source: Times of India',
        journey: 'The Health Awareness Project (HAP) was born out of this urgent need to make healthcare knowledge simple, accessible, and actionable. We started small, hosting Instagram Live sessions with doctors to bust myths and share essential health strategies. From there, we scaled up —organizing a Cancer awareness walkathon at Ashoka University, reaching hundreds of students with powerful messages about early detection. Next, we collaborated with the Indian Cancer Society for a Christmas donation drive, bringing joy to underprivileged children battling cancer. Our approach has always been two-fold: combine digital advocacy with on-ground action.',
        currentWork: 'Digital Campaigns: Bite-sized reels, Instagram series on health hacks, and disease prevention content, making health tips relatable and shareable. Community Programs: Partnering with NGOs and schools to host health awareness events and reach grassroots audiences. Book Distribution Drive: 500 books on sexual abuse awareness and reproductive health distributed across schools and NGOs over the next 5 months. Doctor Network: A "reel bank" of 54 weekly short videos from healthcare professionals, making HAP a trusted health voice.',
        impact: 'HAP is building a culture of early detection, body safety, and preventive health. By combining credibility (doctors, NGOs) with accessibility (social media, schools), we\'re creating ripple effects that improve individual lives and strengthen community well-being',
        support: 'Partner with Us: Collaborate on community health events and school programs. Volunteer: Join us in awareness drives, book distribution, or content creation. Support Our Campaigns: Help us expand the reach of life-saving health knowledge. Together, we can fight misinformation, break stigma, and make good health a reality for everyone.',
        partners: ['Indian Cancer Society', 'Ashoka University', 'Local NGOs', 'Healthcare Professionals'],
        metrics: [
            { label: 'Instagram Followers', value: '2,500+' },
            { label: 'Books Distributed', value: '500' },
            { label: 'Students Reached', value: '1,000+' },
            { label: 'Doctor Videos', value: '54' }
        ],
        tags: ['Health', 'Education', 'Digital Campaigns', 'Community Outreach'],
        startDate: '2023-01-01',
        team: ['Project Lead', 'Content Creators', 'Community Managers', 'Medical Advisors']
    },
    {
        id: 'climate-emergency-action-project',
        title: 'Climate Emergency Action Project (CEAP)',
        shortDescription: 'A youth-powered movement turning climate urgency into action through e-waste drives, career mentorship, and awareness campaigns.',
        longDescription: 'The Climate Emergency Action Project (CEAP) is the New Delhi Hub\'s united front against the climate crisis; a youth-powered movement determined to turn urgency into action. Our mission is simple: to take urgent, localised action while inspiring a generation to think and act boldly for the planet. Whether through tackling waste, building coalitions, or raising awareness, CEAP proves that young voices can shape a cleaner, fairer tomorrow.',
        category: 'Climate',
        sdg: 'SDG 13: Climate Action',
        status: 'active',
        featured: true,
        image: '/images/projects/ceap-main.png',
        gallery: [
            '/images/projects/ceap-1.jpg',
            '/images/projects/ceap-2.jpg',
            '/images/projects/ceap-3.jpg',
            '/images/projects/ceap-4.jpg'
        ],
        problem: 'Delhi NCR is at the epicentre of the climate crisis. From choking air pollution and smog to rising electronic waste and unsustainable consumption, the threats are multiplying. Communities, especially young people, often lack the resources, awareness, and channels to fight back effectively.',
        journey: 'To answer this challenge, the New Delhi Hub launched Climate Emergency Action Project (CEAP) in November 2024. Since then, we\'ve run 4 e-waste drives, collecting 40+ kg of discarded electronics across colleges, residential societies, and schools. We also conducted e-waste educational initiatives in schools. These drives not only reduced hazardous waste but also raised awareness about circular economy practices. We launched the Climate Connect Fellowship Program, working alongside other hubs from across India. The fellowship aims to help young professionals kickstart impactful climate careers in policy, consulting, and green finance. We created digital awareness campaigns, reaching thousands through infographics, posts, and climate storytelling and systemic issues.',
        currentWork: 'While e-waste remains our flagship initiative, CEAP is also gearing up to tackle smog and air pollution, climate education modules for schools. These projects reflect our vision: to move beyond isolated interventions and work on multiple fronts of the climate challenge. We continue to run e-waste drives, expand our Climate Connect Fellowship Program, and create impactful digital awareness campaigns.',
        impact: 'We are building a coalition of young leaders committed to climate justice. The e-waste drives we\'ve organised is only the beginning; our aim is to scale this impact exponentially, create replicable models, and build an ecosystem of e-waste management. Through our initiatives, we\'re transforming awareness into measurable impact and equipping young leaders with the tools they need to fight climate change.',
        support: 'Partner with us and sponsor us to scale our initiatives across communities. Connect us with corporates, housing societies, colleges and the likes, to help us scale our e-waste initiative. Volunteer with us at drives, school sessions, and events. Collaborate on new ideas, from smog solutions to recycling innovations.',
        partners: ['Climate Connect Fellowship', 'Colleges & Universities', 'Residential Societies', 'Schools', 'Corporate Partners'],
        metrics: [
            { label: 'E-waste Collected', value: '40+ kg' },
            { label: 'E-waste Drives', value: '4' },
            { label: 'Digital Campaign Reach', value: 'Thousands' },
            { label: 'Fellowship Participants', value: 'Growing' }
        ],
        tags: ['Climate Action', 'E-waste Management', 'Youth Leadership', 'Environmental Education', 'Circular Economy'],
        startDate: '2024-11-01',
        team: ['Project Lead', 'E-waste Coordinators', 'Digital Campaign Managers', 'Fellowship Program Managers', 'Community Outreach Team']
    },
    {
        id: 'consent-gender-male-allyship',
        title: 'CGM Project - Consent, Gender-Based Violence & Male Allyship',
        shortDescription: 'A first-of-its-kind initiative for middle and high school students introducing essential conversations on consent, gender roles, and male allyship through structured, evidence-backed workshops.',
        longDescription: 'CGM is a first-of-its-kind initiative curated specifically for middle and high school students to introduce essential yet overlooked conversations on consent, gender roles, and the importance of allyship, particularly male allyship. These are not simply awareness sessions; they are structured, evidence-backed engagements to reframe cultural narratives around masculinity, power, and empathy.',
        category: 'Education',
        sdg: 'SDG 5: Gender Equality',
        status: 'active',
        featured: true,
        image: '/images/projects/cgm-main.png',
        gallery: [
            '/images/projects/cgm-1.jpg',
            '/images/projects/cgm-2.jpg',
            '/images/projects/cgm-3.jpg',
            '/images/projects/cgm-4.jpg'
        ],
        problem: 'Middle and high school students lack essential education on consent, gender roles, and the importance of allyship, particularly male allyship. Cultural narratives around masculinity, power, and empathy need to be reframed through structured, evidence-backed engagements that go beyond simple awareness sessions.',
        journey: 'We have officially procured and licensed the curriculum from the Pratisandhi Foundation, India\'s leading youth-led nonprofit dedicated to comprehensive sexual health education. This collaboration brings a gold standard of pedagogy, research, and domain credibility to the CGM Project. The facilitation model is backed by accomplished trainers including Sanya Ghai (WHO and UNFPA programs), Dr. Kaavya Sreedhar (Delhi government gynecologist), and lead educators Anisha Hallan and Suhani Goel, who together have trained over 15,000+ young people.',
        currentWork: 'The sessions are delivered in person by trained youth educators. Each workshop is 60 minutes long and conducted separately for Grades 6–8 and Grades 9–10, allowing for nuanced, age-appropriate delivery. The content is designed to be experiential, reflective, and activity-driven, leaving lasting impressions beyond the classroom. We have rigorous impact framework and monitoring mechanism, tracking outcomes through pre- and post-engagement evaluations, storytelling responses, and digital interaction analytics.',
        impact: 'This project gives students skills they don\'t get from textbooks: empathy, boundaries, accountability, and allyship. We\'re creating a ripple effect of awareness, courage, and compassion that begins in classrooms and echoes across the country. Our curriculum is professionally vetted, youth-designed, and clinically supported, making it among the few in India tackling gender-based violence and allyship at the school level.',
        support: 'Partner institutions facilitate session scheduling, provide classroom infrastructure, and support communications with students and parents. Our team handles workshop delivery, facilitator training, and session material logistics. We ensure each student benefits from personalized learning resources, activities, and a safe environment to reflect, express, and grow. Contact: Tanisha Seth (+91 9810449403) or Vanisha Sharma (+91 93128 07875).',
        partners: ['Pratisandhi Foundation', 'Men Against Violence and Abuse (MAVA)', 'Centre for Social Research (CSR)', 'Niyati Sharma (Diana Award Winner)', 'Dr. Naveen Kumar'],
        metrics: [
            { label: 'Students Trained', value: '15,000+' },
            { label: 'Workshop Duration', value: '60 minutes' },
            { label: 'Target Grades', value: '6-10' },
            { label: 'Expert Trainers', value: 'Multiple' }
        ],
        tags: ['Gender Equality', 'Education', 'Male Allyship', 'Consent Education', 'Youth Development', 'Social Justice'],
        startDate: '2024-01-01',
        team: ['Tanisha Seth (Project Head)', 'Vanisha Sharma (Project Head)', 'Trained Youth Educators', 'Curriculum Specialists', 'Impact Assessment Team']
    }
];

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(project => project.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProjects = (): Project[] => {
    return projects.filter(project => project.featured);
};

export const getAllCategories = (): string[] => {
    const categories = projects.map(project => project.category);
    return [...new Set(categories)];
};
