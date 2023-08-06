import React from 'react'

export default {
  header: {
    name: 'Michael Stark',
    title: 'Entrepreneur - Builder - Software'
  },
  about: {
    title: 'About',
    description: (
      <>
        Michael is a software developer focused on product, efficiency, leveling up as a team, and building great software.
        <br /><br />
        Michael has been creating software products since 2012. His previous experience has been across many industries and areas around software development. Spanning from mobile development, conference tech, machine learning, virtual events, insurance, and digital health. He has a passion for entrepreneurship and helping others.
      </>
    )
  },
  current: {
    title: 'Currently Working On',
    items: [
      {
        title: '',
        description: 'Startup consulting and product strategy services with custom development.',
        link: {
          text: 'Explore',
          to: 'https://neralstark.com'
        },
        img: {
          src: require('../img/neralstark.png'),
          title: 'Neral Stark'
        }
      },
      {
        title: '',
        description: 'Software architect building new systems for the insurance industry',
        link: {
          text: 'Explore',
          to: 'https://brightway.com'
        },
        img: {
          src: "https://www.brightway.com/Content/Corporate/img/logo-brightway-insurance.png?format=webp",
          title: 'Brightway Insurance'
        }
      },
    ]
  },
  projects: {
    title: 'Projects'
  },
  footer: {
    title: 'Michael Stark',
    github: 'https://github.com/mstark5652',
    linkedin: 'https://www.linkedin.com/in/michaelstark5652',
    email: 'mailto:michael@starktech.dev'
  }
}
