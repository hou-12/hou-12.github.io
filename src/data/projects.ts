export interface LocalizedString {
    en: string;
    fr: string;
}

export interface Project {
    id: string;
    title: string;
    role?: LocalizedString;
    description: LocalizedString;
    highlights?: LocalizedString[];
    technologies: string[];
    link?: string;
    github?: string;
    type: 'web' | 'mobile' | 'desktop' | 'iot';
    image?: string;
    video?: string;
}

export const projects: Project[] = [
    {
        id: 'bus-tracker',
        title: 'Cyprus Bus Tracker',
        role: {
            en: 'Personal Project',
            fr: 'Projet personnel'
        },
        description: {
            en: 'A production-ready PWA for real-time bus tracking across Cyprus. Built with a split-stack architecture featuring Next.js frontend on Vercel and containerized Fastify backend on Render.',
            fr: 'Une PWA de production pour le suivi des bus en temps réel à travers Chypre. Construite avec une architecture split-stack comportant un frontend Next.js sur Vercel et un backend Fastify conteneurisé sur Render.'
        },
        highlights: [
            {
                en: 'Engineered a high-performance map interface with Leaflet, handling clustering for thousands of stops and live bus markers with 60fps animations',
                fr: 'Développement d\'une interface cartographique haute performance avec Leaflet, gérant le clustering de milliers d\'arrêts et marqueurs de bus en direct avec animations 60fps'
            },
            {
                en: 'Developed a scalable Fastify backend with Socket.io to ingest and broadcast real-time GTFS data updates',
                fr: 'Création d\'un backend Fastify scalable avec Socket.io pour ingérer et diffuser les mises à jour GTFS en temps réel'
            },
            {
                en: 'Achieved 100% Lighthouse performance score via IndexedDB offline caching and efficient React rendering patterns',
                fr: 'Score Lighthouse de 100% grâce au cache offline IndexedDB et aux patterns de rendu React efficaces'
            },
            {
                en: 'Integrated Sentry for error monitoring and PostHog for product analytics',
                fr: 'Intégration de Sentry pour le monitoring d\'erreurs et PostHog pour l\'analytics produit'
            }
        ],
        technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Turborepo', 'Leaflet', 'Fastify', 'Socket.io', 'Redis', 'PostgreSQL'],
        link: 'https://cyprusbusmap.hou12.me',
        type: 'web',

    },
    {
        id: 'ticketchain',
        title: 'TicketChain',
        role: {
            en: 'Blockchain Architect',
            fr: 'Architecte Blockchain'
        },
        description: {
            en: 'A walletless Web3 ticketing platform with gasless transactions and offline-first validation. Features NFT minting via Account Abstraction on Base L2 and rotary QR codes.',
            fr: 'Une plateforme de billetterie Web3 sans wallet avec transactions sans frais de gaz et validation offline-first. Inclut le minting NFT via l\'Account Abstraction sur Base L2 et des QR codes rotatifs.'
        },
        highlights: [
            {
                en: 'Gasless NFT minting via Account Abstraction (Privy + Pimlico) on Base L2',
                fr: 'Minting NFT sans frais de gaz via Account Abstraction (Privy + Pimlico) sur Base L2'
            },
            {
                en: 'Secure rotary QR codes with HMAC signatures to prevent screenshots',
                fr: 'QR codes rotatifs sécurisés avec signatures HMAC pour empêcher les captures d\'écran'
            },
            {
                en: 'Offline-first Scanner PWA using IndexedDB and background sync',
                fr: 'PWA de scan offline-first utilisant IndexedDB et synchronisation en arrière-plan'
            },
            {
                en: 'Automated secondary market with smart contract royalty enforcement',
                fr: 'Marché secondaire automatisé avec application des royalties par smart contract'
            }
        ],
        technologies: ['Next.js', 'Solidity', 'Base L2', 'Privy', 'Pimlico', 'Supabase', 'Stripe'],
        github: 'https://github.com/hou-12/ticketchain',
        type: 'web',
        image: '/projects/ticketchain.png',
        video: '/projects/ticketweb3_showcase.mp4',

    },
    {
        id: 'clinicvoice',
        title: 'ClinicVoice',
        role: {
            en: 'AI Telephony Architect',
            fr: 'Architecte Téléphonie IA'
        },
        description: {
            en: 'A production-grade AI voice receptionist for medical clinics achieving 93% profit margins. Powered by Gemini Live 2.0 Flash for sub-500ms latency and native multilingual support (Greek/English/Russian).',
            fr: 'Une réceptionniste vocale IA de production pour cliniques médicales atteignant 93% de marge. Propulsée par Gemini Live 2.0 Flash pour une latence sous les 500ms et un support multilingue natif (Grec/Anglais/Russe).'
        },
        highlights: [
            {
                en: 'Engineered a unified real-time stream processing pipeline combining STT, LLM reasoning, and TTS via a single Gemini Live WebSocket connection',
                fr: 'Conception d\'un pipeline de traitement de flux unifié combinant STT, raisonnement LLM et TTS via une connexion WebSocket Gemini Live unique'
            },
            {
                en: 'Implemented barge-in capability allowing callers to interrupt the AI naturally',
                fr: 'Implémentation de la capacité de "barge-in" permettant aux appelants d\'interrompre l\'IA naturellement'
            },
            {
                en: 'Integrated Telnyx Call Control for programmatic voice routing and SIP trunking',
                fr: 'Intégration du contrôle d\'appel Telnyx pour le routage vocal programmatique et le trunking SIP'
            },
            {
                en: 'Deployed high-availability Node.js WebSocket backend handling concurrent audio streams',
                fr: 'Déploiement d\'un backend WebSocket Node.js haute disponibilité gérant des flux audio concurrents'
            }
        ],
        technologies: ['Gemini Live API', 'Node.js', 'WebSockets', 'Telnyx', 'TypeScript', 'Docker'],
        github: 'https://github.com/hou-12/clinicvoice',
        type: 'web',

    },
    {
        id: 'foodflow',
        title: 'FoodFlow',
        role: {
            en: 'AI & IoT Developer',
            fr: 'Développeur IA & IoT'
        },
        description: {
            en: 'An end-to-end AI-enabled food waste management system for hotels and food service operations, combining IoT devices with custom ML models.',
            fr: 'Un système de gestion du gaspillage alimentaire de bout en bout activé par l\'IA pour les hôtels et services alimentaires, combinant dispositifs IoT et modèles ML personnalisés.'
        },
        highlights: [
            {
                en: 'Trained custom image classification models using transfer learning (ResNet50, VGG16, MobileNet, InceptionV3) with K-Fold cross-validation',
                fr: 'Entraînement de modèles de classification d\'images personnalisés utilisant le transfer learning (ResNet50, VGG16, MobileNet, InceptionV3) avec validation croisée K-Fold'
            },
            {
                en: 'Integrated Google Gemini, OpenAI, and CLIP for multi-modal food recognition',
                fr: 'Intégration de Google Gemini, OpenAI et CLIP pour la reconnaissance alimentaire multimodale'
            },
            {
                en: 'Built Django dashboard and Flask REST API for multi-tenant hotel management',
                fr: 'Construction d\'un tableau de bord Django et API REST Flask pour la gestion multi-tenant d\'hôtels'
            },
            {
                en: 'Created Raspberry Pi IoT devices with camera integration and PyQt5 touchscreen interface',
                fr: 'Création de dispositifs IoT Raspberry Pi avec intégration caméra et interface tactile PyQt5'
            }
        ],
        technologies: ['Python', 'TensorFlow', 'Django', 'Flask', 'OpenCV', 'Raspberry Pi', 'Google Gemini API', 'OpenAI'],
        link: 'https://foodflow.cy',
        type: 'iot',

    },
    {
        id: 'investech',
        title: 'INVESTech LMS',
        role: {
            en: 'Full Stack Developer',
            fr: 'Développeur Full Stack'
        },
        description: {
            en: 'A full-stack web application for an EU-funded educational platform, featuring role-based authentication, course management, and multi-language support.',
            fr: 'Une application web full-stack pour une plateforme éducative financée par l\'UE, avec authentification basée sur les rôles, gestion des cours et support multilingue.'
        },
        highlights: [
            {
                en: 'Implemented role-based authentication with ASP.NET Identity and course enrollment system',
                fr: 'Implémentation de l\'authentification basée sur les rôles avec ASP.NET Identity et système d\'inscription aux cours'
            },
            {
                en: 'Built multi-language localization support for international users',
                fr: 'Construction du support de localisation multilingue pour les utilisateurs internationaux'
            },
            {
                en: 'Features include event scheduling, news publishing, innovation labs, and entrepreneurial academies',
                fr: 'Fonctionnalités incluant planification d\'événements, publication d\'actualités, labs d\'innovation et académies entrepreneuriales'
            },
            {
                en: 'Integrated file uploads with antivirus scanning (nClam) and QR code generation',
                fr: 'Intégration de téléversement de fichiers avec scan antivirus (nClam) et génération de codes QR'
            }
        ],
        technologies: ['C#', 'ASP.NET Core 9', 'Entity Framework Core', 'SQL Server', 'MVC', 'Razor Views'],
        link: 'https://mdl.frederick.ac.cy/investech-portal/',
        type: 'web',

    },
    {
        id: 'password-manager',
        title: 'Password Manager',
        role: {
            en: 'Personal Project',
            fr: 'Projet personnel'
        },
        description: {
            en: 'A secure, local-first cross-platform password manager with military-grade encryption and browser extension support.',
            fr: 'Un gestionnaire de mots de passe multiplateforme sécurisé, local-first, avec chiffrement de niveau militaire et support d\'extensions navigateur.'
        },
        highlights: [
            {
                en: 'Implemented AES-256-GCM encryption with Argon2id key derivation for secure credential storage',
                fr: 'Implémentation du chiffrement AES-256-GCM avec dérivation de clé Argon2id pour le stockage sécurisé des identifiants'
            },
            {
                en: 'Developed a Rust N-API backend for high-performance cryptographic operations',
                fr: 'Développement d\'un backend Rust N-API pour des opérations cryptographiques haute performance'
            },
            {
                en: 'Created browser extensions (Chrome/Firefox) for auto-fill via Native Messaging',
                fr: 'Création d\'extensions navigateur (Chrome/Firefox) pour le remplissage automatique via Native Messaging'
            },
            {
                en: 'Utilized SQLite with encrypted fields for local-first data persistence',
                fr: 'Utilisation de SQLite avec champs chiffrés pour la persistance des données local-first'
            }
        ],
        technologies: ['Rust', 'Electron', 'React', 'TypeScript', 'AES-256-GCM', 'Argon2id', 'SQLite', 'N-API'],
        github: 'https://github.com/hou-12/Password-Manager-rust',
        type: 'desktop',

    }
];
export const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Rust", "Python",
    "ASP.NET Core", "PostgreSQL", "Redis", "Docker", "AWS", "Git"
];

