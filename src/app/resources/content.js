import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Lex",
  lastName: "Kinser",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Gameplay Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Alexandria",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sandersalexandria/",
  },
  {
    name: "Bluesky",
    icon: "bluesky",
    link: "https://bsky.app/profile/ripleyscorner.bsky.social",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/lexluka_",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lex.never.lexi@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Lex Kinser Game Developer</>,
  subline: <>Hi, I'm Lex. I make games in Unity and Godot.</>,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/lex-dsq5bs",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a software developer with over 5 years experience building
        responsive web and mobile applications. Over the past year I've made the
        transition to game development. This site showcases my professional game
        development work, as well as independent games and my previous software
        engineering work. Looking for an engineer to help round out your game
        dev team? Feel free to reach out.
      </>
    ),
  },
  unity: {
    display: true, // set to false to hide this section
    title: "Unity",
    experiences: [
      {
        company: "CodeAlgo",
        timeframe: "Dec 2024 - Present",
        role: "Game Developer - Unity (Team Project)",
        achievements: [
          <>
            Designed and developed engaging interactive features such as player
            leveling system and XP rewards to enhance user experience and
            intellectual growth.
          </>,
          <>
            Designed the unit lesson system that enabled students to gain
            rewards and experience for completing individual lessons
          </>,
          <>
            Collaborated with graphic designers, UX designers, and web
            development teams to produce efficient, high-quality code
          </>,
          <>
            Ensured timely project delivery by adhering to deadlines and
            maintaining clear communication with the Chief Executive Officer and
            development team..
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-code-algo.png",
            alt: "Code Algo Game",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Candy Hag Dash",
        timeframe: "April 2022",
        role: "Game Developer - Unity (Team Project)",
        achievements: [
          <>Led the creative direction & implementation of the game.</>,
          <>
            Developed all core gaming mechanics including the gaining mechanic,
            knock back mechanic, and enemy following mechanic.
          </>,
          <>
            Collaborated with artists, a music composer, and game writer to
            manage the project development using project management tools like
            Trello
          </>,
          <>Created a system to source and assess user feed back</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/candy-hag-dash/cover-04.png",
            alt: "Code Algo Game",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/candy-hag-dash/cover-02.png",
            alt: "Code Algo Game",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  godot: {
    display: true, // set to false to hide this section
    title: "Godot",
    experiences: [
      {
        company: "Trick or Treat Tower Defense",
        timeframe: "Dec 2024 - Present",
        role: "Developer & Level Design - Godot (Individual Project)",
        achievements: [
          <>Designed and developed all core features and game mechanics</>,
          <>Set up automatic deployment using Netlify</>,
          <>
            Implemented a path finding system for mob enemies using
            NavigationAgent2D and Tilemap navigation layers
          </>,
          <>Implemented upgradable towers using custom resources</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/tower-defense/cover-video.mp4",
            alt: "Code Algo Game",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/technical/godot-editor.png",
            alt: "Code Algo Game",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Galaxy Hop Cafe",
        timeframe: "Dec 2024 - Present",
        role: "Developer, Level Design, and Art - Godot (Individual Project)",
        achievements: [
          <>Designed and created the majority of the art assets.</>,
          <>
            Developed a platform controller that managed the direction and speed
            of each platform in a specific lane.
          </>,
          <>
            Developed infinitely spawning platforms using AnimatableBody2D and
            Area2D signals to detect player collision
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/galaxy-hop-cafe/cover-video.mp4",
            alt: "Galaxy Hop Cafe",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/galaxy-hop-cafe/cover-01.png",
            alt: "Galaxy Hop Cafe",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  development: {
    display: true,
    title: "Web and Mobile Development",
    experiences: [
      {
        company: "Shopify",
        timeframe: "May 2022 - April 2024",
        role: "Software Engineer",
        achievements: [
          <>
            Laid the foundations for enabling merchants to add video backgrounds
            to their merchant store on the mobile application.
          </>,
          <>
            Championed new and engaging features for Shopify merchants in the
            Shop Editor.
          </>,
          <>
            Tackled development tasks based on system requirements and
            documented approaches.
          </>,
          <>
            Documented technical specifications and project testing methods for
            future reference.
          </>,
          <>
            Provided impactful solutions on bugs and inefficiencies in the
            codebase.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-shopify.png",
            alt: "Mobile Shopify Editor",
            width: 16,
            height: 9,
          },
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-shopify2.png",
            alt: "Details Form",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Crema",
        timeframe: "May 2019 - May 2022",
        role: "Software Engineer",
        achievements: [
          <>
            On cross-functional Agile teams, developed a variety of full-stack
            mobile applications using React Native, Firebase, Expo, and
            OneSignal.
          </>,
          <>
            Developed a navigational app to help pedestrians and cyclists
            navigate a 200-acre campus
          </>,
          <>
            This is a full feature navigation app that would dynamically update
            directions if the user updated the campus map.
          </>,
          <>
            Scaled a mobile application from under 5000 to over 200,000 unique
            users and later sold for $200,000.
          </>,
          <>
            Created and owned automated deployment strategies for mobile
            products in both the Android Google Play and Apple App stores
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-crema1.png",
            alt: "Vera Mobile App",
            width: 16,
            height: 9,
          },
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-crema2.png",
            alt: "Vera Mobile App",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Unity",
        description: <>Develops games in Unity and is proficient in C#</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/technical/unity-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/candy-hag-dash/cover-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Godot",
        description: (
          <>Proficient with the node based development and GDscript </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/technical/godot-editor.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React",
        description: (
          <>Web application development using Typescript and Node js</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/technical/react-no-background.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/technical/typescript.webp",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "React Native",
        description: <>Mobile Development</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/technical/react-native.png",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
