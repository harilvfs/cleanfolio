const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'PXLR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hari Chalise',
  role: 'Linux Enthusiast',
  description:
    'I am a Linux enthusiast specializing in Bash scripting and passionate about open source. I have been actively contributing to the Linux community for over a year particularly within the Arch Linux ecosystem where I focus on creating efficient and customized solutions.My tech journey began with a fascination for Linux leading me to explore system management and kernel customization. I am proficient in Bash scripting and excited by the potential for building secure and efficient systems. ',
  works: 'https://github.com/harilvfs/carch',
  social: {
    reddit: 'https://reddit.com/u/aayush-le',
    github: 'https://github.com/harilvfs',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Carch',
    description:
      'An automated script for quick & easy Linux system setup (Arch & Fedora) 🧩',
    stack: ['Bash', 'Shell'],
    sourceCode: 'https://github.com/carch',
    livePreview: 'https://github.com/carch',
  },
  {
    name: 'Arch-Wiki',
    description:
      'ArchWiki - OCD Edition',
    stack: ['Vue', 'TypeScript', 'Markdown'],
    sourceCode: 'https://github.com/harilvfs/Arch-Wiki',
    livePreview: 'https://github.com/Arch-Wiki',
  },
  {
    name: 'Dwm',
    description:
      'DWM patches with my custom config 🛠️',
    stack: ['Shell', 'Roff', 'C', 'Lua'],
    sourceCode: 'https://github.com/harilvfs/dwm',
    livePreview: 'https://github.com/harilvfs/dwm',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Shell',
  'C',
  'Material UI',
  'Photoshop',
  'Git',
  'Linux',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'harilvfs@chalisehari.com.np',
}

export { header, about, projects, skills, contact }
