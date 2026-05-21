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
        fullName: 'Houssam Hamrouni',
        role: 'Software Engineer · Full-Stack · AI · Web3',
        srOnlyTitle: 'Houssam Hamrouni — Full-Stack Software Engineer specializing in AI, Web3 and TypeScript',
        subtitle: 'Full-stack software engineer building production AI systems, Web3 platforms, and secure TypeScript applications.',
        bio: 'I ship AI telephony with sub-500ms latency, gasless Web3 on Base L2, real-time PWAs, and Rust cryptographic tooling.',
        bioDetail: '',
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch',
        downloadCv: 'Download CV',
        scrollToExplore: 'Scroll to explore',
    },

    // About
    about: {
        title: 'About Houssam Hamrouni',
        addPhoto: 'Add Your Photo',
        intro: "Hey! I'm",
        introText: ', a full-stack software engineer based in Cyprus building scalable real-time applications, AI systems, and Web3 products.',
        paragraph1: 'From AI telephony pipelines and smart contracts to real-time PWAs and Rust cryptographic tooling, I work across the stack with a bias toward production architecture and security-first design.',
        paragraph2: "Currently shipping ClinicVoice, an AI voice receptionist powered by Gemini Live 2.0 for real patient calls with sub-500ms latency and native Greek, English, and Russian support. I also build Base L2 smart contract flows and Rust-based security tooling.",
        stats: {
            projects: 'Production Projects',
            technologies: 'Technologies',
            passion: 'Lighthouse Score',
        },
    },

    // Skills
    skills: {
        title: 'Technical Skills',
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'Database & DevOps',
        listView: 'List View',
        sphereView: '3D Sphere',
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
        title: 'Software Engineering Projects',
        viewProject: 'View Project',
        viewCode: 'View Code',
    },

    // Contact
    contact: {
        title: 'Hire a Full-Stack Software Engineer',
        subtitle: "Have an AI, Web3, real-time web, or secure TypeScript project in mind? Send the details and I will reply with a practical next step.",
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
