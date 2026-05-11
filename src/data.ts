export type CardVariant = 'large' | 'medium' | 'dark' | 'accent';

export const projects = [
  {
    title: "Ecomart",
    description: "A high-performance e-commerce platform featuring a responsive React and TypeScript frontend powered by a secure, JWT-authenticated Ruby on Rails REST API.",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/e-commerce.png?auto=format&fit=crop&q=80&w=800",
    url: "https://ecomart-online.netlify.app/",
    variant: 'large' as CardVariant,
  },
  {
    title: "Job Board",
    description: "A comprehensive web platform built with Ruby on Rails that connects job seekers with recruiters featuring job listings, applications, and dashboards for both recruiters and job seekers",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/job-board.png?auto=format&fit=crop&q=80&w=800",
    url: "https://jobs.129-159-22-4.nip.io/",
    variant: 'medium' as CardVariant,
  },
  {
    title: "Developer's Dictionary",
    description: "Designed for software and web developers, this Dictionary is your go-to app for searching keywords related to development and exploring their definitions",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/developers-dictionary.png?auto=format&fit=crop&q=80&w=800",
    url: "https://developers-dictionary.vercel.app/",
    variant: 'medium' as CardVariant,
  },
  {
    title: "School Manager",
    description: "A comprehensive and role-based school administration platform featuring a React frontend with tailored user dashboards, powered by a secure Ruby on Rails API and Elasticsearch.",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/school-manager.png?auto=format&fit=crop&q=80&w=800",
    url: "https://sm-online.netlify.app/",
    variant: 'large' as CardVariant,
  },
  {
    title: "DFA Simulator",
    description: "A simulator for creating finite state machines and playing around with them",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/dfa-sim.png?auto=format&fit=crop&q=80&w=800",
    url: "https://dfa-sim.netlify.app/",
    variant: 'medium' as CardVariant,
  },
  {
    title: "AI or Not Game",
    description: "An engaging game testing AI image recognition skills by putting two images side-by-side and letting you guess the image which is NOT the AI generated one",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/ai-or-not.png?auto=format&fit=crop&q=80&w=800",
    url: "https://ai-or-not-game.vercel.app/",
    variant: 'medium' as CardVariant,
  },
  {
    title: "Tic Tac Toe Game",
    description: "A tic-tac-toe game to play with friends or challenge yourself vs AI",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/tic-tac-toe-vs-ai.png?auto=format&fit=crop&q=80&w=800",
    url: "https://tic-tac-toe-vs-ai-game.vercel.app/",
    variant: 'medium' as CardVariant,
  },
  {
    title: "Snake Game",
    description: "A feature-rich snake game with classic, fast and obstacle modes to challenge yourself",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/snake-game.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/snake-game/",
    variant: 'dark' as CardVariant,
  },
  {
    title: "Cerver",
    description: "Cerver is a backend-only API written in C for scaffolding CRUD resources including a basic three-tier database and a multi-threaded HTTP server",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/cerver.png?auto=format&fit=crop&q=80&w=800",
    url: "https://github.com/smakthe/cerver/",
    variant: 'dark' as CardVariant,
  },
  {
    title: "কলম",
    description: "কলম (Kolom) is a toy scripting language using Ruby that uses Bengali keywords instead of English letting you write Ruby-like programs in Bengali",
    image: "https://pub-227e9e1887224eafbf51e8c0f4728352.r2.dev/kolom.png?auto=format&fit=crop&q=80&w=800",
    url: "https://rubygems.org/gems/kolom/",
    variant: 'accent' as CardVariant,
  }
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Ruby", "JavaScript", "TypeScript", "Python", "C", "C++", "Java", "PHP", "Go", "Rust"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"]
  },
  {
    title: "Frameworks",
    skills: ["Ruby on Rails", "MERN Stack", "Next.js", "Svelte", "Qwik.js"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Airflow", "Ansible"]
  }
];
