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
    name: 'Ryan Park Portfolio',
    description:
      'tbd',
    stack: ['JavaScript', 'CSS3', 'HTML', 'React'],
    sourceCode: 'https://github.com/ryanparketh/ryanp-portfolio',
    livePreview: 'https://github.com',
  },
  {
    name: 'Employee Tracker',
    description:
    'This is a employee tracker that can be used when the user inputs node server.js which will allow them to selecteed between viewing all departments, roles, and employees as well being able to add a department, role, or employee as well updating employee roles.',
    stack: ['Node', 'JavaScript', 'MySQL'],
    sourceCode: 'https://github.com/ryanparketh/employee-tracker',
    livePreview: 'https://github.com',
  },
  {
    name: 'NFT Emporium',
    description:
      'This projectis a full stack web application using the MERN Stack single- page application to build an e-commerce website called NFT Emporium.',
    stack: ['MERN', 'CSS3', 'JavaScript', 'GraphQL'],
    sourceCode: 'https://github.com/kmcwilson/NFT-Emporium',
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
