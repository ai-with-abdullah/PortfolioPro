export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  demoUrl: string;
  sourceUrl?: string;
}

export const projectData: Project[] = [
  {
    id: 'face-attendance',
    title: 'Face Attendance System',
    shortDescription: 'AI-powered facial recognition system for automated attendance tracking and management.',
    description: 'Advanced facial recognition system built with deep learning models for automated attendance tracking. Features real-time face detection, recognition with high accuracy, and comprehensive attendance management dashboard.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Face Recognition', 'Flask'],
    features: [
      'Real-time face detection and recognition',
      'Automated attendance marking',
      'Comprehensive admin dashboard',
      'Multiple camera support',
      'Detailed attendance reports'
    ],
    demoUrl: '#',
    sourceUrl: undefined
  },
  {
    id: 'word-counter-plus',
    title: 'Word Counter Plus',
    shortDescription: 'Advanced text analysis tool with word count, character count, and readability metrics.',
    description: 'Professional text analysis and word counting tool featuring real-time statistics, readability scores, keyword density analysis, and comprehensive writing metrics. Perfect for writers, students, and content creators.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    features: [
      'Real-time word and character counting',
      'Readability score analysis',
      'Keyword density tracking',
      'Reading time estimation',
      'Export and save functionality'
    ],
    demoUrl: 'https://wordcounterplusapp.com/',
    sourceUrl: undefined
  }
];

// Previous projects (commented out for future use)
/*
export const archivedProjects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Conversational Chatbot',
    shortDescription: 'Advanced NLP chatbot using transformers and GPT architecture for natural conversations.',
    description: 'An advanced conversational AI chatbot built using state-of-the-art transformer models and GPT architecture. Features natural language understanding, context awareness, and multi-turn conversations with intelligent response generation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['Python', 'Transformers', 'FastAPI', 'PyTorch', 'NLTK'],
    features: [
      'Natural language processing with 95% accuracy',
      'Context-aware conversation management',
      'Multi-language support',
      'Real-time response generation',
      'Custom training on domain-specific data'
    ],
    demoUrl: 'https://ai-chatbot-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/ai-chatbot'
  },
  {
    id: 'data-dashboard',
    title: 'Real-Time Analytics Dashboard',
    shortDescription: 'Interactive dashboard for data visualization with real-time updates and predictive analytics.',
    description: 'Interactive data visualization dashboard with real-time updates, predictive analytics, and comprehensive reporting features. Built for scalability and performance with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL', 'WebSockets'],
    features: [
      'Real-time data streaming and updates',
      'Interactive charts and visualizations',
      'Predictive analytics integration',
      'Custom report generation',
      'Mobile-responsive design'
    ],
    demoUrl: 'https://analytics-dashboard-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/analytics-dashboard'
  },
  {
    id: 'ecommerce-platform',
    title: 'AI-Powered E-commerce',
    shortDescription: 'Full-stack e-commerce with AI recommendations and automated inventory management.',
    description: 'Full-stack e-commerce solution with AI-powered product recommendations, automated inventory management, and seamless payment integration. Optimized for conversion and user experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'TensorFlow'],
    features: [
      'AI-powered product recommendations',
      'Automated inventory management',
      'Secure payment processing',
      'Advanced search and filtering',
      'Admin dashboard with analytics'
    ],
    demoUrl: 'https://ecommerce-platform-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/ecommerce-platform'
  },
  {
    id: 'ml-model',
    title: 'Predictive ML Model',
    shortDescription: 'Advanced machine learning model for market prediction with 94% accuracy rate.',
    description: 'Advanced machine learning model for market prediction with 94% accuracy rate. Utilizes ensemble methods and deep learning techniques for reliable forecasting and trend analysis.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    features: [
      '94% prediction accuracy rate',
      'Ensemble learning techniques',
      'Real-time data processing',
      'Feature engineering automation',
      'Model performance monitoring'
    ],
    demoUrl: 'https://ml-prediction-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/ml-prediction-model'
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    shortDescription: 'React Native app with real-time features and seamless user experience.',
    description: 'React Native mobile application with real-time features, offline capabilities, and seamless user experience across iOS and Android platforms.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['React Native', 'Firebase', 'Redux', 'AsyncStorage', 'Push Notifications'],
    features: [
      'Cross-platform compatibility',
      'Real-time synchronization',
      'Offline data storage',
      'Push notification system',
      'Biometric authentication'
    ],
    demoUrl: 'https://mobile-app-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/mobile-app'
  },
  {
    id: 'web-scraper',
    title: 'Intelligent Web Scraper',
    shortDescription: 'Automated data extraction tool with AI-powered content analysis and filtering.',
    description: 'Automated data extraction tool with AI-powered content analysis, smart filtering, and scheduled scraping capabilities. Handles dynamic content and complex websites.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
    technologies: ['Python', 'BeautifulSoup', 'Selenium', 'Scrapy', 'MongoDB'],
    features: [
      'AI-powered content analysis',
      'Dynamic content handling',
      'Scheduled scraping tasks',
      'Data validation and cleaning',
      'Export to multiple formats'
    ],
    demoUrl: 'https://web-scraper-demo.com',
    sourceUrl: 'https://github.com/muhammad-abdullah/web-scraper'
  }
];
*/
