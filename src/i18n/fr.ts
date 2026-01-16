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
        subtitle:
            'Développeur Full Stack spécialisé dans les écosystèmes React modernes et les applications temps réel.',
        bio: '« Architecture, scalabilité et pixel-perfection. »',
        bioDetail:
            'J’ai récemment conçu "Cyprus Bus Tracker", une application de suivi en temps réel du réseau de bus à Chypre, et je travaille sur des plateformes SaaS orientées données. J’aime prendre en charge l’ensemble du cycle de développement, de l’architecture système au déploiement cloud.',
        viewWork: 'Voir mes projets',
        getInTouch: 'Me contacter',
        downloadCv: 'Télécharger le CV',
        scrollToExplore: 'Faites défiler pour explorer',
    },

    // About
    about: {
        title: 'À propos de moi',
        addPhoto: 'Ajouter votre photo',
        intro: 'Salut ! Je suis',
        introText:
            ', développeur Full Stack basé à Chypre, passionné par la création d’applications scalables et temps réel.',
        paragraph1:
            'Je me spécialise dans les écosystèmes React et TypeScript modernes. De la modélisation des données au design d’API, en passant par l’architecture front-end et le déploiement d’applications conteneurisées, j’aime travailler sur l’ensemble de la stack.',
        paragraph2:
            'Quand je ne code pas, vous me trouverez en train d’explorer de nouvelles architectures, de documenter des bonnes pratiques ou de construire des projets comme Cyprus Bus Tracker, des systèmes de gestion de menus pour restaurants ou des applications d’IA appliquée.',
        stats: {
            projects: 'Projets en production',
            technologies: 'Technologies',
            passion: 'Passion',
        },
    },

    // Skills
    skills: {
        title: 'Compétences techniques',
        frontend: 'Frontend',
        backend: 'Backend',
        devops: 'Bases de données & DevOps',
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
        title: 'Projets',
        viewProject: 'Détails du projet',
        viewCode: 'Voir le code',
    },

    // Contact
    contact: {
        title: 'Me contacter',
        subtitle:
            'Vous avez un projet en tête ou souhaitez discuter d’une opportunité ? Envoyez-moi un message, je vous répondrai avec plaisir.',
        email: 'E-mail',
        location: 'Localisation',
        availability: 'Disponibilité',
        availableText: 'Ouvert aux opportunités',
    },

    // Footer
    footer: {
        copyright:
            '© 2024 Houssam Hamrouni. Développé avec React & TypeScript.',
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
