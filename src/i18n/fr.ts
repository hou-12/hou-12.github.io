export const fr = {
    // Navbar
    nav: {
        about: 'À propos',
        projects: 'Projets',
        skills: 'Compétences',
        contact: 'Contact',
        downloadCv: 'Télécharger le CV',
    },

    // Hero
    hero: {
        badge: 'Disponible en freelance',
        greeting: 'Bonjour, je suis',
        name: 'Houssam',
        fullName: 'Houssam Hamrouni',
        role: 'Ingénieur Logiciel · Full-Stack · IA · Web3',
        srOnlyTitle: 'Houssam Hamrouni — Ingénieur Logiciel Full-Stack spécialisé en IA, Web3 et TypeScript',
        subtitle:
            'Ingénieur logiciel full-stack créant des systèmes IA, plateformes Web3 et applications TypeScript sécurisées.',
        bio: 'Je livre de la téléphonie IA sous 500ms, du Web3 sans gas sur Base L2, des PWA temps réel et des outils cryptographiques en Rust.',
        bioDetail: '',
        viewWork: 'Voir mes projets',
        getInTouch: 'Me contacter',
        downloadCv: 'Télécharger le CV',
        scrollToExplore: 'Faites défiler pour explorer',
    },

    // About
    about: {
        title: 'À propos de Houssam Hamrouni',
        addPhoto: 'Ajouter votre photo',
        intro: 'Salut ! Je suis',
        introText:
            `, ingénieur logiciel full-stack basé à Chypre, spécialisé dans les applications temps réel, les systèmes IA et les produits Web3.`,
        paragraph1:
            `Des pipelines de téléphonie IA et smart contracts aux PWA temps réel et outils cryptographiques en Rust, je travaille sur toute la stack avec une préférence pour les architectures de production et la sécurité.`,
        paragraph2:
            `Je développe actuellement ClinicVoice, une réceptionniste vocale IA propulsée par Gemini Live 2.0 pour de vrais appels patients avec une latence sous 500ms et un support grec, anglais et russe natif. Je construis aussi des parcours smart contract sur Base L2 et des outils de sécurité en Rust.`,
        stats: {
            projects: 'Projets en production',
            technologies: 'Technologies',
            passion: 'Score Lighthouse',
        },
    },

    skills: {
        title: 'Compétences techniques',
        all: 'Tout',
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'Bases de données & DevOps',
        listView: 'Vue Liste',
        sphereView: 'Sphère 3D',
    },

    // Featured Project
    featured: {
        badge: '⭐ Projet phare',
        title: 'Cyprus Bus Tracker',
        description:
            'Une PWA de production permettant de suivre en temps réel les bus et les arrêts à Chypre. Construite avec une architecture split-stack moderne pour offrir des mises à jour rapides et fiables.',
        highlights: [
            'Données GTFS en temps réel avec mises à jour via WebSocket',
            'Carte interactive avec plus de 1 000 arrêts et bus en direct',
            'Score de 100 % sur Lighthouse (performance)',
            'Approche offline-first avec mise en cache IndexedDB',
        ],
        viewLive: 'Voir la démo en ligne',
    },

    // Projects section
    projects: {
        title: 'Projets d’ingénierie logicielle',
        viewProject: 'Détails du projet',
        viewCode: 'Voir le code',
    },

    // Contact
    contact: {
        title: 'Recruter un ingénieur logiciel full-stack',
        subtitle:
            'Vous avez un projet IA, Web3, web temps réel ou TypeScript sécurisé ? Envoyez les détails et je répondrai avec une prochaine étape concrète.',
        email: 'E-mail',
        location: 'Localisation',
        availability: 'Disponibilité',
        availableText: 'Ouvert aux opportunités',
    },

    // Footer
    footer: {
        copyright:
            'Développé avec React & TypeScript.',
    },

    // Project descriptions
    projectData: {
        busTracker: {
            role: 'Projet personnel',
            description:
                'PWA de production pour le suivi du réseau de bus chypriote, avec un frontend Next.js déployé sur Vercel et un backend Fastify conteneurisé sur Render.',
            highlights: [
                'Développement d’une interface cartographique haute performance avec Leaflet, gérant le clustering de milliers d’arrêts et de bus en direct avec animations 60 fps',
                'Conception d’un backend Fastify scalable avec Socket.io pour ingérer et diffuser les mises à jour GTFS en temps réel',
                'Score de 100 % sur Lighthouse grâce au cache offline IndexedDB et à des patterns de rendu React efficaces',
                'Intégration de Sentry pour le monitoring des erreurs et de PostHog pour l’analytics produit',
            ],
        },

        passwordManager: {
            role: 'Projet personnel',
            description:
                'Gestionnaire de mots de passe local-first et multiplateforme avec chiffrement de niveau militaire et support d’extensions navigateur.',
            highlights: [
                'Implémentation du chiffrement AES-256-GCM avec dérivation de clé Argon2id pour le stockage sécurisé des identifiants',
                'Développement d’un backend Rust via N-API pour des opérations cryptographiques haute performance',
                'Création d’extensions navigateur (Chrome / Firefox) pour le remplissage automatique via Native Messaging',
                'Utilisation de SQLite avec champs chiffrés pour une persistance des données locale et sécurisée',
            ],
        },

        investech: {
            role: 'Développeur Full Stack',
            description:
                'Application web full-stack pour un organisme d’innovation, incluant portail d’événements, gestion de contenu, contrôle d’accès basé sur les rôles, gestion des cours et support multilingue.',
            highlights: [
                'Mise en place d’une authentification et d’une autorisation basées sur les rôles avec ASP.NET Identity et système d’inscription aux cours',
                'Implémentation d’un support de localisation multilingue pour des utilisateurs internationaux',
                'Fonctionnalités incluant planification d’événements, flux d’actualités, labs d’innovation et académies entrepreneuriales',
                'Intégration de téléversement de fichiers avec scan antivirus (nClam) et génération de codes QR',
            ],
        },

        foodflow: {
            role: 'Développeur IA & IoT',
            description:
                'Système de gestion du gaspillage alimentaire de bout en bout, combinant dispositifs IoT et modèles de machine learning personnalisés.',
            highlights: [
                'Entraînement de modèles de classification d’images personnalisés (VGG16, MobileNet, InceptionV3, etc.) avec validation croisée K-Fold',
                'Intégration de Google Gemini, d’OpenAI et de CLIP pour la reconnaissance alimentaire multimodale',
                'Construction d’un tableau de bord Django et d’une API REST Flask pour la gestion multi-tenant d’hôtels',
                'Création de dispositifs IoT à base de Raspberry Pi avec caméra intégrée et interface tactile PyQt5',
            ],
        },
    },
};
