const header = {
  // change github to the repo of this 
  homepage: 'https://github.com/ryanparketh',
  title: 'RP.',
}

const about = {
  name: 'Ryan Park',
  role: 'Full Stack Web Developer',
  description:
    'Full stack web developer providing unique perspectives on how end-users interact with websites and software platforms. Innovative problem-solver who is passionate about developing with a focus on design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/ryanparketh/',
    github: 'https://github.com/ryanparketh',
  },
}

const projects = [
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'SQL',
  'Node',
  'Express',
  'Bootstrap',
  'React',
  'Git',
  'MERN',
  'Apollo',
  'GraphQL',
]

// added email for contact section
const contact = {
  email: 'ryanpark@rocketmail.com',
}

export { header, about, projects, skills, contact }
