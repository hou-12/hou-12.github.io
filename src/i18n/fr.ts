export const fr = {
    // Navbar
    nav: {
        about: 'À propos',
        projects: 'Projets',
        skills: 'Compétences',
        contact: 'Contact',
        downloadCv: 'Télécharger CV',
    },

    // Hero
    hero: {
        badge: 'Disponible en Freelance',
        greeting: 'Bonjour, je suis',
        name: 'Houssam',
        subtitle: 'Développeur Full Stack spécialisé dans les écosystèmes React modernes et les applications temps réel.',
        bio: '"Architecture, Scalabilité et Pixel-Perfection."',
        bioDetail: "J'ai récemment conçu 'Cyprus Bus Tracker', une plateforme de production fournissant des données de transport en direct. Expérimenté dans la gestion du cycle complet de développement, de la conception système au déploiement cloud.",
        viewWork: 'Voir mes projets',
        getInTouch: 'Me contacter',
        downloadCv: 'Télécharger CV',
        scrollToExplore: 'Défiler pour explorer',
    },

    // About
    about: {
        title: 'À propos de moi',
        addPhoto: 'Ajouter votre photo',
        intro: 'Salut ! Je suis',
        introText: ', un Développeur Full Stack basé à Chypre, passionné par la création d\'applications scalables et temps réel.',
        paragraph1: 'Je me spécialise dans les écosystèmes React modernes, TypeScript et les services backend. De l\'architecture de bases de données au déploiement d\'applications conteneurisées, j\'aime travailler sur l\'ensemble de la stack.',
        paragraph2: 'Quand je ne code pas, vous me trouverez en train d\'explorer de nouvelles technologies ou de construire des projets comme le Cyprus Bus Tracker.',
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
        devops: 'Base de données & DevOps',
    },

    // Featured Project
    featured: {
        badge: '⭐ Projet vedette',
        title: 'Cyprus Bus Tracker',
        description: 'Une PWA de production offrant le suivi des bus en temps réel à travers Chypre. Construite avec une architecture split-stack moderne.',
        highlights: [
            'Données GTFS en temps réel avec mises à jour WebSocket',
            'Carte interactive avec 1000+ arrêts et bus en direct',
            'Score Lighthouse de 100% en performance',
            'Offline-first avec mise en cache IndexedDB',
        ],
        viewLive: 'Voir en direct',
    },

    // Projects
    projects: {
        title: 'Projets',
        viewProject: 'Voir le projet',
        viewCode: 'Voir le code',
    },

    // Contact
    contact: {
        title: 'Me contacter',
        subtitle: 'Vous avez un projet en tête ou souhaitez discuter d\'une opportunité ? J\'aimerais beaucoup vous entendre !',
        email: 'Email',
        location: 'Localisation',
        availability: 'Disponibilité',
        availableText: 'Ouvert aux opportunités',
    },

    // Footer
    footer: {
        copyright: '© 2024 Houssam Hamrouni. Créé avec React & TypeScript.',
    },

    // Project descriptions
    projectData: {
        busTracker: {
            role: 'Projet personnel',
            description: 'Une PWA de production pour le suivi des bus en temps réel à travers Chypre. Construite avec une architecture split-stack comportant un frontend Next.js sur Vercel et un backend Fastify conteneurisé sur Render.',
            highlights: [
                'Développement d\'une interface cartographique haute performance avec Leaflet, gérant le clustering de milliers d\'arrêts et marqueurs de bus en direct avec animations 60fps',
                'Création d\'un backend Fastify scalable avec Socket.io pour ingérer et diffuser les mises à jour GTFS en temps réel',
                'Score Lighthouse de 100% grâce au cache offline IndexedDB et aux patterns de rendu React efficaces',
                'Intégration de Sentry pour le monitoring d\'erreurs et PostHog pour l\'analytics produit',
            ],
        },
        passwordManager: {
            role: 'Projet personnel',
            description: 'Un gestionnaire de mots de passe multiplateforme sécurisé, local-first, avec chiffrement de niveau militaire et support d\'extensions navigateur.',
            highlights: [
                'Implémentation du chiffrement AES-256-GCM avec dérivation de clé Argon2id pour le stockage sécurisé des identifiants',
                'Développement d\'un backend Rust N-API pour des opérations cryptographiques haute performance',
                'Création d\'extensions navigateur (Chrome/Firefox) pour le remplissage automatique via Native Messaging',
                'Utilisation de SQLite avec champs chiffrés pour la persistance des données local-first',
            ],
        },
        investech: {
            role: 'Développeur Full Stack',
            description: 'Une application web full-stack pour une plateforme éducative financée par l\'UE, avec authentification basée sur les rôles, gestion des cours et support multilingue.',
            highlights: [
                'Implémentation de l\'authentification basée sur les rôles avec ASP.NET Identity et système d\'inscription aux cours',
                'Construction du support de localisation multilingue pour les utilisateurs internationaux',
                'Fonctionnalités incluant planification d\'événements, publication d\'actualités, labs d\'innovation et académies entrepreneuriales',
                'Intégration de téléversement de fichiers avec scan antivirus (nClam) et génération de codes QR',
            ],
        },
        foodflow: {
            role: 'Développeur IA & IoT',
            description: 'Un système de gestion du gaspillage alimentaire de bout en bout activé par l\'IA pour les hôtels et services alimentaires, combinant dispositifs IoT et modèles ML personnalisés.',
            highlights: [
                'Entraînement de modèles de classification d\'images personnalisés utilisant le transfer learning (ResNet50, VGG16, MobileNet, InceptionV3) avec validation croisée K-Fold',
                'Intégration de Google Gemini, OpenAI et CLIP pour la reconnaissance alimentaire multimodale',
                'Construction d\'un tableau de bord Django et API REST Flask pour la gestion multi-tenant d\'hôtels',
                'Création de dispositifs IoT Raspberry Pi avec intégration caméra et interface tactile PyQt5',
            ],
        },
    },
};
