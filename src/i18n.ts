export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    nav: { howItWorks: 'Comment ça marche', stack: 'Technologies', pipeline: 'Pipeline', github: 'GitHub' },
    hero: {
      badge: 'v2.2.1 — publié sur npm',
      title: 'Scaffold un projet Node.js',
      titleAccent: 'prêt pour la production',
      subtitle:
        "Sécurité, CI/CD, tests et conteneurs qui fonctionnent dès le premier commit. Une seule commande — zéro configuration.",
      copy: 'Copier',
      copied: 'Copié !',
      cta: 'Voir sur GitHub',
      ctaSecondary: 'Comment ça marche',
    },
    how: {
      title: 'Comment ça marche',
      subtitle: 'Trois étapes. Zéro configuration. Un projet qui passe ses propres gates.',
      steps: [
        {
          title: 'Lance la commande',
          desc: "Le wizard interactif te guide : backend, frontend, base de données. Ou passe tout en flags pour l'automatisation.",
        },
        {
          title: 'Le projet se génère',
          desc: "Templates + générateurs écrivent le code, les Dockerfiles, le docker-compose et le workflow GitHub Actions. Les versions des dépendances sont résolues à l'instant T depuis npm.",
        },
        {
          title: 'Tout est vert dès le départ',
          desc: 'lint, tests unitaires, e2e et build passent avant ta première ligne de code. La pipeline GitHub est verte au premier push.',
        },
      ],
    },
    stack: {
      title: 'Ce que tu peux générer',
      subtitle: '45 combinaisons — chacune vérifiée en CI.',
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Base de données',
      backends: ['Express', 'Hono (ESM)', 'NestJS (TypeScript)'],
      frontends: ['React + Vite', 'Vue 3 + Vite', 'Vanilla + Vite', 'Next.js (App Router)', 'aucun'],
      databases: ['PostgreSQL (Prisma)', 'MongoDB (Mongoose)', 'aucune'],
    },
    pipeline: {
      title: 'Une pipeline qui protège',
      subtitle: 'CI et CD séparés. Rien ne part en production sans passer les gates.',
      items: [
        { name: 'Gitleaks', desc: 'aucun secret ne passe le commit' },
        { name: 'ESLint + Prettier', desc: 'code propre et cohérent' },
        { name: 'npm audit + Semgrep', desc: 'vulnérabilités connues bloquées' },
        { name: 'Tests unitaires + intégration', desc: 'la logique est prouvée' },
        { name: 'Playwright e2e', desc: 'le parcours utilisateur complet' },
        { name: 'Hadolint + Trivy', desc: 'images Docker scannées avant publication' },
      ],
      note: 'Les images sont scannées AVANT publication — et jamais publiées depuis une pull request.',
    },
    k8s: {
      title: 'Né pour Kubernetes',
      subtitle: 'Chaque projet généré respecte les bonnes pratiques cloud-native.',
      items: [
        '/healthz ne vérifie jamais les dépendances — /ready renvoie 503 si la DB tombe',
        'Arrêt propre sur SIGTERM : les requêtes en cours se terminent avant la coupure',
        'Conteneurs non-root par défaut',
        'Mot de passe DB unique par projet, jamais commité',
      ],
    },
    credits: {
      title: 'Crédits',
      author: 'Conçu et développé par',
      school: 'Projet réalisé à',
      license: 'Licence MIT — libre d’utilisation',
      madeWith: 'Propulsé par la communauté open source',
    },
    footer: 'laplateforme-starter — du premier commit à la production.',
  },
  en: {
    nav: { howItWorks: 'How it works', stack: 'Stack', pipeline: 'Pipeline', github: 'GitHub' },
    hero: {
      badge: 'v2.2.1 — published on npm',
      title: 'Scaffold a Node.js project',
      titleAccent: 'ready for production',
      subtitle:
        'Security gates, CI/CD, tests and containers that work from the first commit. One command — zero configuration.',
      copy: 'Copy',
      copied: 'Copied!',
      cta: 'View on GitHub',
      ctaSecondary: 'How it works',
    },
    how: {
      title: 'How it works',
      subtitle: 'Three steps. Zero configuration. A project that passes its own gates.',
      steps: [
        {
          title: 'Run the command',
          desc: 'The interactive wizard guides you: backend, frontend, database. Or pass everything as flags for automation.',
        },
        {
          title: 'The project is generated',
          desc: 'Templates + generators write the code, Dockerfiles, docker-compose and the GitHub Actions workflow. Dependency versions are resolved live from npm.',
        },
        {
          title: 'Everything is green from day one',
          desc: 'lint, unit tests, e2e and build pass before you write a single line. The GitHub pipeline goes green on the first push.',
        },
      ],
    },
    stack: {
      title: 'What you can generate',
      subtitle: '45 combinations — each one verified in CI.',
      backend: 'Backend',
      frontend: 'Frontend',
      database: 'Database',
      backends: ['Express', 'Hono (ESM)', 'NestJS (TypeScript)'],
      frontends: ['React + Vite', 'Vue 3 + Vite', 'Vanilla + Vite', 'Next.js (App Router)', 'none'],
      databases: ['PostgreSQL (Prisma)', 'MongoDB (Mongoose)', 'none'],
    },
    pipeline: {
      title: 'A pipeline that protects',
      subtitle: 'CI and CD are separated. Nothing ships without passing the gates.',
      items: [
        { name: 'Gitleaks', desc: 'no secret survives a commit' },
        { name: 'ESLint + Prettier', desc: 'clean, consistent code' },
        { name: 'npm audit + Semgrep', desc: 'known vulnerabilities blocked' },
        { name: 'Unit + integration tests', desc: 'logic is proven' },
        { name: 'Playwright e2e', desc: 'the full user journey' },
        { name: 'Hadolint + Trivy', desc: 'Docker images scanned before publish' },
      ],
      note: 'Images are scanned BEFORE they are published — and never published from a pull request.',
    },
    k8s: {
      title: 'Born for Kubernetes',
      subtitle: 'Every generated project follows cloud-native best practices.',
      items: [
        '/healthz never checks dependencies — /ready returns 503 when the DB is down',
        'Graceful shutdown on SIGTERM: in-flight requests drain before cutoff',
        'Non-root containers by default',
        'Unique DB password per project, never committed',
      ],
    },
    credits: {
      title: 'Credits',
      author: 'Designed and developed by',
      school: 'A project built at',
      license: 'MIT License — free to use',
      madeWith: 'Powered by the open source community',
    },
    footer: 'laplateforme-starter — from first commit to production.',
  },
} as const

export type Translations = (typeof translations)['fr']
