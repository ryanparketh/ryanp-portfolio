const header = {
  // change github to the repo of this 
  homepage: 'https://github.com/ryanparketh',
  title: 'RP.',
}

const about = {
  name: 'Ryan Park',
  role: 'Full Stack Web Developer',
  description:
    'I am a full stack web developer that provides unique perspectives on how end-users interact with websites and software platforms. Innovative problem-solver who is passionate about developing with a focus on design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.',
  resume: 'https://docs.google.com/document/d/1iIWEl9bt9ylaiInqK_K4HtXIIsGU6BYl1eH416EWqx8/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/ryanparketh/',
    github: 'https://github.com/ryanparketh',
  },
}

const projects = [
  {
    name: 'Ryan Park Portfolio',
    description:
      'This is a personal portfolio I created that is visually appealing and user-friendly that showcases projects, skills, and has a contact section. It features a clean, modern design that allows the user to toggle between light and dark mode.',
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
      'This project is a full stack web application using the MERN Stack single-page application to build an e-commerce website called NFT Emporium.',
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
