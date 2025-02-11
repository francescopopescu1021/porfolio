const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Francesco Virgilio', 'Popescu'],
  greetingEmoji: '👋',
  role: 'Full Stack Developer',
  company: '',
  description: [
    'Innovative Full-Stack Developer with 6 years of experience, specializing in creating elegant solutions, optimize system performance, and enhance user experiences. Passionate about leveraging cutting-edge technologies to contribute to mission-driven organizations and sustainable initiatives.',
  ],
  resume: '/Francesco Virgilio Popescu_Frontend developer.pdf',
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/paws.png',
    name: `P'sPaws`,
    description: [
      'A pet care service or  offers  of products and services to pamper your furry friends.',
    ],
    stack: ['Bootstrap', 'jQuery'],
    
    livePreview: 'http://www.pspaws.co.uk/',
  },
  {
    thumbnail: 'images/knote.png',
    name: 'Knote',
    description: [
      'A versatile platform or tool designed to help users organize, manage, and share notes, ideas, and tasks',
    ],
    stack: ['React', 'Node', 'MongoDB', 'Twitter API'],
    
    livePreview: 'https://knote.com/',
  },
  {
    thumbnail: 'images/landscaping.png',
    name: 'J&D Landscaping',
    description: [
      'A professional landscaping service that specializes in designing, maintaining, and enhancing outdoor spaces',
    ],
    stack: ['Next.js', 'Swiper', 'Tailwind CSS'],
    
    livePreview: 'https://jdlandscaping.net/',
  },
  {
    thumbnail: 'images/twl.png',
    name: 'TWL',
    description: [
      'A company or brand that offers a range of services or products. It could be related to technology, logistics, or any industry, depending on its specific focus',
    ],
    stack: ['Next.js', 'PHP', 'MUI'],
    
    livePreview: 'https://www.thewodlife.com.au/',
  },
  {
    thumbnail: 'images/realtor.png',
    name: 'Realtor',
    description: [
      'A professional who specializes in helping people buy, sell, or rent properties',
    ],
    stack: ['Next.js', 'Node.js', 'PWA'],
    
    livePreview: 'https://www.realtor.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Redux',
  'Next.js',
  'Angular.js',
  'Node.js',
  'PHP',
  'Laravel',
  'API Platform',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'CodeIgniter',
  'Bootstrap',
  'Tailwind CSS'
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'jpopescufv1021@gmail.com',
}

export { header, about, projects, skills, contact }
