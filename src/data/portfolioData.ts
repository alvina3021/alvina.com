import { ProfileData } from '../types';
import omaiAvatar from '../../assets/omai.jpg';

export const portfolioData: ProfileData = {
  name: 'Alvina Damayanti Tikna Wardani',
  preferredName: 'Alvina',
  title: 'Information Technology Education Student | Web Developer | Project Manager | Data Analysis Enthusiast',
  subTitle: 'Building web solutions with a strong focus on user experience, structured project execution, and data-driven decision making.',
  bio: 'A sixth-semester Information Technology Education student with organizational experience in human resources and project management. Skilled in web development, especially in building static and dynamic websites using Laravel, React JS, and Node JS. Experienced as a Project Manager leading teams of 5–10 people through structured planning, task allocation, resource management, and progress monitoring using Agile and Waterfall methodologies. Also interested in data analysis, particularly processing, interpreting, and presenting data-driven insights to support decision-making, with hands-on experience in algorithms such as association rules and Naive Bayes. Able to work independently and collaboratively in multidisciplinary teams.',
  detailedBio: [
    'I am an Information Technology Education student who combines technical skills, organizational experience, and leadership capabilities to deliver impactful digital solutions. My background covers web development, project coordination, and data analysis, allowing me to contribute across both technical and managerial aspects of a project.',
    'In web development, I have practical experience building static and dynamic websites using Laravel, React JS, and Node JS. I also enjoy turning complex requirements into structured, efficient, and user-friendly systems.',
    'Beyond development, I am motivated by data-driven problem solving. I have explored data analysis techniques such as association rules and Naive Bayes, and I enjoy transforming raw data into useful insights that support better decision-making.'
  ],
  email: 'wardanitikna@gmail.com',
  phone: '+62 853-3569-8510',
  whatsappNumber: '6285335698510',
  location: 'Malang, Indonesia (Open to Remote)',
  availability: 'Available for Hire',
  availabilityText: 'Available for Full-time, Contract, Internship, and Freelance Project Opportunities',
  avatarUrl: omaiAvatar,
  yearsOfExperience: 2,
  completedProjectsCount: 8,
  satisfiedClientsCount: 19,
  certificationsCount: 36,
  socials: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alvina-damayanti-tikna',
      iconName: 'linkedin',
      handle: 'in/alvina-damayanti-tikna'
    },
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/alvina3021/',
      iconName: 'github',
      handle: '@alvina3021'
    },
    {
      id: 'mail',
      name: 'Direct Email',
      url: 'mailto:wardanitikna@gmail.com',
      iconName: 'mail',
      handle: 'wardanitikna@gmail.com'
    },
    {
      id: 'phone',
      name: 'WhatsApp Business',
      url: 'https://wa.me/6285335698510',
      iconName: 'phone',
      handle: '+62 853-3569-8510'
    }
  ],
  coreValues: [
    {
      title: 'User-Centered Design',
      description: 'Ensuring every interface is intuitive, easy to navigate, and visually comfortable for a wide range of users.',
      icon: 'Layout'
    },
    {
      title: 'Clean & Tested Code',
      description: 'Writing modular, structured TypeScript code with clear documentation and adherence to SOLID and DRY principles.',
      icon: 'Code2'
    },
    {
      title: 'Performance & Speed',
      description: 'Optimizing bundle size, image loading, Core Web Vitals, and smart caching to deliver fast and smooth experiences.',
      icon: 'Zap'
    },
    {
      title: 'Communication & Collaboration',
      description: 'Staying transparent in progress updates, communicating clearly in sprints, and welcoming technical discussions and feedback.',
      icon: 'MessageSquareCheck'
    }
  ],
  skillCategories: [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Building modern, dynamic, interactive, and responsive user interfaces.',
      icon: 'Monitor',
      skills: [
        { name: 'TypeScript / JavaScript (ES6+)', level: 95, experienceYears: '4+ Tahun' },
        { name: 'React.js & Next.js (App Router)', level: 92, experienceYears: '4 Tahun' },
        { name: 'Tailwind CSS & Modern CSS', level: 96, experienceYears: '4 Tahun' },
        { name: 'State Management (Zustand, Redux)', level: 88, experienceYears: '3 Tahun' },
        { name: 'HTML5 Semantic & Web Accessibility (a11y)', level: 94, experienceYears: '4 Tahun' },
        { name: 'Responsive Web & Mobile-First UI', level: 96, experienceYears: '4 Tahun' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Database',
      description: 'Developing server architecture, RESTful/GraphQL APIs, and database management solutions.',
      icon: 'Server',
      skills: [
        { name: 'Node.js & Express.js / NestJS', level: 90, experienceYears: '3+ Tahun' },
        { name: 'RESTful API & GraphQL Design', level: 92, experienceYears: '3 Tahun' },
        { name: 'PostgreSQL & MySQL (Prisma / Drizzle ORM)', level: 88, experienceYears: '3 Tahun' },
        { name: 'MongoDB & Firestore / Redis Cache', level: 85, experienceYears: '3 Tahun' },
        { name: 'Autentikasi (OAuth 2.0, JWT, Firebase Auth)', level: 90, experienceYears: '3 Tahun' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps, Cloud & Tools',
      description: 'Automated deployment, cloud infrastructure, and development collaboration tools.',
      icon: 'Cloud',
      skills: [
        { name: 'Git, GitHub Actions & CI/CD Pipelines', level: 90, experienceYears: '4 Tahun' },
        { name: 'Docker & Containerization Dasar', level: 82, experienceYears: '2 Tahun' },
        { name: 'Google Cloud Platform (GCP) & Cloud Run', level: 85, experienceYears: '2+ Tahun' },
        { name: 'Vercel, Netlify & AWS S3 / Cloudflare', level: 92, experienceYears: '3 Tahun' },
        { name: 'Postman, Swagger & API Documentation', level: 94, experienceYears: '4 Tahun' }
      ]
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Event Management Specialist',
      company: 'YouthGrow Ventures',
      companyUrl: 'https://www.instagram.com/youthgrowth_ventures/',
      location: 'Jakarta, Indonesia',
      locationType: 'Remote',
      employmentType: 'Internship',
      period: {
        start: 'Aug 2026',
        end: 'Present',
        isCurrent: true,
        duration: '1 bulan'
      },
      summary: 'Led event execution and speaker coordination by managing the event team, communicating with speakers, collecting required materials, and ensuring all operational and event requirements were completed on schedule.',
      highlights: [
        'Served as Project Lead, coordinating the event team and overseeing project execution to ensure all event requirements, timelines, and operational needs were properly fulfilled.',
        'Served as a Liaison Officer (LO) for confirmed speakers, maintaining proactive communication and ensuring speaker needs were properly coordinated.',
        'Conducted follow-up communication with speakers via WhatsApp and collected essential speaker data, including CVs, photos for publication, and Instagram accounts for tagging purposes.',
        'Managed speaker communication and requirements through consistent follow-ups, ensuring all necessary preparations and information were completed ahead of the event day.'
      ],
      technologies: ['Google Workspace']
    },
    {
      id: 'exp-2',
      role: 'Brand Ambassador',
      company: 'PopSurvey',
      companyUrl: 'https://www.instagram.com/pop.survey/',
      location: 'Jakarta Barat, Indonesia',
      locationType: 'Remote',
      employmentType: 'Full-time',
      period: {
        start: 'Aug 2026',
        end: 'Present',
        isCurrent: true,
        duration: '1 bulan'
      },
      summary: 'Build a content in instagram and TikTok to promote PopSurvey brand and products, while maintaining brand guidelines and strengthening communication and content writing skills.',
      highlights: [
        'Created and managed Instagram and TikTok content to promote PopSurvey’s brand and products.',
        'Developed engaging copy and content concepts while maintaining consistency with PopSurvey’s brand guidelines.',
        'Strengthened communication, content writing, and social media marketing skills through consistent content development.'
      ],
      technologies: ['Tik Tok', 'Instagram']
    },
    {
      id: 'exp-3',
      role: 'Supervisor Project Officer',
      company: 'Teman Ambiss',
      companyUrl: 'https://www.instagram.com/temanambiss/',
      location: 'Yogyakarta, Indonesia',
      locationType: 'Remote',
      employmentType: 'Internship',
      period: {
        start: 'Mar 2026',
        end: 'Sep 2026',
        isCurrent: false,
        duration: '6 bulan'
      },
      summary: 'Led 2 projects by coordinating a 15-member team and 4 departments, managing sponsor and media partner outreach, and ensuring smooth project execution',
      highlights: [
        'Successfully led the execution of 2 projects Business Case Event and Pitch Deck Workshop by coordinating cross-functional teams and project workflows, achieving 82% of the established project success indicators.',
        'Managed and monitored a team of 15 members, maintaining task alignment and execution quality to support the successful delivery of both projects.',
        'Conducted sponsor and media partner outreach, engaging with 20 potential sponsors and securing 10 media partners to support partnership and revenue objectives., including CVs, photos for publication, and Instagram accounts for tagging purposes.',
        'Collaborated cross-functionally with 4 departments (ICT, Marketing, HR, and Operations) to align project requirements, coordinate partner deliverables, and ensure efficient execution; recognized as Best Supervisor of July for leadership and project contribution.'
      ],
      technologies: ['Google Workspace', 'Zoom', 'Google Meet']
    },
    {
      id: 'exp-4',
      role: 'Brand Ambassador Batch 3',
      company: 'MySkill',
      companyUrl: 'https://www.instagram.com/myskill.id/',
      location: 'South Jakarta, Indonesia',
      locationType: 'Remote',
      employmentType: 'Full-time',
      period: {
        start: 'May 2026',
        end: 'Aug 2026',
        isCurrent: false,
        duration: '3 bulan'
      },
      summary: 'Produced and analyzed 13 TikTok content pieces over 3 months, achieving approximately 2× growth in average views while strengthening content writing, communication, and social media performance analysis skills.',
      highlights: [
        'Developed and published 13 TikTok content pieces based on MySkill’s content guidelines, achieving 5 videos with over 1,000 views and approximately 2× growth compared to the initial average of 500 views.',
        'Planned and analyzed social media content performance by evaluating views, engagement, and content effectiveness, contributing to the improvement of content reach with 38% of newly created content surpassing 1,000 views.',
        'Strengthened on-camera communication and content writing skills through consistent content production over 3 months, successfully completing 13 content deliverables while maintaining alignment with MySkill’s communication and branding standards.'
      ],
      technologies: ['Tik Tok', 'Instagram']
    },
    {
      id: 'exp-5',
      role: 'Digital learning environment assistant',
      company: 'Filkom UB',
      companyUrl: 'https://www.instagram.com/filkomub/',
      location: 'Malang, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Mar 2026',
        end: 'jun 2026',
        isCurrent: false,
        duration: '4 bulan'
      },
      summary: 'Developed and delivered practical learning modules and academic support aligned with course learning outcomes, achieving a 90% student success rate through effective instruction, assessment, and feedback.',
      highlights: [
        'Developed 4 digital learning modules aligned with the course learning outcomes (Capaian Pembelajaran) to support practical learning activities.',
        'Facilitated practical learning sessions, guided students in completing assignments, and provided academic assistance throughout the course.',
        'Assessed student learning progress and delivered constructive feedback to improve learning outcomes.',
        'Achieved a 90% student success rate in meeting the expected learning outcomes based on practical examinations and course assessments.'
      ],
      technologies: ['Assembler studio', 'Google workspace', 'Moodle', 'Google Meet']
    },
    {
      id: 'exp-6',
      role: 'Full-Stack Web Developer',
      company: 'Dinas Komunikasi & Informatika Kabupaten Madiun',
      companyUrl: 'https://www.instagram.com/kominfokabmadiun//',
      location: 'Malang, Indonesia',
      locationType: 'On-site',
      employmentType: 'Internship',
      period: {
        start: 'Dec 2025',
        end: 'Jan 2026',
        isCurrent: false,
        duration: '1 bulan'
      },
      summary: 'Developed a responsive full-stack document management platform using React and Node.js, integrating secure authentication and public sharing features while improving document management efficiency, accessibility, and user experience.',
      highlights: [
        'Developed a responsive full-stack document management platform using React and Node.js, improving document storage, organization, and retrieval efficiency by 65% across desktop and mobile devices',
        'Implemented secure authentication with JSON Web Token and generated shareable public access links, reducing unauthorized access risks while streamlining external document sharing by 80%',
        'Designed a modern purple-themed UI, enhancing user experience, accessibility, and overall system responsiveness by 70%.'
      ],
      technologies: ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'XAMPP', 'Git', 'Figma']
    },
    {
      id: 'exp-7',
      role: 'Computer Networking Lab Assistant',
      company: 'Filkom UB',
      companyUrl: 'https://www.instagram.com/filkomub/',
      location: 'Malang, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Sep 2025',
        end: 'Des 2025',
        isCurrent: false,
        duration: '4 bulan'
      },
      summary: 'Assisted and mentored undergraduate students in computer network laboratories by facilitating practical sessions, providing technical guidance, preparing learning materials, evaluating assignments, and delivering constructive feedback to improve learning outcomes.',
      highlights: [
        'Assisted lecturers in conducting computer network laboratory sessions for undergraduate students, ensuring smooth and effective practical learning.',
        'Guided students in configuring network devices, IP addressing, subnetting, routing, and troubleshooting network connectivity issues.',
        'Provided technical assistance and one-on-one mentoring to help students understand networking concepts and complete laboratory assignments.',
        'Evaluated students practical assignments and provided constructive feedback to improve learning outcomes.Prepared learning materials while ensuring a conducive and organized practical learning environment.'
      ],
      technologies: ['Cisco Packet Tracer', 'Google workspace']
    },
    {
      id: 'exp-8',
      role: 'Facilitator for “AI Training in Supporting Learning at Vocational Schools”',
      company: 'Filkom UB',
      companyUrl: 'https://example.com',
      location: 'Yogyakarta, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Agu 2025',
        end: 'Agu 2025',
        isCurrent: false,
        duration: '1 Bulan'
      },
      summary: 'Facilitated an AI training program in vocational schools by developing an AI-based learning module with Gamma AI and providing hands-on guidance to teachers for instructional activities.',
      highlights: [
        'Served as a facilitator in 1 AI training program, supporting learning implementation in vocational schools.',
        'Assisted in developing 1 AI-based learning module using Gamma AI, contributing to 100% completion of the curriculum development process for presentation and instructional purposes.',
        'Provided hands-on training and guidance to teachers in 1 training session on utilizing Gamma AI for instructional activities.'
      ],
      technologies: ['Google Workspace', 'Gamma AI']
    },
    {
      id: 'exp-9',
      role: 'Expert Staff of the Ministry of Strategic Studies and Action',
      company: 'Badan Eksekutif Mahasiswa (BEM) Filkom UB',
      companyUrl: 'https://www.instagram.com/bemfilkomub/',
      location: 'Malang, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Jan 2024',
        end: 'Jan 2025',
        isCurrent: false,
        duration: '1 tahun'
      },
      summary: 'Coordinated cross-divisional and cross-organizational initiatives by supervising teams, managing institutional programs, aligning stakeholders, and ensuring the timely execution of strategic activities.',
      highlights: [
        'Served as Deputy Chair in coordinating and supervising multiple divisions for a discussion forum, ensuring 100% completion of key preparation and execution tasks through structured team coordination.',
        'Led the faculty’s internal institutional visit program end-to-end, coordinating stakeholders, timelines, and operational requirements to achieve 86% completion of planned activities.',
        'Collaborated across ministries and organizational units to support strategic programs, strengthen internal coordination, and ensure timely execution of organizational initiatives.'
      ],
      technologies: ['Google Meet', 'Zoom', 'Google Workspace', 'Google Drive']
    },
    {
      id: 'exp-10',
      role: 'Production Crew Karadoks',
      company: 'Badan Eksekutif Mahasiswa (BEM) Filkom UB',
      companyUrl: 'https://www.instagram.com/bemfilkomub/',
      location: 'Malang, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Sep 2024',
        end: 'Nov 2025',
        isCurrent: false,
        duration: '2 tahun'
      },
      summary: 'Coordinated event production and cross-team operations to ensure smooth, timely, and high-quality program execution.',
      highlights: [
        'Coordinated production activities and supported end-to-end event execution, ensuring all program segments were delivered according to the event timeline.',
        'Collaborated with directors, performers, and organizing committee members to facilitate smooth communication and efficient production workflows.',
        'Directed and guided actors performances to ensure alignment with the script, maintaining consistency and quality throughout the production.',
        ' Assisted in stage preparation, technical coordination, and rehearsal management, contributing to seamless event operations and on-time performance delivery.'
      ],
      technologies: ['Google Meet', 'Zoom', 'Google Workspace', 'Google Drive']
    },
    {
      id: 'exp-11',
      role: 'Public Relations Staff',
      company: 'Debug 2.0 x The Role of Puan',
      companyUrl: 'https://www.instagram.com/bemfilkomub/',
      location: 'Malang, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Sep 2024',
        end: 'Sep 2024',
        isCurrent: false,
        duration: '1 bulan'
      },
      summary: 'Managed event communication strategy, audience engagement, and stakeholder coordination for Debug 2.0 x The Role of Puan organized by BEM FILKOM UB.',
      highlights: [
        'Developed content ideas and captions that increased audience engagement by approximately 60% across event communication channels.',
        'Served as PIC/Liaison Officer for participants and speakers, managing communication, follow-ups, and information flow to ensure 100% of key event information was communicated on schedule.',
        'Coordinated event communication with internal teams and external stakeholders, contributing to an 80% reduction in miscommunication issues during preparation and execution.'
      ],
      technologies: ['Content Planning', 'Event Communication', 'Stakeholder Coordination']
    },
    {
      id: 'exp-12',
      role: 'Public Relations Staff',
      company: 'Gebyar Brawijaya Qur\'ani Nasional X 2024',
      companyUrl: 'https://www.instagram.com/senireligiub/',
      location: 'Malang, East Java, Indonesia',
      locationType: 'On-site',
      employmentType: 'Full-time',
      period: {
        start: 'Aug 2024',
        end: 'Oct 2024',
        isCurrent: false,
        duration: '3 bulan'
      },
      summary: 'Supported communication strategy and stakeholder coordination for Gebyar Brawijaya Qur\'ani Nasional X 2024 to maximize audience engagement and event information clarity.',
      highlights: [
        'Developed content ideas and captions that increased audience engagement by approximately 70% across event communication channels.',
        'Served as a Liaison Officer (PIC) for participants and speakers, coordinating communication and ensuring 100% of key event information was delivered on schedule.',
        'Supported event communication and stakeholder coordination, contributing to an 86% reduction in miscommunication issues during event preparation and execution.'
      ],
      technologies: ['Content Strategy', 'Public Relations', 'Event Communication']
    },
  ],
  educations: [
    {
      id: 'edu-1',
      institution: 'University of Brawijaya',
      degree: 'Pendidikan Teknologi Informasi',
      major: 'Pendidikan Teknologi Informasi',
      location: 'Malang, Indonesia',
      period: {
        start: 'Aug 2023',
        end: 'Aug 2027'
      },
      gpa: '3,83',
      gpaScale: '4.00',
      relevantCourses: [
        'Desain kurikulum dan bahan ajar',
        'Penyusunan lesson plan dan teaching module',
        'Kegiatan pembelajaran di kelas sesuai standar kurikulum dan kebutuhan siswa',
        'Programming fundamentals, OOP, dan pengembangan web aplikasi',
        'Responsive web interfaces, UI design, dan full-stack web applications',
        'Database management, database design, REST API, dan Git',
        'Software Development Life Cycle (SDLC) dan Product Life Cycle (PLC)',
        'Penggunaan AI-assisted development untuk coding, debugging, dan workflow pengembangan'
      ],
      activitiesAndSocieties: [
        'Mempelajari desain kurikulum, bahan ajar, dan pembelajaran berbasis kebutuhan siswa.',
        'Menekuni pemrograman Java, PHP, Python, dan JavaScript serta web development.',
        'Membangun kemampuan UI design, full-stack web application, database design, dan REST API integration.'
      ],
      honors: [
        'Grade: 3,83'
      ]
    }
  ],
  awards: [
    {
      id: 'award-1',
      title: 'Best Head for February 2026',
      issuer: 'Growth Skill',
      year: '2026',
      month: 'February',
      level: 'Apprenticeship',
      category: 'Leadership & Team Coordination',
      description: 'Recognized as Best Head for February 2026 for strong leadership, coordination, and team contribution during the apprenticeship period.',
      associatedWith: 'Growth Skill',
      proofBadge: 'Best Head'
    },
    {
      id: 'award-2',
      title: 'Best Head for April 2026',
      issuer: 'Growth Skill',
      year: '2026',
      month: 'April',
      level: 'Full-time',
      category: 'Leadership & Team Coordination',
      description: 'Awarded as Best Head for April 2026 in recognition of strong leadership, contribution, and performance in a full-time role.',
      associatedWith: 'Growth Skill',
      proofBadge: 'Best Head'
    },
    {
      id: 'award-3',
      title: 'Best SPV July Edition',
      issuer: 'Teman Ambiss',
      year: '2026',
      month: 'July',
      level: 'Internship',
      category: 'Leadership & Supervision',
      description: 'Recognized as Best SPV July Edition for outstanding supervision, coordination, and team management during the internship period.',
      associatedWith: 'Teman Ambiss',
      proofBadge: 'Best SPV'
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Sistem Pendukung Keputusan Kompetensi Nasional',
      slug: 'sistem-pendukung-keputusan-kompetensi-nasional',
      category: 'Full Stack',
      featured: true,
      shortDescription: 'Responsive web-based Decision Support System untuk penilaian siswa dan seleksi kompetisi nasional.',
      fullDescription: 'Designed and developed a responsive web-based Decision Support System with 90% responsiveness to support student assessment and competition selection processes. Developed the full-stack UI and backend system with 100% implementation success based on the defined functional requirements and system features. Implemented Logistic Regression to classify students based on their readiness to participate in national competitions, supported by Simple Additive Weighting (SAW) to calculate weighted scores across assessment criteria. Integrated SAW weighting calculations across student assessment features to support systematic and data-driven competition candidate selection.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['React', 'Node.js', 'Laravel', 'MySQL', 'Machine Learning', 'SAW'],
      role: 'Full-Stack Developer',
      timeline: 'Mar 2026 – Jun 2026',
      client: 'Kompetensi Nasional',
      keyFeatures: [
        'Membangun sistem keputusan berbasis web dengan responsivitas mencapai 90%.',
        'Mengembangkan UI dan backend full-stack dengan 100% kesesuaian fitur berdasarkan requirements.',
        'Mengimplementasikan Logistic Regression untuk klasifikasi kesiapan siswa mengikuti kompetisi.',
        'Mengintegrasikan perhitungan SAW pada fitur penilaian siswa untuk seleksi kandidat yang lebih sistematis dan data-driven.'
      ]
    },
    {
      id: 'proj-2',
      title: 'HR Recruiter Portofolio SocialVit',
      slug: 'hr-recruiter-portofolio-socialvit',
      category: 'Web App',
      featured: true,
      shortDescription: 'Portofolio HR recruitment yang mencakup dokumen rekrutmen, analisis kasus, dan panduan interview.',
      fullDescription: 'Developed a comprehensive HR recruitment portfolio covering key documents used across the end-to-end hiring process. This project demonstrates practical skills in HR documentation, recruitment planning, and candidate evaluation. Key deliverables include employment contract, offering letter, recruiter case analysis, job flyer, interview guideline, and job requirement & job description. This project reflects hands-on experience in talent acquisition, recruitment documentation, and HR process improvement, with a strong focus on accuracy, compliance, and candidate experience.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['Human Resources (HR)', 'Recruitment', 'Documentation', 'Talent Acquisition'],
      role: 'HR Recruitment Portfolio Developer',
      timeline: 'Jan 2026 – Apr 2026',
      client: 'SocialVit',
      keyFeatures: [
        'Menyusun employment contract dan offering letter yang standar dan sesuai regulasi.',
        'Menyusun recruiter case analysis dengan rekomendasi peningkatan efisiensi hiring.',
        'Mendesain job flyer sebagai media promosi open position.',
        'Membuat interview guideline dan job description yang ATS-friendly serta kompetensi-based.'
      ]
    },
    {
      id: 'proj-3',
      title: 'HangoutU',
      slug: 'hangoutu',
      category: 'UI/UX Design',
      featured: false,
      shortDescription: 'Prototype aplikasi mental health untuk mahasiswa Ilmu Komputer Universitas Brawijaya.',
      fullDescription: 'HangoutU is a prototype mental health application project for computer science students at Brawijaya University. This project is part of an IT project management course assignment that directs a team of four people to design an application prototype with business feasibility study outputs and an application prototype in Figma. In my team, I also contributed as a UI designer, while other members helped as UX designers by analyzing user needs and user experience.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['Figma', 'UI Design', 'UX Research', 'Project Management'],
      role: 'UI Designer',
      timeline: 'Sep 2025 – Dec 2025',
      client: 'Brawijaya University',
      keyFeatures: [
        'Mendesain prototype aplikasi mental health yang relevan untuk kebutuhan mahasiswa.',
        'Berkontribusi pada pembuatan business feasibility study dan prototyping berbasis Figma.',
        'Bekerja kolaboratif dengan tim UX untuk menganalisis kebutuhan pengguna dan pengalaman pengguna.'
      ]
    },
    {
      id: 'proj-4',
      title: 'SMK5Test',
      slug: 'smk5test',
      category: 'Web App',
      featured: false,
      shortDescription: 'Website untuk tes kepribadian, perencanaan karier, dan minat bakat yang didesain dengan interface menarik.',
      fullDescription: 'A website for conducting tests such as personality tests, career planning, talent interests, and so on. I also served as project manager, directing a team of five people to help test the website and design it based on an attractive interface and user experience. I also contributed to communicating with stakeholders to ensure the smooth running of the project and the adjustment of features and design.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['PHP', 'Laravel', 'UI/UX', 'Project Management'],
      role: 'Project Manager',
      timeline: 'Oct 2025 – Dec 2025',
      keyFeatures: [
        'Memimpin tim lima orang dalam perencanaan, desain, dan pengujian website.',
        'Mengkomunikasikan kebutuhan stakeholders untuk menjaga kelancaran proyek.',
        'Mengatur penyesuaian fitur dan desain berdasarkan kebutuhan dan pengalaman pengguna.'
      ]
    },
    {
      id: 'proj-5',
      title: 'Sistem Prediksi Kesehatan Mental Mahasiswa',
      slug: 'sistem-prediksi-kesehatan-mental-mahasiswa',
      category: 'Full Stack',
      featured: true,
      shortDescription: 'Sistem prediksi kesehatan mental mahasiswa berbasis web dengan analisis aturan asosiasi Apriori.',
      fullDescription: 'Analysis of student mental health data using the A Priori association rule algorithm by matching items based on their support, confidence, and lift values. Conducted mental health data analysis using the Apriori association rule algorithm with 90% analytical accuracy, identifying meaningful patterns based on support, confidence, and lift values. Developed a web-based mental health prediction system with 88% functional accuracy, integrating association rule results to generate data-driven insights.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['Python', 'Apriori', 'Data Analysis', 'Web Development'],
      role: 'Data Analyst & Web Developer',
      timeline: 'Nov 2025 – Dec 2025',
      keyFeatures: [
        'Menganalisis data kesehatan mental mahasiswa dengan algoritma Apriori.',
        'Menghasilkan pola dan insight berbasis support, confidence, dan lift.',
        'Membangun sistem web prediksi kesehatan mental dengan akurasi fungsional 88%.'
      ]
    },
    {
      id: 'proj-6',
      title: 'IBM Data',
      slug: 'ibm-data',
      category: 'Web App',
      featured: false,
      shortDescription: 'Analisis tren dataset mahasiswa menggunakan IBM Granite AI untuk menemukan insight pembelajaran.',
      fullDescription: 'Trend analysis of student datasets with the help of IBM Granite AI to find interesting insights from the data, namely learning outcomes, influencing factors, and recommendations to improve learning outcomes. Analyzed student datasets using IBM Granite AI to identify trends and patterns related to learning outcomes and student performance. Explored potential factors influencing student learning outcomes by interpreting patterns and relationships within the dataset. Generated data-driven insights to identify key factors associated with student learning outcomes. Developed recommendations based on analytical findings to support potential improvements in student learning outcomes.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1558494949-b6f399a5f0d6?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1558494949-b6f399a5f0d6?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['IBM Granite AI', 'Data Analysis', 'Python', 'Insight Generation'],
      role: 'Data Analyst',
      timeline: 'Sep 2025 – Sep 2025',
      keyFeatures: [
        'Menganalisis dataset mahasiswa untuk mengetahui tren hasil belajar.',
        'Mengidentifikasi faktor yang memengaruhi capaian belajar siswa.',
        'Menyusun rekomendasi berbasis insight data untuk peningkatan hasil belajar.'
      ]
    },
    {
      id: 'proj-7',
      title: 'SumbangYuk',
      slug: 'sumbangyuk',
      category: 'Web App',
      featured: false,
      shortDescription: 'Static web app untuk donasi barang bekas dengan desain menarik dan fokus pada UI/UX.',
      fullDescription: 'A static web app that functions to donate used items with an attractive design. This website is designed using HTML, CSS, and basic JavaScript. It is designed to focus on the UI and UX for users, so appearance and interactivity are prioritized.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
      role: 'Frontend Developer',
      timeline: 'May 2025 – Jun 2025',
      keyFeatures: [
        'Mengembangkan static web app donasi barang bekas dengan UI yang responsif dan menarik.',
        'Menerjemahkan desain UI/UX menjadi fitur interaktif front-end yang smooth.',
        'Memprioritaskan aksesibilitas, navigasi, dan pengalaman pengguna.'
      ]
    },
    {
      id: 'proj-8',
      title: 'SheHer',
      slug: 'sheher',
      category: 'Full Stack',
      featured: false,
      shortDescription: 'Community article platform untuk SheHer Community dengan fitur CRUD artikel berbasis Laravel.',
      fullDescription: 'Web Application Upload articles and view articles related to women in the SheHer community. This website has functions for uploading articles and viewing articles. This application was developed using PHP and the Laravel framework. In this project, I also participated as a project manager in directing a team of 5 people in creating the website, with the members designing user requirements analysis, web design, and testing features and bugs on the website.',
      thumbnailUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      previewImages: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'CRUD', 'Project Management'],
      role: 'Project Manager & Full-Stack Developer',
      timeline: 'May 2024 – Jun 2024',
      keyFeatures: [
        'Membangun platform artikel komunitas full-stack dengan Laravel.',
        'Menyediakan CRUD module untuk publikasi, edit, dan hapus artikel.',
        'Memimpin tim lima orang dalam analisis kebutuhan, desain web, dan testing bug.'
      ]
    }
  ],
  certifications: [
    {
      id: 'cert-2',
      name: 'Belajar Menjadi Front-End Web Developer Expert',
      issuer: 'Dicoding Indonesia (Terakreditasi Kemkominfo)',
      issueDate: 'Jan 2023',
      isNeverExpires: true,
      credentialId: 'DICODING-FE-EXPERT-4412',
      credentialUrl: 'https://dicoding.com/certificates',
      category: 'Web Development',
      skillsCovered: ['Progressive Web Apps (PWA)', 'Web Performance Optimization', 'Clean Architecture', 'Automated Testing with Jest', 'Web Workers'],
      description: 'Kurikulum intensif tingkat mahir pembuatan aplikasi web dengan PWA, push notification, service workers, dan optimasi performa berstandar internasional.'
    },
    {
      id: 'cert-5',
      name: 'Menjadi Back-End Developer Expert dengan Node.js',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Agu 2022',
      isNeverExpires: true,
      credentialId: 'DICODING-BE-EXPERT-1092',
      credentialUrl: 'https://dicoding.com/certificates',
      category: 'Software Engineering',
      skillsCovered: ['Node.js & Hapi/Express', 'PostgreSQL & Database Transactions', 'Message Broker RabbitMQ', 'Redis Caching', 'CI/CD Automation'],
      description: 'Pelatihan mendalam perancangan RESTful API teruji dengan proteksi rate limiting, autentikasi token JWT, dan antrean pesan asynchronous.'
    },
    {
      id: 'cert-20',
      name: 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Jun 2026',
      expirationDate: 'Jun 2029',
      credentialId: 'GRX5W1VVRZ0M',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'AI & Data',
      skillsCovered: ['Microsoft Azure', 'Generative AI', 'AI Application Development'],
      description: 'Pelatihan pembangunan aplikasi berbasis generative AI dengan Microsoft Azure dan penerapan teknologinya dalam solusi digital.'
    },
    {
      id: 'cert-21',
      name: 'AWS Academy Graduate Cloud Foundations Training Badge',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'Mei 2026',
      credentialId: 'AWS-Academy-Cloud-Foundations',
      credentialUrl: 'https://aws.amazon.com/training/awsacademy/',
      category: 'Cloud & DevOps',
      skillsCovered: ['AWS Cloud Foundations', 'Cloud Fundamentals', 'AWS Core Services'],
      description: 'Pengakuan atas pemahaman dasar cloud computing dan infrastruktur AWS melalui program AWS Academy.'
    },
    {
      id: 'cert-22',
      name: 'Belajar Dasar Pemrograman JavaScript',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Feb 2026',
      expirationDate: 'Feb 2029',
      credentialId: 'ERZRLM6QQZYV',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'Web Development',
      skillsCovered: ['JavaScript', 'Programming Basics', 'Web Development'],
      description: 'Sertifikasi dasar untuk membangun fondasi pemrograman JavaScript dan logika web development.'
    },
    {
      id: 'cert-23',
      name: 'Belajar Back-End Pemula dengan JavaScript',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Feb 2026',
      expirationDate: 'Feb 2029',
      credentialId: '98XW0R9M9XM3',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'Web Development',
      skillsCovered: ['Backend JavaScript', 'Node.js', 'REST API Basics'],
      description: 'Pelatihan dasar pengembangan backend dengan JavaScript untuk membangun API dan layanan server-side.'
    },
    {
      id: 'cert-24',
      name: 'Memulai Pemrograman dengan Python',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Feb 2026',
      expirationDate: 'Feb 2029',
      credentialId: 'QLZ991RE7Z5D',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'Software Engineering',
      skillsCovered: ['Python', 'Programming Fundamentals', 'Problem Solving'],
      description: 'Belajar pemrograman Python dari fundamental untuk pengembangan aplikasi dan automasi.'
    },
    {
      id: 'cert-25',
      name: 'Belajar Dasar Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Jan 2026',
      expirationDate: 'Jan 2029',
      credentialId: '81P250NDNPOY',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'Database',
      skillsCovered: ['SQL', 'Database Query', 'Data Retrieval'],
      description: 'Sertifikasi dasar dalam penggunaan SQL untuk mengelola dan mengambil data secara efektif.'
    },
    {
      id: 'cert-26',
      name: 'Belajar Dasar Data Science',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Jan 2026',
      expirationDate: 'Jan 2029',
      credentialId: '4EXG30QJQZRL',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'AI & Data',
      skillsCovered: ['Data Analysis', 'Data Science', 'Data Processing'],
      description: 'Pengenalan dasar data science, analisis data, dan teknik eksplorasi data yang berguna untuk pengambilan keputusan.'
    },
    {
      id: 'cert-27',
      name: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Jan 2026',
      expirationDate: 'Jan 2029',
      credentialId: 'GRX5J89WKX0M',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'AI & Data',
      skillsCovered: ['Microsoft Fabric', 'Machine Learning', 'Data Science'],
      description: 'Pelatihan penerapan data science dengan Microsoft Fabric untuk analisis data modern dan data-driven workflows.'
    },
    {
      id: 'cert-28',
      name: 'Eksekusi Proyek: Menjalankan Proyek',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'EF0SIYESYMZB',
      credentialUrl: 'https://grow.google/',
      category: 'Software Engineering',
      skillsCovered: ['Project Execution', 'Project Management', 'Delivery'],
      description: 'Program pembelajaran tentang eksekusi proyek, koordinasi tim, dan penyelesaian tugas sesuai rencana.'
    },
    {
      id: 'cert-29',
      name: 'Manajemen Proyek Agile',
      issuer: 'Google',
      issueDate: 'Dec 2025',
      credentialId: 'CCNG4V4OO5QT',
      credentialUrl: 'https://grow.google/',
      category: 'Software Engineering',
      skillsCovered: ['Agile', 'Project Management', 'Sprint Planning'],
      description: 'Belajar prinsip manajemen proyek Agile untuk menyelesaikan pekerjaan secara iteratif dan kolaboratif.'
    },
    {
      id: 'cert-30',
      name: 'Intermediate Project Management',
      issuer: 'Digital Talent Scholarship',
      issueDate: 'Nov 2025',
      credentialId: '19511316840-895',
      credentialUrl: 'https://digitalent.kominfo.go.id/',
      category: 'Software Engineering',
      skillsCovered: ['Project Management', 'AI', 'Leadership'],
      description: 'Pelatihan menengah manajemen proyek yang juga mengintegrasikan pemahaman AI dan peningkatan koordinasi tim.'
    },
    {
      id: 'cert-31',
      name: 'Perencanaan Proyek: Menyatukan Semuanya',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'XAP6Q9KIUH26',
      credentialUrl: 'https://grow.google/',
      category: 'Software Engineering',
      skillsCovered: ['Project Planning', 'Project Management', 'Stakeholder Alignment'],
      description: 'Menyatukan elemen perencanaan proyek agar proses pelaksanaan lebih terarah dan terukur.'
    },
    {
      id: 'cert-32',
      name: 'Google AI Essentials V1',
      issuer: 'Coursera',
      issueDate: 'Nov 2025',
      credentialId: 'Google-AI-Essentials-V1',
      credentialUrl: 'https://www.coursera.org/',
      category: 'AI & Data',
      skillsCovered: ['Artificial Intelligence', 'AI Tools', 'AI Productivity'],
      description: 'Pengenalan penggunaan AI secara praktis untuk meningkatkan efektivitas kerja dan produktivitas.'
    },
    {
      id: 'cert-33',
      name: 'Tetap di Depan Kurva AI',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: '5W03I9B4S3OR',
      credentialUrl: 'https://grow.google/',
      category: 'AI & Data',
      skillsCovered: ['Artificial Intelligence', 'AI Trend', 'AI Adaptation'],
      description: 'Pelatihan untuk mengikuti perkembangan AI dan menerapkan prinsip adaptasi teknologi secara bijak.'
    },
    {
      id: 'cert-34',
      name: 'Spesialisasi Google AI Essentials',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'LMCSD8FRZ300',
      credentialUrl: 'https://grow.google/',
      category: 'AI & Data',
      skillsCovered: ['Artificial Intelligence', 'AI Essentials', 'Digital Productivity'],
      description: 'Spesialisasi latihan AI yang membahas penggunaan AI secara efektif dan etis dalam berbagai tugas kerja.'
    },
    {
      id: 'cert-35',
      name: 'Gunakan AI secara Bertanggung Jawab',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'H0B0P2E20B8X',
      credentialUrl: 'https://grow.google/',
      category: 'AI & Data',
      skillsCovered: ['Responsible AI', 'AI Ethics', 'AI Governance'],
      description: 'Mempelajari prinsip penggunaan AI secara bertanggung jawab, aman, dan sesuai etika.'
    },
    {
      id: 'cert-36',
      name: 'Temukan Seni Membuat prompt',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'GWRMTS7D1R8Q',
      credentialUrl: 'https://grow.google/',
      category: 'AI & Data',
      skillsCovered: ['Prompt Engineering', 'AI Interaction', 'Generative AI'],
      description: 'Mempelajari teknik pembuatan prompt yang efektif dan efisien untuk mendapatkan output AI yang berkualitas.'
    },
    {
      id: 'cert-37',
      name: 'Inisiasi Proyek: Memulai Proyek yang Berhasil',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'XN3WW3H9OKP0',
      credentialUrl: 'https://grow.google/',
      category: 'Software Engineering',
      skillsCovered: ['Project Initiation', 'Project Management', 'Planning'],
      description: 'Belajar cara memulai proyek dengan tujuan yang jelas, stakeholder yang terdefinisi, dan jalur eksekusi yang terstruktur.'
    },
    {
      id: 'cert-38',
      name: 'Maksimalkan Produktivitas Dengan Alat Bantu AI',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'X2KFZHO1DNU5',
      credentialUrl: 'https://grow.google/',
      category: 'AI & Data',
      skillsCovered: ['AI Productivity', 'Workflow Optimization', 'Automation'],
      description: 'Mengoptimalkan produktivitas kerja melalui pemanfaatan alat bantu AI dan otomatisasi tugas.'
    },
    {
      id: 'cert-39',
      name: 'Pengantar AI',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'GG8W4R8HO5J5',
      credentialUrl: 'https://grow.google/',
      category: 'AI & Data',
      skillsCovered: ['Artificial Intelligence', 'AI Fundamentals', 'AI Use Cases'],
      description: 'Pengantar dasar AI dan bagaimana teknologi ini dapat diterapkan pada pekerjaan dan produk digital.'
    },
    {
      id: 'cert-40',
      name: 'Dasar-Dasar Manajemen Proyek',
      issuer: 'Google',
      issueDate: 'Nov 2025',
      credentialId: 'UY3X9FGKL0NU',
      credentialUrl: 'https://grow.google/',
      category: 'Software Engineering',
      skillsCovered: ['Project Management', 'Planning', 'Execution'],
      description: 'Membahas konsep dasar manajemen proyek, fokus pada perencanaan, koordinasi, dan penyelesaian tugas.'
    },
    {
      id: 'cert-41',
      name: 'Belajar Dasar Cloud dan Gen AI di AWS',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Oct 2025',
      expirationDate: 'Oct 2028',
      credentialId: '53XEKY5MKXRN',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'Cloud & DevOps',
      skillsCovered: ['Cloud Computing', 'Generative AI', 'AWS Basics'],
      description: 'Pelatihan dasar cloud computing dan penerapan generative AI di ekosistem AWS.'
    },
    {
      id: 'cert-42',
      name: 'Belajar Dasar AI',
      issuer: 'Dicoding Indonesia',
      issueDate: 'Oct 2025',
      expirationDate: 'Oct 2028',
      credentialId: '0LZ05YOO3X65',
      credentialUrl: 'https://www.dicoding.com/',
      category: 'AI & Data',
      skillsCovered: ['Artificial Intelligence', 'AI Basics', 'Data-Driven Thinking'],
      description: 'Mengenalkan konsep dasar AI serta cara memahami aplikasi dan manfaat teknologi AI secara umum.'
    },
    {
      id: 'cert-43',
      name: 'Kecerdasan Artifisial (Micro Skill)',
      issuer: 'Digital Talent Scholarship',
      issueDate: 'Jan 2025',
      credentialId: '2299748850-23102',
      credentialUrl: 'https://digitalent.kominfo.go.id/',
      category: 'AI & Data',
      skillsCovered: ['Artificial Intelligence', 'Micro Skill', 'AI Literacy'],
      description: 'Sertifikat mikro skill yang memperkuat literasi AI dan pemahaman dasar mengenai kecerdasan buatan.'
    },
    {
      id: 'cert-44',
      name: 'Fundamental Project Management',
      issuer: 'Digital Talent Scholarship',
      issueDate: 'Oct 2025',
      credentialId: '19511214840-580',
      credentialUrl: 'https://digitalent.kominfo.go.id/',
      category: 'Software Engineering',
      skillsCovered: ['Project Management', 'Planning', 'Team Coordination'],
      description: 'Pelatihan fundamental tentang perencanaan, koordinasi, dan pelaksanaan proyek secara efektif.'
    },
    {
      id: 'cert-45',
      name: 'Data Classification and Summarization',
      issuer: 'Hacktiv8 Indonesia',
      issueDate: 'Oct 2025',
      credentialId: 'Hacktiv8-Data-Classification-and-Summarization',
      credentialUrl: 'https://www.hacktiv8.com/',
      category: 'AI & Data',
      skillsCovered: ['Data Classification', 'Text Summarization', 'AI Data Processing'],
      description: 'Pelatihan mengenai klasifikasi data dan ringkasan informasi berbasis AI untuk memudahkan eksplorasi dan analisis data.'
    },
    {
      id: 'cert-46',
      name: 'Data Classification and Summarization Using IBM Granite',
      issuer: 'IBM',
      issueDate: 'Sep 2025',
      credentialId: 'IBM-Granite-Data-Summarization',
      credentialUrl: 'https://www.ibm.com/',
      category: 'AI & Data',
      skillsCovered: ['IBM Granite', 'Data Summarization', 'AI Data Analysis'],
      description: 'Pembelajaran terkait klasifikasi data dan ringkasan informasi menggunakan IBM Granite sebagai bagian dari solusi AI berbasis data.'
    },
    {
      id: 'cert-47',
      name: 'Mini Bootcamp Edspert.id “Web Development for Beginner : Belajar HTML hingga Fullstack”',
      issuer: 'Edspert.id',
      issueDate: 'Feb 2024',
      expirationDate: 'Feb 2024',
      credentialId: 'Edspert-Fullstack-Bootcamp',
      credentialUrl: 'https://edspert.id/',
      category: 'Web Development',
      skillsCovered: ['HTML', 'Full-Stack Development', 'Web Development'],
      description: 'Program bootcamp awal yang membahas dasar HTML hingga pengembangan full-stack web bagi pemula.'
    },
    {
      id: 'cert-48',
      name: 'Mini Bootcamp Edspert.id "Mulai Belajar IoT dari Nol di Tengah Peningkatan Kebutuhan Ahli IoT"',
      issuer: 'Edspert.id',
      issueDate: 'Feb 2024',
      expirationDate: 'Feb 2024',
      credentialId: 'Edspert-IoT-Bootcamp',
      credentialUrl: 'https://edspert.id/',
      category: 'Software Engineering',
      skillsCovered: ['Internet of Things', 'Embedded Systems', 'IoT Basics'],
      description: 'Bootcamp dasar Internet of Things (IoT) untuk memahami kebutuhan dan potensi solusi IoT di dunia industri.'
    },
    {
      id: 'cert-49',
      name: 'Fundamental Course Intro to Software Engineering',
      issuer: 'RevoU',
      issueDate: 'Feb 2025',
      expirationDate: 'Feb 2025',
      credentialId: 'RevoU-Intro-Software-Engineering',
      credentialUrl: 'https://revou.co/',
      category: 'Software Engineering',
      skillsCovered: ['Software Engineering', 'Software Development', 'System Thinking'],
      description: 'Fundamental course yang memperkenalkan konsep software engineering dan cara berpikir sistematis dalam pengembangan perangkat lunak.'
    }
  ],
  faqs: [
    {
      question: 'Apakah Anda terbuka untuk peluang kerja Full-Time atau Kontrak?',
      answer: 'Ya, saya sangat terbuka untuk posisi Full-Stack Engineer, Frontend Developer, maupun Backend Developer baik secara Remote, Hybrid, maupun On-Site di wilayah Jabodetabek atau Bandung.',
      category: 'Pekerjaan'
    },
    {
      question: 'Bagaimana alur kerja jika ingin bekerja sama untuk proyek freelance/konsultasi?',
      answer: 'Alurnya diawali dengan diskusi kebutuhan (scope of work), penyusunan timeline & proposal estimasi biaya, penandatanganan kesepakatan, pengerjaan bertahap (sprint dengan update rutin), pengujian bersama (UAT), hingga serah terima source code dan masa garansi pemeliharaan pasca-launching.',
      category: 'Proyek'
    },
    {
      question: 'Teknologi apa yang paling sering Anda gunakan dalam membangun aplikasi?',
      answer: 'Stack utama saya adalah TypeScript, React.js / Next.js untuk antarmuka web, Node.js / Express untuk backend, Tailwind CSS untuk styling, serta PostgreSQL / MySQL / Supabase untuk database, dengan deployment di GCP / Vercel.',
      category: 'Teknis'
    },
    {
      question: 'Berapa lama rata-rata waktu yang dibutuhkan untuk menyelesaikan sebuah proyek web?',
      answer: 'Tergantung kompleksitas: Landing page profesional biasanya selesai dalam 3-7 hari kerja. Aplikasi web interaktif / sistem internal bisnis skala menengah memerlukan 3-6 minggu.',
      category: 'Proyek'
    }
  ]
};