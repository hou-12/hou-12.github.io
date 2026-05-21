export const en = {
    // Navbar
    nav: {
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        downloadCv: 'Download CV',
    },

    // Hero
    hero: {
        badge: 'Available for Freelance',
        greeting: "Hi, I'm",
        name: 'Houssam',
        subtitle: 'Full-Stack Engineer — AI systems, Web3, and security-first architecture. Shipped to production.',
        bio: '"Architecture, Scalability, and Pixel-Perfection."',
        bioDetail: "Building ClinicVoice, a production AI voice receptionist powered by Gemini Live 2.0 (<500ms latency, 93% margin). Architect of Cyprus Bus Tracker and TicketChain, a gasless Web3 ticketing platform on Base L2.",
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch',
        downloadCv: 'Download CV',
        scrollToExplore: 'Scroll to explore',
    },

    // About
    about: {
        title: 'About Me',
        addPhoto: 'Add Your Photo',
        intro: "Hey! I'm",
        introText: ', a Full Stack Developer based in Cyprus with a passion for building scalable, real-time applications.',
        paragraph1: 'From AI telephony pipelines and Web3 smart contracts to real-time PWAs and Rust cryptographic tooling — I work across the full stack with a bias toward production-grade architecture and security-first design.',
        paragraph2: "Actively shipping ClinicVoice — a production AI voice receptionist powered by Gemini Live 2.0, handling real patient calls with sub-500ms latency and native Greek/English/Russian support. Also pushing smart contract patterns on Base L2 and Rust-based cryptographic tooling.",
        stats: {
            projects: 'Production Projects',
            technologies: 'Technologies',
            passion: 'Passion',
        },
    },

    // Skills
    skills: {
        title: 'Technical Skills',
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'Database & DevOps',
    },

    // Featured Project
    featured: {
        badge: '⭐ Featured Project',
        title: 'Cyprus Bus Tracker',
        description: 'A production-ready PWA delivering real-time bus tracking across Cyprus. Built with a modern split-stack architecture.',
        highlights: [
            'Real-time GTFS data with WebSocket updates',
            'Interactive map with 1000+ stops & live buses',
            '100% Lighthouse performance score',
            'Offline-first with IndexedDB caching',
        ],
        viewLive: 'View Live',
    },

    // Projects
    projects: {
        title: 'Projects',
        viewProject: 'View Project',
        viewCode: 'View Code',
    },

    // Contact
    contact: {
        title: 'Get In Touch',
        subtitle: "Have a project in mind or want to discuss an opportunity? I'd love to hear from you!",
        email: 'Email',
        location: 'Location',
        availability: 'Availability',
        availableText: 'Open for opportunities',
    },

    // Footer
    footer: {
        copyright: 'Built with React & TypeScript.',
    },

    // Project descriptions
    projectData: {
        busTracker: {
            role: 'Personal Project',
            description: 'A production-ready PWA for real-time bus tracking across Cyprus. Built with a split-stack architecture featuring Next.js frontend on Vercel and containerized Fastify backend on Render.',
            highlights: [
                'Engineered a high-performance map interface with Leaflet, handling clustering for thousands of stops and live bus markers with 60fps animations',
                'Developed a scalable Fastify backend with Socket.io to ingest and broadcast real-time GTFS data updates',
                'Achieved 100% Lighthouse performance score via IndexedDB offline caching and efficient React rendering patterns',
                'Integrated Sentry for error monitoring and PostHog for product analytics',
            ],
        },
        passwordManager: {
            role: 'Personal Project',
            description: 'A secure, local-first cross-platform password manager with military-grade encryption and browser extension support.',
            highlights: [
                'Implemented AES-256-GCM encryption with Argon2id key derivation for secure credential storage',
                'Developed a Rust N-API backend for high-performance cryptographic operations',
                'Created browser extensions (Chrome/Firefox) for auto-fill via Native Messaging',
                'Utilized SQLite with encrypted fields for local-first data persistence',
            ],
        },
        investech: {
            role: 'Full Stack Developer',
            description: 'A full-stack web application for an EU-funded educational platform, featuring role-based authentication, course management, and multi-language support.',
            highlights: [
                'Implemented role-based authentication with ASP.NET Identity and course enrollment system',
                'Built multi-language localization support for international users',
                'Features include event scheduling, news publishing, innovation labs, and entrepreneurial academies',
                'Integrated file uploads with antivirus scanning (nClam) and QR code generation',
            ],
        },
        foodflow: {
            role: 'AI & IoT Developer',
            description: 'An end-to-end AI-enabled food waste management system for hotels and food service operations, combining IoT devices with custom ML models.',
            highlights: [
                'Trained custom image classification models using transfer learning (ResNet50, VGG16, MobileNet, InceptionV3) with K-Fold cross-validation',
                'Integrated Google Gemini, OpenAI, and CLIP for multi-modal food recognition',
                'Built Django dashboard and Flask REST API for multi-tenant hotel management',
                'Created Raspberry Pi IoT devices with camera integration and PyQt5 touchscreen interface',
            ],
        },
    },
};
