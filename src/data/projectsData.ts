export type ProjectCategory = 'web' | 'mobile' | 'backend';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg',
    technologies: ['React', 'Vite.js', 'Django', 'PostgreSQL', 'Stripe'],
    category: 'web',
    githubUrl: 'https://github.com/davoltex30/luxeMarket',
    // liveUrl: '#',
  },
  {
    id: 2,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts, nutrition, and personal health metrics.',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg',
    technologies: ['React Native', 'Expo', 'Firebase', 'GraphQL'],
    category: 'mobile',
    githubUrl: 'https://github.com/davoltex30/fitness',
  },
  // {
  //   id: 3,
  //   title: 'Content Management System',
  //   description: 'Custom CMS for managing blog posts, media, and user-generated content.',
  //   image: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg',
  //   technologies: ['Django', 'Python', 'PostgreSQL', 'AWS S3'],
  //   category: 'backend',
  //   githubUrl: '#',
  // },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Comprehensive dashboard for managing and analyzing social media accounts.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    technologies: ['React', 'D3.js', 'Node.js', 'vite.js'],
    category: 'web',
    githubUrl: 'https://github.com/davoltex30/socialPulse',
    // liveUrl: '#',
  },
  // {
  //   id: 5,
  //   title: 'Real Estate Listing App',
  //   description: 'Mobile application for browsing and saving real estate listings with virtual tours.',
  //   image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  //   technologies: ['React Native', 'Expo', 'MongoDB', 'Node.js'],
  //   category: 'mobile',
  //   githubUrl: '#',
  // },
  // {
  //   id: 6,
  //   title: 'API Gateway Service',
  //   description: 'Microservice architecture gateway for routing and authenticating API requests.',
  //   image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
  //   technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
  //   category: 'backend',
  //   githubUrl: '#',
  // },
];